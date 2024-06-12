import Image from "next/image"
import { IProject } from "../lib/utils"
import Link from "next/link"
import Icon from "./icon"
import tailwindConfig from "../tailwind.config"

interface IProjectCardProps {
	project: IProject
}

export default function ProjectCard(props: IProjectCardProps) {
	const { slug, title, description, link, thumbnail_image, publish_date } = props?.project

	return (
		<Link href={`/projects/${slug}`} className="project-card group block overflow-hidden bg-secondary rounded-lg outline outline-hemerald outline-0 hover:outline-1 hover:shadow-project hover:scale-105 transition-transform transform-gpu">
			<div className="project-card-image relative isolate h-[200px] flex-shrink-0">
				<Image src={thumbnail_image.src} alt={thumbnail_image.alt} className="object-cover" fill />
				<div className="absolute inset-0 bg-black opacity-70 group-hover:opacity-50"></div>
			</div>
			<div className="project-card-content p-4 flex-grow">
				<header className="flex items-start justify-between">
					<h5 className="flex items-center gap-x-3 text-hemerald font-bold mb-4">
						<span>
							{title}
						</span>
						<Icon icon="external-link" fill={tailwindConfig.theme.extend.colors["hemerald"]} />
					</h5>
					<span className="text-highlight italic">{`${(new Date(publish_date * 1000)).getFullYear()}`}</span>
				</header>
				<p className="text-main line-clamp-2" dangerouslySetInnerHTML={{ __html: description }}></p>
			</div>
		</Link>
	)
}