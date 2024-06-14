import type { NextApiRequest, NextApiResponse } from "next";
import { IProject, ISkill, fetchRestAPI } from "../../../lib/utils";

export default async function getProjects(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	const filters = []
	if (req.query.skills) {
		filters.push(`fields.skills.sys.id[in]=${req.query.skills}`)
	}
	const resFetch = await fetchRestAPI(`/entries?content_type=project&order=fields.order&include=3&${filters.join("&")}`);


	const projects: Array<IProject> = []
	for (let i of resFetch.items || []) {
		const images: Array<{
			image_url: string
			alt_text: string
		}> = []

		for (let image of i.fields.images || []) {
			const image_object = resFetch.includes.Asset.find((a: any) => a.sys.id === image.sys.id)
			const image_url = `https:${image_object.fields.file.url}`;

			images.push({
				image_url: image_url,
				alt_text: image_object.title
			})
		}

		const skills: Array<ISkill> = []

		for (let skill of i.fields.skills || []) {
			const skill_object = resFetch.includes.Entry.find((a: any) => a.sys.id === skill.sys.id)

			const image_object = resFetch.includes.Asset.find((a: any) => a.sys.id === skill_object.fields.image.sys.id)
			const image_url = `https:${image_object.fields.file.url}`;

			skills.push({
				contentful_id: skill_object.sys.id,
				image_url: image_url,
				title: skill_object.fields.title,
				link: skill_object.fields.link,
				level: skill_object.fields.level,
			})
		}

		projects.push({
			slug: i.fields.slug,
			title: i.fields.title,
			description: i.fields.description,
			link: i.fields.link,
			images: images,
			publish_date: i.fields.publishDate,
			skills: skills
		});
	};

	return res.status(200).json({ data: projects });
}
