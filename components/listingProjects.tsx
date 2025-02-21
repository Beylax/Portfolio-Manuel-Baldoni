"use client";

import router from "next/router";
import projects from "../_pages/projects";
import { IProject, ISkill } from "../lib/utils";
import tailwindConfig from "../tailwind.config";
import Container from "./container";
import Icon from "./icon";
import MultiSelect from "./multiSelect";
import ProjectCard from "./projectCard";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";

interface IListingProjectsProps {
	projects: IProject[];
	skills: ISkill[];
}

enum ProjectLayout {
	grid = "",
	list = "list"
}

export default function ListingProjects(props: IListingProjectsProps) {
	const { projects, skills } = props

	const searchParams = useSearchParams()
	const router = useRouter()
	const pathname = usePathname()

	const createQueryString = useCallback(
		(name: string, value: string, action: "add" | "update" | "remove" | "delete" = "update") => {
			const params = new URLSearchParams(searchParams.toString())

			switch (action) {
				case "add":
					params.append(name, value)
					break
				case "update":
					params.set(name, value)
					break
				case "remove":
					params.delete(name)
					searchParams.getAll(name)?.forEach(v => {
						if (v !== value) {
							params.append(name, v)
						}
					})
					break
				case "delete":
					params.delete(name)
					break
			}

			return params.toString()
		},
		[searchParams]
	)

	const [projectsLayout, setProjectsLayout] = useState(ProjectLayout.grid)

	return (
		<section className="pt-0">
			<Container className="mb-10 lg:mb-20">
				<h1 className="uppercase font-bold">
					MY{" "}
					<span className="uppercase text-highlight">PROJECTS</span>
				</h1>
			</Container>
			<Container className="flex items-start gap-4">
				<div className="flex-grow flex items-center justify-between flex-wrap gap-4">
					<input
						className="w-full lg:w-auto lg:order-2 bg-white text-black p-2 rounded-md"
						type="search"
						placeholder="Search..."
						value={searchParams.get("query") ?? ""}
						onChange={(e) => {
							router.push(pathname + '?' + createQueryString('query', e.target.value, e.target.value ? 'update' : 'remove'), {
								scroll: false
							})
						}}
					/>
					<div className="flex items-center gap-4">
						{/* CUSTOM MULTISELECT */}
						<MultiSelect
							defaultOption={{
								label: "Choose skills",
								value: "",
								isCheckedByDefault: false,
							}}
							options={skills?.map((s: ISkill) => {
								return {
									label: s.title,
									value: s.contentful_id,
									image_url: s.image_url,
									isCheckedByDefault:
										searchParams.get("skills")?.includes(s.title) ??
										false,
								};
							})}
						/>
						{
							searchParams.getAll("skills")?.length > 0
							&&
							<button className="text-highlight text-sm" onClick={() => {
								router.push(pathname + '?' + createQueryString('skills', '', 'delete'), {
									scroll: false
								})
							}}>
								{"clear filters"}
							</button>
						}
					</div>
				</div>
				<div className="flex items-center gap-4">
					<div className="flex items-center gap-1">
						<button
							className={`p-2 rounded-md ${projectsLayout === ProjectLayout.grid
								? "bg-highlight"
								: ""
								}`}
							onClick={() =>
								setProjectsLayout(ProjectLayout.grid)
							}
						>
							<Icon
								icon="grid"
								fill={
									tailwindConfig.theme.extend.colors["main"]
								}
							/>
						</button>
						<button
							className={`p-2 rounded-md ${projectsLayout === ProjectLayout.list
								? "bg-highlight"
								: ""
								}`}
							onClick={() =>
								setProjectsLayout(ProjectLayout.list)
							}
						>
							<Icon
								icon="list"
								fill={
									tailwindConfig.theme.extend.colors["main"]
								}
							/>
						</button>
					</div>
				</div>
			</Container>
			<Container className={`${projectsLayout} mt-10 min-h-[300px]`}>
				<div className={`projects-layout ${projectsLayout}`}>
					{projects?.map((p, i) => {
						return (
							<ProjectCard
								key={p?.slug}
								project={p}
							></ProjectCard>
						);
					})}
					{projects?.length <= 0 ? (
						<h4 className="text-white italic">No projects found</h4>
					) : null}
				</div>
			</Container>
		</section>
	);
}
