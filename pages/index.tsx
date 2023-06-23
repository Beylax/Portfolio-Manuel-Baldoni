import type { NextPage } from 'next'
import Container from '../components/container'
import Image from 'next/image'
import Project from '../components/project'
import Hero from '../components/hero'

const Home: NextPage = () => {
	return (
		<div>
			<Hero></Hero>
			<section>
				<Container className="flex flex-col gap-y-20">
					<Project
						title='Amadori Website'
						description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
						reverse
					/>
					<Project
						title='Amadori Website'
						description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
					/>
				</Container>
			</section>
		</div>
	)
}

export default Home
