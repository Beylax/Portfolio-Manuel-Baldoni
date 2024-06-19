import type { NextApiRequest, NextApiResponse } from "next";
import { IPeriod, IProject, ISkill, fetchRestAPI } from "../../../lib/utils";

export default async function getPeriods(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	const filters = []
	if (req.query.limit) {
		filters.push(`limit=${req.query.limit}`)
	}
	const resFetch = await fetchRestAPI(`/entries?content_type=period&order=fields.timeline&include=5&${filters.join("&")}`);


	const periods: Array<IPeriod> = []
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

		const resSkills = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/skills/list?skills=${(i.fields.skills || [])?.map((s: any) => { return s.sys.id })?.join(",")}`)

		const skills: Array<ISkill> = (await resSkills.json())?.data || []
		
        const resProjects = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/projects/list?projects=${(i.fields.projects || [])?.map((p: any) => { return p.sys.id })?.join(",")}`)

		const projects: Array<IProject> = (await resProjects.json())?.data || []

		periods.push({
            title: i.fields.title,
            timeline: i.fields.timeline,
            description: i.fields.description,
            skills: skills,
            projects: projects,
            images: images
		});
	};

	return res.status(200).json({ data: periods });
}
