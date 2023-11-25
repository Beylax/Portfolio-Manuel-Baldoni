import type { NextPage } from 'next'
import Container from '../components/container'
import Link from 'next/link'
import Self from '../components/self'

const Page404: NextPage = () => {
	return (
		<div>
			<section className='p-0'>
				<Container className="flex flex-col items-center justify-center h-[calc(100vh-64px)]">
					<Link href={"/"} className={`block relative w-1/3 min-w-[300px] transition-all duration-500`}>
						<Self />
					</Link>
					<h2 className='text-highlight uppercase text-center mb-10 font-bold'>
						Page not Found
					</h2>
					<Link href="/" className='block text-center w-fit underline-effect-small py-2 text-xl font-bold uppercase text-white hover:text-tertiary transition-all duration-500 mx-auto'>
						<h3>
							HOME
						</h3>
					</Link>
				</Container>
			</section>
		</div>
	)
}

export default Page404