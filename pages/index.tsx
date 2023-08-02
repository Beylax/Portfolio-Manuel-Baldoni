import type { NextPage } from 'next'
import Container from '../components/container'
import Image from 'next/image'
import Project from '../components/project'
import Hero from '../components/hero'
import Skill from '../components/skill'

const Home: NextPage = () => {
	return (
		<div>
			<section>
				<Hero></Hero>
			</section>
			<section className='lg:pt-40'>
				<h3 className='text-center font-bold mb-20'>MY SKILLS AND KNOWLEDGE</h3>
				<Container>
					<ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
						<li>
							<Skill img_name='html_logo.png' link='https://it.legacy.reactjs.org/' title='HTML'></Skill>
						</li>
						<li>
							<Skill img_name='css_logo.png' link='https://it.legacy.reactjs.org/' title='CSS'></Skill>
						</li>
						<li>
							<Skill img_name='tailwind_logo.png' link='https://it.legacy.reactjs.org/' title='Tailwind'></Skill>
						</li>
						<li>
							<Skill img_name='javascript_logo.png' link='https://it.legacy.reactjs.org/' title='Javascript'></Skill>
						</li>
						<li>
							<Skill img_name='typescript_logo.png' link='https://it.legacy.reactjs.org/' title='Typescript'></Skill>
						</li>
						<li>
							<Skill img_name='react_logo.png' link='https://it.legacy.reactjs.org/' title='React'></Skill>
						</li>
						<li>
							<Skill img_name='nodejs_logo.png' link='https://it.legacy.reactjs.org/' title='NodeJS'></Skill>
						</li>
						<li>
							<Skill img_name='c_logo.png' link='https://it.legacy.reactjs.org/' title='C'></Skill>
						</li>
						<li>
							<Skill img_name='csharp_logo.png' link='https://it.legacy.reactjs.org/' title='C#'></Skill>
						</li>
						<li>
							<Skill img_name='github_logo.png' link='https://it.legacy.reactjs.org/' title='Git'></Skill>
						</li>
						<li>
							<Skill img_name='docker_logo.png' link='https://it.legacy.reactjs.org/' title='Docker'></Skill>
						</li>
					</ul>
				</Container>
			</section>
			<section className='lg:py-40'>
				<h3 className='text-center font-bold mb-20'>MY PROJECTS</h3>
				<Container className="flex flex-col gap-y-20">
					<Project
						title='Amadori Website'
						image_src='/images/project_amadori.png'
						link='https://amadori.it'
						description="Amadori is the <i>agribusiness's leader in italy</i> with over 50 years of history. It's' an international company with over 1 bilion turnover. I worked with another Junior Developer at <a href='https://diemmea.com' target='__blank' className='font-bold after:bg-highlight underline-effect'>DMA</a> and <i>together</i> we used <a href='https://www.hubspot.com/' target='__blank' className='font-bold after:bg-highlight underline-effect'>HubSpot</a> as a CMS tool. The site will support the english version soon.<br><br>We mainly used HTML - CSS - JAVASCRIPT and the HubSpot's integrated markup language HUBL. We also used the javascript library <a href='https://swiperjs.com/' target='__blank' className='font-bold after:bg-highlight underline-effect'>SwiperJS</a>"
						reverse
					/>
					<Project
						title='Area41 Website - Ecommerce'
						image_src='/images/project_a41.png'
						link='https://a41.it'
						description="Area41 is the <i>coolest</i> skateboard e streetware shop in Cesena - Italy. They had an old looking website and they wanted some fresh air, so I restyled the website to a <b>brand new interface</b> keeping the key values that rapresent the essence of the shop.<br><br>For this website I used the built in <a href='https://www.register.it/' target='__blank' className='font-bold after:bg-highlight underline-effect'>Register</a>'s website builder, with particolar attenction to the SEO aspect (the website is an ecommerce too)."
					/>
				</Container>
			</section>
		</div>
	)
}

export default Home
