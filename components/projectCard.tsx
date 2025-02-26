"use client"

import Image from "next/image";
import Link from "next/link";
import SlideIn from "./slide-in";
import { IProject, ISkill } from "../lib/utils";

interface IPropsProject {
	project: IProject
	reverse?: boolean
	i?: number
}

export default function ProjectCard(props: IPropsProject) {
	const { slug, title, description, images, publish_date, skills } = props?.project
	const reverse = props?.reverse

	return (
		<Link
			href={`/projects/${slug}`}
			className="project-card block relative isolate h-full rounded-xl overflow-hidden before:absolute before:inset-0 before:backdrop-blur-md before:z-[-1] after:absolute after:inset-0 after:bg-gradient-to-r after:from-highlight after:to-highlight50 after:opacity-20 after:z-[-1] after:transition-all after:duration-1000 after:ease-in-out border-4 border-transparent rainbow-border-hover hover:scale-105 transition-transform transform-gpu"
		>
			<div className="project-card-image relative isolate h-[250px] flex-shrink-0">
				<div className="absolute inset-0 bg-black opacity-50 z-10"></div>
				<Image src={images[0].image_url} alt={images[0].alt_text ?? title ?? "Project"} fill className="object-cover" />
			</div>
			<div className="p-4">
				<header className="flex flex-wrap items-center justify-between">
					<h5 className="flex items-center gap-x-3 text-tertiary font-bold">
						<span>
							{title}
						</span>
					</h5>
					<span className="text-sm font-bold text-hemerald italic">{`${(new Date(publish_date * 1000)).getFullYear()}`}</span>
				</header>
				<div className="project-description line-clamp-3 my-4 text-main" dangerouslySetInnerHTML={{ __html: description }}></div>
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