import type { NextPage } from 'next'
import Container from '../components/container'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import Hero from '../components/hero'
import Skill from '../components/skill'
import SwiperSkill from '../components/swiper_skill'

const Project = dynamic(() => import('../components/project'), { ssr: false })

const Home: NextPage = () => {
	return (
		<div>
			<section>
				<Hero></Hero>
			</section>
			<section className='pt-20 lg:pt-40'>
				<h3 className='text-center font-bold mb-20'>MY SKILLS AND KNOWLEDGE</h3>
				<SwiperSkill></SwiperSkill>
			</section>
			<section className='py-20 lg:py-40'>
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
					<Project
						title='Gestore segnalazioni - Dashboard'
						image_src='/images/project_mercato.png'
						description="During the <i>stage</i> of my fourth year in secondary school in collaboration with 3 other students we built a <b>management dashboard</b> for the Mercato Saraceno's municipality. The software is capable of handling the reports of the municipality avoiding saving them in papers and archieves.<br><br>
						For this project we used <a href='https://www.google.com/script/start/' target='__blank' className='font-bold after:bg-highlight underline-effect'>GAS (Google App Script)</a> for the back-end and HTML, CSS (bootstrap), JS for the front-end."
						reverse
					/>
				</Container>
			</section>
		</div>
	)
}

export default Home
