"use client"

import Link from "next/link";
import Container from "../components/container";
import Self from "../components/self";

export default function PageNotFound() {
	return (
		<section className='p-0'>
			<Container className="flex flex-col items-center justify-center min-h-[calc(100vh_-_64px_-_104px)] lg:min-h-[calc(100vh_-_64px_-_136px)]">
				<Link href={"/"} className={`block relative w-1/3 min-w-[300px] transition-all duration-500`}>
					<Self />
				</Link>
				<h1 className='h3 text-highlight uppercase text-center !mb-2 font-bold'>
					GENERAL ERROR
				</h1>
				<Link href="/" className='block text-center w-fit underline-effect-small py-2 text-xl font-bold uppercase text-main hover:text-tertiary transition-all duration-500 mx-auto'>
					HOME
				</Link>
			</Container>
		</section>
	)
}