import Link from "next/link";
import Container from "../../../components/container";
import FiverLink from "../../../components/fiverLink";
import Gallery from "../../../components/gallery";
import { Params } from "../../../lib/types/general";
import { ISkill } from "../../../lib/utils";
import getProject from "../../../lib/api/projects/single";
import Image from "next/image";

export default async function ProjectPage(props: {
	params: Params
}) {
	const params = await props.params
	const slug = params.slug

	const project = await getProject({
		slug: slug
	})

	return (
		<Container>
			<section className="pt-0">
				{
					project?.link ?
						<Link href={project?.link} target="_blank" className="block w-fit">
							<h1 className="text-hemerald font-bold w-fit">{project?.title}</h1>
						</Link>
						:
						<h1 className="text-hemerald font-bold">{project?.title}</h1>
				}
			</section>
			<section className="pt-0">
				<p dangerouslySetInnerHTML={{ __html: project?.description }}></p>
			</section>
			{
				(project?.skills || [])?.length > 0 ?
					<section className="pt-0">
						<h4 className="text-tertiary mb-5">{"Skills used and acuired in this project:"}</h4>
						<ul className="flex flex-wrap items-center gap-[12px]">
							{
								project?.skills?.map((s: ISkill) => {
									return (
										<li key={s.title} className="relative w-[48px] h-[48px] rounded-full overflow-hidden">
											<Image className="object-contain object-center" src={s.image_url} alt={s.title} fill />
											{
												s.link ?
													<Link className="absolute inset-0 z-10" href={s.link} target="_blank"></Link> : null
											}
										</li>
									)
								})
							}
						</ul>
					</section> : null
			}
			<section className="pt-0">
				{
					project?.images ?
						<Gallery images={project?.images} /> : null
				}
			</section>
			<section className="pt-0">
				<FiverLink />
			</section>
		</Container>
	)
}