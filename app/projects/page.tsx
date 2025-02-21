import Container from "../../components/container"
import FiverLink from "../../components/fiverLink"
import { SearchParams } from "../../lib/types/general"
import getSkills from "../../lib/api/skills/list"
import getProjects from "../../lib/api/projects/list"
import ListingProjects from "../../components/listingProjects"

enum ProjectLayout {
	grid = "",
	list = "list"
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