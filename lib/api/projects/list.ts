import { IProject, ISkill, fetchRestAPI } from "../../../lib/utils";
import getSkills from "../skills/list";

export default async function getProjects(props?: {
	projects?: string;
	skills?: string;
	limit?: string;
	query?: string;
}): Promise<IProject[]> {
	const filters = [];
	if (props?.projects) {
		filters.push(`sys.id[in]=${props?.projects}`);
	}
	if (props?.skills) {
		filters.push(`fields.skills.sys.id[in]=${props?.skills}`);
	}
	if (props?.limit) {
		filters.push(`limit=${props?.limit}`);
	}
	if (props?.query) {
		filters.push(`query=${props?.query}`);
	}
	const resFetch = await fetchRestAPI(
		`/entries?content_type=project&order=fields.order&include=3&${filters.join(
			"&",
		)}`,
	);

	const projects: Array<IProject> = [];
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

		let skills: Array<ISkill> = [];
		if ((i.fields.skills?.length || 0) > 0) {
			skills = await getSkills({
				skills: (i.fields.skills || [])
					?.map((s: any) => {
						return s.sys.id;
					})
					?.join(","),
			});
		}

		projects.push({
			slug: i.fields.slug,
			title: i.fields.title,
			description: i.fields.description,
			link: i.fields.link,
			images: images,
			publish_date: i.fields.publishDate,
			skills: skills,
		});
	}

	return projects;
}
