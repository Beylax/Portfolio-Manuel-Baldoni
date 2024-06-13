import dynamic from 'next/dynamic'
import { IProject } from '../../lib/utils'
import Container from '../../components/container'
import { useState } from 'react'
import Icon from '../../components/icon'
import tailwindConfig from '../../tailwind.config'
import Layout from '../../components/layout'
import ProjectCard from '../../components/projectCard'

enum ProjectLayout {
	grid = "",
	list = "list"
}

const Projects = ({ projects }: { projects: Array<IProject> }) => {
	const [projectsLayout, setProjectsLayout] = useState(ProjectLayout.grid)

	return (
		<Layout
			pageTitle='Projects | Manuel Baldoni - Portfolio'
			pageDescription='Projects | Frontend | Listing'
			breadcrumb
		>
			<section className='pt-0'>
				<Container className="mb-10 lg:mb-20">
					<h1 className='uppercase font-bold'>MY <span className='uppercase text-highlight'>PROJECTS</span></h1>
				</Container>
				<Container className="flex items-center justify-between">
					<div>
						{/* TODO: */}
					</div>
					<div className='flex items-center gap-1'>
						<button className={`p-2 rounded-md ${projectsLayout === ProjectLayout.grid ? "bg-highlight" : ""}`} onClick={() => setProjectsLayout(ProjectLayout.grid)}>
							<Icon icon='grid' fill={tailwindConfig.theme.extend.colors["main"]} />
						</button>
						<button className={`p-2 rounded-md ${projectsLayout === ProjectLayout.list ? "bg-highlight" : ""}`} onClick={() => setProjectsLayout(ProjectLayout.list)}>
							<Icon icon='list' fill={tailwindConfig.theme.extend.colors["main"]} />
						</button>
					</div>
				</Container>
				<Container className={`projects-layout ${projectsLayout} mt-10`}>
					{
						projects?.map((p, i) => {
							return (
								<ProjectCard
									key={p?.slug}
									project={p}
								></ProjectCard>
							)
						})
					}
				</Container>
			</section>
		</Layout>
	)
}

export default Projects

export async function getServerSideProps() {
	const resProjects = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/projects/list`)

	const projects = (await resProjects.json())?.data || []

	return {
		props: {
			projects,
		},
	}
}