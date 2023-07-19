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
						link='https://amadori.it'
						description="Amadori is the <i>agribusiness's leader in italy</i> with over 50 years of history. It's' an international company with over 1 bilion turnover. I worked with another Junior Developer at <a href='https://diemmea.com' target='__blank' className='font-bold after:bg-highlight underline-effect'>DMA</a> and <i>together</i> we used <a href='https://www.hubspot.com/' target='__blank' className='font-bold after:bg-highlight underline-effect'>HubSpot</a> as a CMS tool. The site will support the english version soon.<br><br>We mainly used HTML - CSS - JAVASCRIPT and the HubSpot's integrated markup language HUBL. We also use the javascript library <a href='https://swiperjs.com/' target='__blank' className='font-bold after:bg-highlight underline-effect'>SwiperJS</a>"
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
