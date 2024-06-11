import { useRouter } from "next/router"
import Container from "../../components/container"
import { IProject, projects } from "../../lib/utils"
import { useEffect, useState } from "react"
import Link from "next/link"
import Icon from "../../components/icon"
import tailwindConfig from "../../tailwind.config"
import { GetServerSidePropsContext } from "next"
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

export async function getServerSideProps({ query }: GetServerSidePropsContext) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/projects/${query.slug}`)

    const project = (await res.json())?.data

    return {
        props: {
            project,
        },
    }
}