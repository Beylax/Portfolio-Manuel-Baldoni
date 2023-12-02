import type { GetServerSidePropsContext, NextPage } from 'next'
import dynamic from 'next/dynamic'
import { IProject, projects } from '../../lib/utils'
import Container from '../../components/container'
import { useState } from 'react'
import Icon from '../../components/icon'
import tailwindConfig from '../../tailwind.config'

const ProjectCard = dynamic(() => import('../../components/projectCard'), { ssr: false })

enum ProjectLayout {
    grid = "",
    list = "list"
}

const Projects = ({projects}: { projects: Array<IProject> }) => {
    const [projectsLayout, setProjectsLayout] = useState(ProjectLayout.grid)

    return (
        <div className="no-padding-top">
            <section>
                <Container className="mb-20">
                    <h1 className='uppercase text-center font-bold'>MY <span className='uppercase text-highlight'>PROJECTS</span></h1>
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
        </div>
    )
}

export async function getServerSideProps({ query }: GetServerSidePropsContext) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/projects/list`)

    const projects = (await res.json())?.data || null

    return {
        props: {
            projects,
        },
    }
}

export default Projects
