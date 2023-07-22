import type { NextPage } from 'next'
import Container from '../components/container'
import Image from 'next/image'
import Project from '../components/project'
import Hero from '../components/hero'

const About: NextPage = () => {
	return (
		<div className='min-h-screen'>
			<section>
				<Container className="flex flex-col gap-y-20">
					About
				</Container>
			</section>
		</div>
	)
}

export default About
