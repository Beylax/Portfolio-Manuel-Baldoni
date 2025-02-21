import dynamic from 'next/dynamic'
import { IProject, ISkill } from '../../lib/utils'
import Container from '../../components/container'
import { useState } from 'react'
import Icon from '../../components/icon'
import tailwindConfig, { content } from '../../tailwind.config'
import Layout from '../../components/layout'
import ProjectCard from '../../components/projectCard'
import { GetServerSidePropsContext } from 'next'
import { useRouter } from 'next/router'
import MultiSelect from '../../components/multiSelect'
import FiverLink from '../../components/fiverLink'

enum ProjectLayout {
	grid = "",
	list = "list"
}

const Projects = ({ projects, skills }: { projects: Array<IProject>; skills: Array<ISkill> }) => {
	const [projectsLayout, setProjectsLayout] = useState(ProjectLayout.grid)
	const router = useRouter()

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
				<Container className="flex items-start gap-4">
					<div className='flex-grow flex items-center justify-between flex-wrap gap-4'>
						<input className="w-full lg:w-auto lg:order-2 bg-white text-black p-2 rounded-md" type="search" placeholder='Search...' defaultValue={router.query.query} onChange={(e) => {
							const new_query = router.query
							if (e.target.value) {
								new_query.query = e.target.value
							}
							else {
								delete new_query.query
							}
							router.push(
								{
									query: new_query
								},
								undefined,
								{ scroll: false }
							)
						}} />
						{/* CUSTOM MULTISELECT */}
						<MultiSelect
							defaultOption={{
								label: "Choose skills",
								value: "",
								isCheckedByDefault: false
							}}
							options={skills?.map((s: ISkill) => {
								return {
									label: s.title,
									value: s.contentful_id,
									image_url: s.image_url,
									isCheckedByDefault: router.query.skills?.includes(s.title) ?? false
								}
							})}
						/>
					</div>
					<div className='flex items-center gap-4'>
						<div className='flex items-center gap-1'>
							<button className={`p-2 rounded-md ${projectsLayout === ProjectLayout.grid ? "bg-highlight" : ""}`} onClick={() => setProjectsLayout(ProjectLayout.grid)}>
								<Icon icon='grid' fill={tailwindConfig.theme.extend.colors["main"]} />
							</button>
							<button className={`p-2 rounded-md ${projectsLayout === ProjectLayout.list ? "bg-highlight" : ""}`} onClick={() => setProjectsLayout(ProjectLayout.list)}>
								<Icon icon='list' fill={tailwindConfig.theme.extend.colors["main"]} />
							</button>
						</div>
					</div>
				</Container>
				<Container className={`${projectsLayout} mt-10 min-h-[300px]`}>
					<div className={`projects-layout ${projectsLayout}`}>
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
						{
							projects?.length <= 0 ?
								<h4 className='text-white italic'>No projects found</h4> : null
						}
					</div>
				</Container>
			</section>
			<section className="pt-0">
				<Container>
					<FiverLink />
				</Container>
			</section>
		</Layout>
	)
}

export default Projects

export async function getServerSideProps(context: GetServerSidePropsContext) {
	const filters = []
	if (context.query.skills) {
		filters.push(`skills=${context.query.skills}`)
	}
	if (context.query.query) {
		filters.push(`query=${context.query.query}`)
	}
	const resProjects = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/projects/list?${filters.join("&")}`)
	const resSkills = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/skills/list`)

	const projects = (await resProjects.json())?.data || []
	const skills = (await resSkills.json())?.data || []

	return {
		props: {
			projects,
			skills
		},
	}
}