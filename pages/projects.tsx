import type { NextPage } from 'next'
import Container from '../components/container'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { projects } from '../lib/utils'

const Project = dynamic(() => import('../components/project'), { ssr: false })

const Projects: NextPage = () => {
    return (
        <div>
            <section>
                <Container className="mb-20">
                    <h1 className='uppercase text-center font-bold'>MY <span className='uppercase text-highlight'>PROJECTS</span></h1>
                </Container>
                <Container className="flex flex-col gap-y-20">
                    {
                        projects?.map((p, i) => {
                            return (
                                <Project
                                    key={p?.title}
                                    project={p}
                                    reverse={i % 2 === 0}
                                ></Project>
                            )
                        })
                    }
                </Container>
            </section>
        </div>
    )
}

export default Projects
