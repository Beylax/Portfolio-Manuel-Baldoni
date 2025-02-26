"use client"

import Image from "next/image"
import Link from "next/link"
import { useContext } from "react"
import { LoadingContext } from "./contexts/loadingContext"
import Self from "./self"
import Blob from "./blob"

export default function Hero() {
	const { isLoading } = useContext(LoadingContext)
	// const isLoading = false

	return (
		<div className={`hero relative flex flex-wrap items-center gap-y-10 lg:gap-y-20 isolate`}>
			<div className={`w-full lg:w-1/2 transition-all duration-700 ease-[cubic-bezier(.47,1.64,.41,.8)]`}>
				<div>
					<p className={`text-main text-center lg:text-start p-0 m-0 transition-all duration-1000 ${isLoading ? "translate-y-[-100%] opacity-0" : ""}`}>Driven by <span className='text-highlight50 uppercase font-black'>passion</span></p>
					<h1 className='text-main font-extrabold text-center lg:text-start my-6 leading-[90%] tracking-tight'>
						<span className={`inline-block transition-all duration-1000 delay-[500ms] ${isLoading ? "translate-y-[-100%] opacity-0" : ""}`}>Manuel</span>
						<br></br>
						<span className={`clip-text inline-block transition-all duration-1000 delay-[800ms] ${isLoading ? "translate-y-[-100%] opacity-0" : ""}`}>
							Baldoni
						</span>
					</h1>
				</div>
				<div className='relative quote my-4 lg:my-10 mx-auto lg:mx-0'>
					<p className={`relative text-tertiary italic text-center lg:text-start mx-auto lg:mx-0 transition-all duration-[1100ms] delay-[1000ms] ${isLoading ? "translate-y-[-100%] opacity-0" : ""}`}>
						{
							`"Every great dream begins with a dreamer. Always remember, you have within you the strength, the patience, and the passion to reach for the stars to change the world"`
						}
					</p>
				</div>

				<div className="flex items-center justify-center lg:justify-start gap-x-10 mt-10">
					<div
						className={`transition-all duration-500 delay-[1400ms] ${isLoading ? "translate-y-[-100%] opacity-0" : ""}`}
					>
						<Link
							href={"#info"}
							className={`rainbow-border text-main shadow-[0_0_10px_-2px_#ffffff] px-2 py-1 lg:px-6 lg:py-3 text-center text-medium lg:text-xl font-bold uppercase rounded-md`}
						>
							{"my info"}
						</Link>
					</div>
					<div
						className={`transition-all duration-500 delay-[1400ms] ${isLoading ? "translate-y-[-100%] opacity-0" : ""}`}
					>
						<Link
							href={"maito:manuel.baldoni.lavoro@gmail.com"}
							className={`rainbow-border text-main shadow-[0_0_10px_-2px_#ffffff] px-2 py-1 lg:px-6 lg:py-3 text-center text-medium lg:text-xl font-bold uppercase rounded-md`}
						>
							{"contact me"}
						</Link>
					</div>
				</div>
			</div>
			<div className={`relative w-1/2 min-w-[300px] mx-auto order-first lg:order-last transition-all duration-500`}>
				<Self />
			</div>
		</div>
	)
}