import type { NextPage } from 'next'
import Container from '../components/container'
import Link from 'next/link'

const Page404: NextPage = () => {
	return (
		<div className='min-h-screen'>
			<section>
				<Container className="flex items-center justify-center h-screen">
					<div>
						<h2 className='text-highlight uppercase text-center mb-10 font-bold'>
							Page not Found
						</h2>
						<Link href="/" className='block text-center w-fit underline-effect-small py-2 text-xl font-bold uppercase text-white hover:text-tertiary transition-all duration-500 mx-auto'>
							<h3>
								HOME
							</h3>
						</Link>
					</div>
				</Container>
			</section>
		</div>
	)
}

export default Page404