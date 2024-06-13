import type { NextApiRequest, NextApiResponse } from "next";
import { IProject, fetchRestAPI } from "../../../lib/utils";

export default async function getProjects(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	const resFetch = await fetchRestAPI(`/entries?content_type=project&order=fields.order&include=3`);

	const projects: Array<IProject> = []
	for (let i of resFetch.items) {
		const images: Array<{
			image_url: string
			alt_text: string
		}> = []

		for (let image of i.fields.images) {
			const image_object = resFetch.includes.Asset.find((a: any) => a.sys.id === image.sys.id)
			const image_url = `https:${image_object.fields.file.url}`;

			images.push({
				image_url: image_url,
				alt_text: image_object.title
			})
		}

		projects.push({
			slug: i.fields.slug,
			title: i.fields.title,
			description: i.fields.description,
			link: i.fields.link,
			images: images,
			publish_date: i.fields.publishDate
		});
	};

	return res.status(200).json({ data: projects });
}
