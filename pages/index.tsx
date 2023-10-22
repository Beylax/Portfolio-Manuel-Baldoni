import type { NextPage } from 'next'
import Container from '../components/container'
import dynamic from 'next/dynamic'
import Hero from '../components/hero'
import Skill from '../components/skill'
import { ISkill, skills } from '../lib/utils'
import Blob from '../components/blob'
import tailwindConfig from '../tailwind.config'
import PopIn from '../components/pop-in'
import Link from 'next/link'

const Project = dynamic(() => import('../components/project'), { ssr: false })

const Home: NextPage = () => {
	return (
		<div>
			<section className='relative isolate min-h-screen flex items-center'>
				<Blob
					width={'200px'}
					height={'200px'}
					top={'10%'}
					bottom={''}
					left={''}
					right={'-100px'}
					background={tailwindConfig.theme.extend.colors["hemerald"]}
					blur={'blur(100px)'}
					origin='left'
					opacity={0.4}
					animation="spin"
				/>
				<Blob
					width={'200px'}
					height={'200px'}
					top={'0'}
					bottom={''}
					left={'-100px'}
					right={''}
					background={tailwindConfig.theme.extend.colors["tertiary"]}
					blur={'blur(100px)'}
					origin='right'
					opacity={0.4}
					animation="bounce"
				/>
				<Blob
					width={'500px'}
					height={'500px'}
					top={''}
					bottom={'-200px'}
					left={'60%'}
					right={''}
					background={tailwindConfig.theme.extend.colors["highlight"]}
					blur={'blur(200px)'}
					origin='bottom-right'
					opacity={0.3}
					animation="pulse"
				/>
				<Container>
					<Hero></Hero>
				</Container>
			</section>
			<section>
				<Container>
					<h3 className='text-tertiary text-center lg:text-start mb-5'>
						I&apos;m a Software Engineer. <span className='animate-blink'>|</span>
					</h3>
					<p className='text-white text-center lg:text-start'>Currently, I&apos;m a Front-end Developer at <a href='https://diemmea.com' target='__blank' className='font-bold after:bg-highlight underline-effect'>DMA - CX Company for B2B</a></p>
					<p className='text-center lg:text-start text-white quote mx-auto lg:mx-0 mt-5'>
						{"I am a passionate Front End Developer with my first significant professional experience in DMA, creating engaging and interactive user experiences. "}
						<br></br>
						{"I have a solid understanding of front-end technologies like HTML, CSS, and JavaScript, and I am working with various frameworks such as React, Vue, and Angular."}
						<br></br>
						{"My strengths include adaptability, quick learning, and a good command of the English language."}
					</p>
				</Container>
			</section>
			<section id='skills'>
				<Container>
					<h3 className='text-center font-bold'>MY SKILLS AND <span className='text-highlight'>KNOWLEDGE</span></h3>
				</Container>
				{/* <SwiperSkill></SwiperSkill> */}
				<Container>
					<PopIn className='container grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-6' delay={0}>
						{
							skills?.map((skill: ISkill, i) => {
								return (
									<Skill
										key={skill?.title}
										skill={skill}
										style={{
											transitionDelay: `${i*200}ms`
										}}
									></Skill>
								)
							})
						}
					</PopIn>
				</Container>
			</section>
			<section id='projects'>
				<Container>
					<h3 className='text-center font-bold'>MY <span className='text-highlight'>PROJECTS</span></h3>
				</Container>
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

					<Link href={"/projects"} className='ml-auto underline-effect after:bg-highlight'>
						<h5>view all my projects</h5>
					</Link>
				</Container>
			</section>
		</div>
	)
}

export default Home
