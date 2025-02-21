import { ISkill, fetchRestAPI } from "../../utils";
import { SkillFields } from "../../types/contentfulTypes";

export default async function getSkill({
	id,
}: {
	id: string;
}): Promise<ISkill> {
	const resFetch = await fetchRestAPI(`/entries/${id}?include=3`);

	const resImage = await fetchRestAPI(
		`/assets/${(resFetch.fields as SkillFields).image.sys.id}`,
	);

	const image_url = `https:${resImage.fields.file.url}`;

	const skill: ISkill = {
		contentful_id: resFetch.sys.id,
		image_url: image_url,
		title: resFetch.fields.title,
		link: resFetch.fields.link,
		level: (resFetch.fields as SkillFields).level,
	};

	return skill;
}
