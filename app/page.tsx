import Link from "next/link"
import Container from "../components/container"
import Hero from "../components/hero"
import Period from "../components/period"
import PopIn from "../components/pop-in"
import Skill from "../components/skill"
import { ISkill, IPeriod, IProject } from "../lib/utils"
import Image from "next/image"
import { Metadata } from "next"
import getProjects from "../lib/api/projects/list"
import getSkills from "../lib/api/skills/list"
import getPeriods from "../lib/api/periods/list"
import FiverLink from "../components/fiverLink"
import ProjectCard from "../components/projectCard"
import SlideIn from "../components/slide-in"

export const revalidate = 18144000

export const metadata: Metadata = {
	title: 'Manuel Baldoni - Portfolio',
	description: 'Portfolio di Manuel Baldoni - Full-stack developer - Front-end passion',
	keywords: 'Manuel Baldoni, Portfolio, Full-stack developer, Front-end passion, CSS, NextJS, React, Javascript, Typescript, HTML, Web Development, Web Design, Web Developer, Front-end Developer, Back-end Developer, Software Engineer, Software Developer',
}

export default async function HomePage() {
	const projects = await getProjects({ limit: "3" })
	const skills = await getSkills()
	const periods = await getPeriods()

	return (
		<div>
			<section className='relative isolate min-h-screen flex items-center lg:p-0'>
				<Container>
					<Hero></Hero>
				</Container>
			</section>
			<section id='projects' className='max-w-screen overflow-x-hidden'>
				<Container>
					<h3 className='text-center font-bold'>SOME OF MY <span className='clip-text'>PROJECTS</span></h3>
				</Container>
				<Container>
					<SlideIn direction="top" className="grid grid-cols-1 lg:grid-cols-3 gap-6">
						{
							projects?.map((p: IProject, i: number) => {
								return (
									<ProjectCard
										key={p?.slug}
										project={p}
										i={i}
									/>
								)
							})
						}
					</SlideIn>
				</Container>
				<Container>
					<Link
						href={"/projects"}
						className={`block w-fit mx-auto mt-10 rainbow-border text-main shadow-[0_0_10px_-2px_#ffffff] px-6 py-3 text-center text-xl font-bold uppercase rounded-md`}
					>
						{"view all projects"}
					</Link>
				</Container>
			</section>
			<section id='skills'>
				<Container>
					<h3 className='text-center font-bold'>MY SKILLS AND <span className='clip-text'>KNOWLEDGE</span></h3>
				</Container>
				<Container>
					<PopIn className='container grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 xl:grid-cols-8 gap-6' delay={0}>
						{
							skills?.map((skill: ISkill, i: number) => {
								return (
									<Skill
										key={skill?.title}
										skill={skill}
										style={{
											transitionDelay: `${i * 200}ms`
										}}
									></Skill>
								)
							})
						}
					</PopIn>
				</Container>
			</section>
			<section id='info' className='relative isolate overflow-visible'>
				<Image className='absolute object-right object-contain z-[-1] opacity-20' src={"/images/technology_bg2.png"} alt='' fill />
				<Container>
					<h3 className='text-tertiary text-center lg:text-start mb-5'>
						{`I'm a Software Engineer.`} <span className='animate-blink'>|</span>
					</h3>
					<p className='text-main text-center lg:text-start'>
						{`Currently, I'm a Front-end Developer at `}<a href='https://diemmea.com' target='__blank' className='font-bold after:bg-highlight underline-effect'>DMA - CX Company for B2B</a>
					</p>
					<p className='text-center lg:text-start text-main quote mx-auto lg:mx-0 mt-5'>
						{"I am a passionate Front End Developer with my first significant professional experience in DMA, creating engaging and interactive user experiences. "}
						<br></br>
						{"I have a solid understanding of front-end technologies like HTML, CSS, and JavaScript, and I am working with various frameworks such as React, Vue, and Angular."}
						<br></br>
						{"My strengths include adaptability, quick learning, and a good command of the English language."}
					</p>
				</Container>
			</section>
			<section>
				<Container className="relative flex flex-col items-stretch gap-[100px]">
					<div className="absolute top-0 bottom-0 w-[10px] left-0 lg:left-[50%] lg:translate-x-[-50%]">
						<div className="sticky top-[50vh] translate-y-[-50%] w-[10px] h-[200px] bg-gradient-to-b from-transparent via-highlight to-transparent"></div>
						<div className="absolute inset-0 bg-highlight opacity-10"></div>
					</div>
					{
						periods?.map((p: IPeriod, i: number) => {
							return <Period key={p.title} period={p} i={i} />
						})
					}
				</Container>
			</section>
			<section>
				<Container>
					<FiverLink />
				</Container>
			</section>
		</div>
	)
}