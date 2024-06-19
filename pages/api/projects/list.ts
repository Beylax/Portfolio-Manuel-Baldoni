import type { NextApiRequest, NextApiResponse } from "next";
import { IProject, ISkill, fetchRestAPI } from "../../../lib/utils";

export default async function getProjects(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	const filters = []
	if (req.query.projects) {
		filters.push(`sys.id[in]=${req.query.projects}`)
	}
	if (req.query.skills) {
		filters.push(`fields.skills.sys.id[in]=${req.query.skills}`)
	}
	if (req.query.limit) {
		filters.push(`limit=${req.query.limit}`)
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

		let skills: Array<ISkill> = []
		if ((i.fields.skills?.length || 0) > 0) {
			const resSkills = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/skills/list?skills=${(i.fields.skills || [])?.map((s: any) => { return s.sys.id })?.join(",")}`)
	
			skills = (await resSkills.json())?.data			
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
