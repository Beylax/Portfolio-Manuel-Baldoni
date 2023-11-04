import Container from "./container";
import Image from "next/image";
import Icon from "./icon";
import tailwindConfig from '../tailwind.config.js';
import Link from "next/link";
import { useContext } from "react";
import { LoadingContext } from "./layout";

export default function Hero() {
    const { isLoading } = useContext(LoadingContext)

    return (
        <div className={`flex flex-wrap items-center gap-y-20`}>
            <div className={`w-full lg:w-1/2 transition-all duration-700 ease-[cubic-bezier(.47,1.64,.41,.8)] ${isLoading ? "scale-50" : ""}`}>
                <div>
                    <p className='text-white text-center lg:text-start p-0 m-0'>A developer driven by <span className='text-highlight50 uppercase font-bold'>passion</span></p>
                    <h1 className='text-white font-bold text-center lg:text-start my-10'>Manuel <span className='text-highlight'>Baldoni</span></h1>
                </div>
                <div className='relative quote my-10 mx-auto lg:mx-0'>
                    <p className='relative text-tertiary italic text-center lg:text-start mx-auto lg:mx-0'>&quot;Every great dream begins with a dreamer. Always remember, you have within you the strength, the patience, and the passion to reach for the stars to change the world.&quot;</p>
                </div>

                <div className="flex items-center justify-center lg:justify-start gap-x-20 mt-10">
                    <Link href={"#skills"} className="underline-effect-small py-2 text-xl font-bold uppercase text-white hover:text-hemerald transition-all duration-500"><span>my skills</span></Link>
                    <Link href={"maito:info@manuelbaldoni.com"} target="_blank" className="underline-effect-small py-2 text-xl font-bold uppercase text-white hover:text-hemerald transition-all duration-500"><span>contact me</span></Link>
                </div>
            </div>
            <div className={`relative w-1/2 min-w-[300px] mx-auto order-first lg:order-last transition-all duration-500 ${isLoading ? "blur-3xl" : ""}`}>
                <div className="orbit">
                    <div className="absolute inset-0 rounded-full border-4 border-white animate-spin opacity-50 blur-sm">
                    </div>
                    <div className="hero-img">
                        <Link href="#contact" className='block relative w-full aspect-square transition-all duration-500  overflow-hidden rounded-[84%_32%_33%_49%_/_94%_74%_49%_25%] blur-md z-10'>
                            <Image src={"/images/hero/baldoni.png"} alt='manuel-baldoni' fill className='pointer-events-none object-cover' />
                            <div className="absolute inset-0 bg-highlight opacity-20 blur-[100px]">
                            </div>
                        </Link>
                        <div className='absolute top-[-10px] left-[-10px] lg:top-[-20px] lg:left-[-20px] w-full aspect-square transition-all duration-500 overflow-hidden rounded-[84%_32%_33%_49%_/_94%_74%_49%_25%] blur-sm z-20'>
                            <Image src={"/images/hero/baldoni.png"} alt='manuel-baldoni' fill className='pointer-events-none object-cover' />
                        </div>
                        <div className='absolute top-[-20px] left-[-20px] lg:top-[-40px] lg:left-[-40px] w-full aspect-square transition-all duration-500 overflow-hidden rounded-[84%_32%_33%_49%_/_94%_74%_49%_25%] z-30'>
                            <Image src={"/images/hero/baldoni.png"} alt='manuel-baldoni' fill className='pointer-events-none object-cover' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}