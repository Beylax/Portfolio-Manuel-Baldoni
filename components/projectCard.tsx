import Image from "next/image"
import { IProject, ISkill } from "../lib/utils"
import Link from "next/link"
import Icon from "./icon"
import tailwindConfig from "../tailwind.config"

interface IProjectCardProps {
	project: IProject
}

export default function ProjectCard(props: IProjectCardProps) {
	const { slug, title, description, link, images, publish_date, skills } = props?.project

	return (
		<Link href={`/projects/${slug}`} className="project-card group block overflow-hidden bg-secondary rounded-lg outline outline-hemerald outline-0 hover:outline-1 hover:shadow-project hover:scale-105 transition-transform transform-gpu">
			<div className="project-card-image relative isolate h-[200px] flex-shrink-0">
				<Image src={images[0].image_url} alt={images[0].alt_text} className="object-cover" fill />
				<div className="absolute inset-0 bg-black opacity-70 group-hover:opacity-20 transition-opacity"></div>
			</div>
			<div className="project-card-content p-4 flex-grow">
				<header className="flex flex-wrap items-start justify-between">
					<h5 className="flex items-center gap-x-3 text-hemerald font-bold">
						<span>
							{title}
						</span>
					</h5>
					<span className="text-highlight italic">{`${(new Date(publish_date * 1000)).getFullYear()}`}</span>
				</header>
				<p className="project-description text-main line-clamp-2 my-4" dangerouslySetInnerHTML={{ __html: description }}></p>
				<div className="w-full flex gap-[8px] items-center">
					{
						skills?.slice(0, 4)?.map((s: ISkill) => {
							return (
								<div key={s.title} className="relative w-[24px] h-[24px] rounded-full overflow-hidden">
									<Image className="object-contain object-center" src={s.image_url} alt={s.title} fill />
								</div>
							)
						})
					}
					{
						(skills?.length || 0) > 4 ?
							<span>{`+${(skills?.length || 0) - 4} more...`}</span> : null
					}
				</div>
			</div>
		</Link>
	)
}