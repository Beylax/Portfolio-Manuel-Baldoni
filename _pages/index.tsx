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
			{""}
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