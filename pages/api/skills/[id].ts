import type { NextApiRequest, NextApiResponse } from "next";
import { ISkill, fetchRestAPI } from "../../../lib/utils";
import { SkillFields } from "../../../lib/contentfulTypes";

export default async function getSkill(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	const resFetch = await fetchRestAPI(`/entries/${req.query.id}`);

	const resImage = await fetchRestAPI(
		`/assets/${(resFetch.fields as SkillFields).image.sys.id}`,
	);

	const image_url = `https:${resImage.fields.file.url}`;

	const skill: ISkill = {
		image_url: image_url,
		title: resFetch.fields.title,
		link: resFetch.fields.link,
		level: (resFetch.fields as SkillFields).level,
	};

	return res.status(200).json({ data: skill });
}
