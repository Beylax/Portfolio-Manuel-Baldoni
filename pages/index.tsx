import Link from 'next/link'
import dynamic from 'next/dynamic'
import { IPeriod, IProject, ISkill } from '../lib/utils'
import Container from '../components/container'
import Hero from '../components/hero'
import Skill from '../components/skill'
import PopIn from '../components/pop-in'
import Layout from '../components/layout'
import Image from 'next/image'
import Project from '../components/project'
import Period from '../components/period'

const Home = (
	{
		projects,
		skills,
		periods
	}:
		{
			projects: Array<IProject>;
			skills: Array<ISkill>;
			periods: Array<IPeriod>
		}
) => {
	return (
		<Layout
			pageTitle='Manuel Baldoni - Portfolio'
			pageDescription='Portfolio di Manuel Baldoni - Full-stack developer - Front-end passion'
		>
			<section className='relative isolate min-h-screen flex items-center p-0'>
				<Container>
					<Hero></Hero>
				</Container>
			</section>
			<section id='projects' className='max-w-screen overflow-x-hidden'>
				<Container>
					<h3 className='text-center font-bold'>SOME OF MY <span className='text-highlight'>PROJECTS</span></h3>
				</Container>
				<Container className="flex flex-col gap-y-20">
					{
						projects?.map((p, i) => {
							return (
								<Project
									key={p?.slug}
									project={p}
									reverse={i % 2 === 0}
								></Project>
							)
						})
					}
				</Container>
				<Container>
					<Link href={"/projects"} className='block w-fit mx-auto mt-0 lg:mt-[60px] underline-effect-small after:bg-hemerald font-bold text-white'>
						<h5>view all my projects</h5>
					</Link>
				</Container>
			</section>
			<section id='skills'>
				<Container>
					<h3 className='text-center font-bold'>MY SKILLS AND <span className='text-highlight'>KNOWLEDGE</span></h3>
				</Container>
				<Container>
					<PopIn className='container grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 xl:grid-cols-8 gap-6' delay={0}>
						{
							skills?.map((skill: ISkill, i) => {
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
					{
						periods?.map((p: IPeriod) => {
							return <Period key={p.title} period={p} />
						})
					}
				</Container>
			</section>
		</Layout>
	)
}

export default Home

export const getServerSideProps = (async () => {
	const resProjects = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/projects/list?limit=3`)
	const resSkills = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/skills/list`)
	const resPeriods = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/periods/list`)

	const projects = (await resProjects.json())?.data || []
	const skills = (await resSkills.json())?.data || []
	const periods = (await resPeriods.json())?.data || []

	return {
		props: {
			projects,
			skills,
			periods
		},
	}
})