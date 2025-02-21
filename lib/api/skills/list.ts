import { ISkill, fetchRestAPI } from "../../../lib/utils";
import { SkillFields } from "../../types/contentfulTypes";

export default async function getSkills(props?: {
	skills?: string;
	limit?: string;
}): Promise<ISkill[]> {
	const filters = [];
	if (props?.skills) {
		filters.push(`sys.id[in]=${props?.skills}`);
	}
	if (props?.limit) {
		filters.push(`limit=${props?.limit}`);
	}
	const resFetch = await fetchRestAPI(
		`/entries?content_type=skill&include=3&${filters.join("&")}`,
	);

	const skills: Array<ISkill> = [];
	for (let i of resFetch.items) {
		const image_url = `https:${
			resFetch?.includes.Asset.find(
				(a: any) => a.sys.id === (i.fields as SkillFields).image.sys.id,
			).fields.file.url
		}`;

		skills.push({
			contentful_id: i.sys.id,
			image_url: image_url,
			title: i.fields.title,
			link: i.fields.link,
			level: (i.fields as SkillFields).level,
		});
	}

	return skills;
}
