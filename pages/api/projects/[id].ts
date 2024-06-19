import type { NextApiRequest, NextApiResponse } from "next";
import { IProject, ISkill, fetchRestAPI } from "../../../lib/utils";

export default async function getProject(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	const resFetch = await fetchRestAPI(`/entries?content_type=project&fields.slug=${req.query.id}&include=3`);
	const contentful_project = resFetch.items[0]

	const images: Array<{
		image_url: string
		alt_text: string
	}> = []

	for (let image of contentful_project?.fields?.images || []) {
		const image_object = resFetch.includes.Asset.find((a: any) => a.sys.id === image.sys.id)
		const image_url = `https:${image_object.fields.file.url}`;

		images.push({
			image_url: image_url,
			alt_text: image_object.title
		})
	}

	const resSkills = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/skills/list?skills=${(contentful_project.fields.skills || [])?.map((s: any) => { return s.sys.id })?.join(",")}`)

	const skills: Array<ISkill> = (await resSkills.json())?.data || []

	const project: IProject = {
		slug: contentful_project?.fields.slug,
		title: contentful_project?.fields.title,
		description: contentful_project?.fields.description,
		link: contentful_project?.fields.link,
		images: images,
		publish_date: contentful_project?.fields.publishDate,
		skills: skills
	};

	return res.status(200).json({ data: project });
}
