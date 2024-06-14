import type { NextApiRequest, NextApiResponse } from "next";
import { ISkill, fetchRestAPI } from "../../../lib/utils";
import { Item, SkillFields } from "../../../lib/contentfulTypes";

export default async function getSkills(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	const resFetch = await fetchRestAPI(`/entries?content_type=skill&include=3`);

	const skills: Array<ISkill> = []
	for (let i of resFetch.items) {
		const image_url = `https:${resFetch?.includes.Asset.find((a:any) => a.sys.id === (i.fields as SkillFields).image.sys.id).fields.file.url}`;

		skills.push({
			contentful_id: i.sys.id,
			image_url: image_url,
			title: i.fields.title,
			link: i.fields.link,
			level: (i.fields as SkillFields).level,
		});
	};

	return res.status(200).json({ data: skills });
}
