import { IPeriod, IProject, ISkill, fetchRestAPI } from "../../../lib/utils";
import getProjects from "../projects/list";
import getSkills from "../skills/list";

export default async function getPeriods(props?: {
	limit?: number;
}): Promise<IPeriod[]> {
	const filters = [];
	if (props?.limit) {
		filters.push(`limit=${props?.limit}`);
	}
	const resFetch = await fetchRestAPI(
		`/entries?content_type=period&order=fields.timeline&include=5&${filters.join(
			"&",
		)}`,
	);

	const periods: Array<IPeriod> = [];
	for (let i of resFetch.items || []) {
		const images: Array<{
			image_url: string;
			alt_text: string;
		}> = [];

		for (let image of i.fields.images || []) {
			const image_object = resFetch.includes.Asset.find(
				(a: any) => a.sys.id === image.sys.id,
			);
			const image_url = `https:${image_object.fields.file.url}`;

			images.push({
				image_url: image_url,
				alt_text: image_object.title,
			});
		}

		const skills: Array<ISkill> = await getSkills({
			skills: (i.fields.skills || [])
				?.map((s: any) => {
					return s.sys.id;
				})
				?.join(","),
		});

		const projects: Array<IProject> = await getProjects({
			projects: (i.fields.projects || [])
				?.map((p: any) => {
					return p.sys.id;
				})
				?.join(","),
		});

		periods.push({
			title: i.fields.title,
			timeline: i.fields.timeline,
			description: i.fields.description,
			skills: skills,
			projects: projects,
			images: images,
		});
	}

	return periods;
}
