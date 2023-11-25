import Image from "next/image"
import Link from "next/link"
import { useContext } from "react"
import { LoadingContext } from "./layout"
import Self from "./self"

export default function Hero() {
    const { isLoading } = useContext(LoadingContext)

    return (
        <div className={`hero flex flex-wrap items-center gap-y-20`}>
            <div className={`w-full lg:w-1/2 transition-all duration-700 ease-[cubic-bezier(.47,1.64,.41,.8)]`}>
                <div>
                    <p className='text-white text-center lg:text-start p-0 m-0'>A developer driven by <span className='text-highlight50 uppercase font-bold'>passion</span></p>
                    <h1 className='text-white font-bold text-center lg:text-start my-10'>
                        <span className={`inline-block transition-all duration-1000 delay-[500ms] ${isLoading ? "translate-x-[-100%] opacity-0" : ""}`}>Manuel</span>
                        <br></br>
                        <span className={`inline-block text-highlight transition-all duration-1000 delay-[800ms] ${isLoading ? "translate-x-[-100%] opacity-0" : ""}`}>Baldoni</span>
                    </h1>
                </div>
                <div className='relative quote my-10 mx-auto lg:mx-0'>
                    <p className='relative text-tertiary italic text-center lg:text-start mx-auto lg:mx-0'>&quot;Every great dream begins with a dreamer. Always remember, you have within you the strength, the patience, and the passion to reach for the stars to change the world.&quot;</p>
                </div>

                <div className="flex items-center justify-center lg:justify-start gap-x-20 mt-10">
                    <Link
                        href={"#skills"}
                        className={`underline-effect-small py-2 text-xl font-bold uppercase text-white hover:text-hemerald transition-all duration-500 delay-[1500ms] ${isLoading ? "scale-0" : ""}`}>
                        <span>my skills</span>
                    </Link>
                    <Link
                        href={"maito:info@manuelbaldoni.com"}
                        target="_blank"
                        className={`underline-effect-small py-2 text-xl font-bold uppercase text-white hover:text-hemerald transition-all duration-500 delay-[1800ms] ${isLoading ? "scale-0" : ""}`}>
                        <span>contact me</span>
                    </Link>
                </div>
            </div>
            <div className={`relative w-1/2 min-w-[300px] mx-auto order-first lg:order-last transition-all duration-500`}>
                <Self />
            </div>
        </div>
    )
}