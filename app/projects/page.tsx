import Container from "../../components/container"
import FiverLink from "../../components/fiverLink"
import { SearchParams } from "../../lib/types/general"
import getSkills from "../../lib/api/skills/list"
import getProjects from "../../lib/api/projects/list"
import ListingProjects from "../../components/listingProjects"
import { Metadata } from "next"

export const revalidate = 18144000

export const metadata: Metadata = {
	title: 'Projects | Manuel Baldoni - Portfolio',
	description: 'The list of projects developed by Manuel Baldoni, a Full-stack developer with a Front-end passion',
	keywords: 'Manuel Baldoni, Portfolio, Full-stack developer, Front-end passion, CSS, NextJS, React, Javascript, Typescript, HTML, Web Development, Web Design, Web Developer, Front-end Developer, Back-end Developer, Software Engineer, Software Developer, Projects, Portfolio Projects',
}

export default async function ProjectsPage(props: {
	searchParams: SearchParams
}) {
	const searchParams = await props.searchParams

	const skills = await getSkills()
	const projects = await getProjects({
		skills: typeof searchParams.skills === "string" ? searchParams.skills : searchParams.skills?.join(","),
		query: searchParams.query?.toString() ?? ""
	})

	return (
		<div>
			<ListingProjects
				projects={projects}
				skills={skills}
			/>
			<section className="pt-0">
				<Container>
					<FiverLink />
				</Container>
			</section>
		</div>
	)
}