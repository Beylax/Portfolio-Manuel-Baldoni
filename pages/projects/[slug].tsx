import Container from "../../components/container"
import { IProject } from "../../lib/utils"
import Link from "next/link"
import Gallery from "../../components/gallery"
import Layout from "../../components/layout"

export default function SingleProject({ project }: { project: IProject }) {
	return (
		<Layout
			pageTitle={`${project?.title} project | Manuel Baldoni - Portfolio`}
			pageDescription={`${project?.description}`}
			breadcrumb
		>
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
				<section className="pt-0">
					{
						project?.images ?
							<Gallery images={project?.images} /> : null
					}
				</section>
			</Container>
		</Layout>
	)
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
	const resProject = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/projects/${params.slug}`)

	const project = (await resProject.json())?.data || []

	return {
		props: {
			project,
		},
	}
}

// export async function getStaticPaths() {
// 	const resProjects = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/projects/list`)

// 	const projects = (await resProjects.json())?.data || []

// 	const paths = projects.map((project: IProject) => ({
// 		params: { slug: project.slug },
// 	}))

// 	return { paths, fallback: false }
// }