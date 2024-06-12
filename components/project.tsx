import Image from "next/image";
import Link from "next/link";
import SlideIn from "./slide-in";
import { IProject } from "../lib/utils";

interface IPropsProject {
	project: IProject
	reverse: boolean
}

export default function Project(props: IPropsProject) {
	const { slug, title, description, link, thumbnail_image, publish_date } = props?.project
	const reverse = props?.reverse

	return (
		<SlideIn direction={reverse ? "left" : "right"}>
			<div className={`project relative flex flex-wrap items-center gap-y-8 ${reverse ? "flex-row-reverse" : ""}`}>
				<div className="relative w-full lg:w-1/2 z-30">
					<h5 className={`w-fit mx-auto lg:mx-0 text-highlight font-semibold pointer-events-none ${reverse ? "lg:ml-auto" : ""}`}>Featured Project</h5>
					<h4 className={`w-fit mx-auto lg:mx-0 text-tertiary text-center font-semibold cursor-pointer ${reverse ? "lg:ml-auto" : ""}`}>
						<Link href={`/projects/${slug}`} className="text-tertiary">
							{title}
						</Link>
					</h4>
					<span className={`block w-fit mx-auto lg:mx-0 text-highlight font-semibold pointer-events-none ${reverse ? "lg:ml-auto" : ""}`}>{new Date(publish_date * 1000)?.getFullYear()}</span>

					<Link href={`/projects/${slug}`} className={`block lg:hidden relative group w-11/12 mx-auto aspect-video rounded-xl overflow-hidden mt-10`}>
						<Image src={thumbnail_image.src} alt={thumbnail_image.alt} fill sizes="90vw, min-width(1024px) 40vw" className="group-hover:scale-110 grayscale group-hover:grayscale-0 object-cover transition-all duration-500 transform-gpu" />
						<div className="absolute inset-0 opacity-50 bg-black"></div>
					</Link>

					<Link href={`/projects/${slug}`} className={`block group relative top-[-50px] lg:top-0 w-full lg:w-[120%] rounded-xl overflow-hidden lg:mt-10 border-hemerald cursor-pointer transition-all transform-gpu ${reverse ? " border-r-2 border-l-2 lg:border-l-0 lg:translate-x-[-16%]" : "border-l-2 border-r-2 lg:border-r-0"}`}>
						<div className="absolute inset-0 bg-secondary opacity-50 z-10"></div>
						<div className={`absolute w-0 h-full group-hover:w-full bg-hemerald opacity-50 z-20 transition-all duration-500 ${reverse ? "right-0" : "left-0"}`}></div>
						<div className="relative text-tertiary px-8 py-6 z-30 backdrop-blur-md" dangerouslySetInnerHTML={{ __html: description }} />
					</Link>
				</div>
				<Link href={`/projects/${slug}`} className={`hidden lg:block relative group w-full lg:w-1/2 aspect-video rounded-xl overflow-hidden border-highlight z-10 border-none lg:border-t-[2px] ${reverse ? "lg:border-l-[2px] lg:shadow-project" : "lg:border-r-[2px] lg:shadow-project"}`}>
					<Image src={thumbnail_image.src} alt={thumbnail_image.alt} fill sizes="90vw, min-width(1024px) 40vw" className="group-hover:scale-110 grayscale group-hover:grayscale-0 object-cover transition-all duration-300" />
					<div className="absolute inset-0 opacity-50 bg-black"></div>
				</Link>
			</div>
		</SlideIn>
	)
}