"use client"

import Image from "next/image"
import { useContext } from "react"
import { LoadingContext } from "./contexts/loadingContext"

export default function Self() {
    const { isLoading } = useContext(LoadingContext)

    return (
        <div className="orbit">
            {/* <div className="absolute inset-0 rounded-full border-4 border-main animate-spin opacity-50 blur-sm">
            </div> */}
            <div className={`hero-img ${isLoading ? "opacity-0" : ""} transition-all duration-500`}>
                <div className='block relative w-full aspect-square transition-all duration-500 overflow-hidden rounded-[84%_32%_33%_49%_/_94%_74%_49%_25%] blur-md z-10'>
                    <Image
                        src={"/images/hero/baldoni.png"}
                        alt='manuel-baldoni'
                        fill
                        sizes="50vw"
                        priority
                        className={`block pointer-events-none object-cover  transition-all duration-500 delay-[000ms] origin-top-right ${isLoading ? "rotate-[-15deg] brightness-0" : ""}`}
                    />
                    <div className={`absolute inset-0 bg-highlight opacity-20 blur-[100px] transition-all duration-500`}>
                    </div>
                </div>
                <div className='absolute top-[-10px] left-[-10px] lg:top-[-20px] lg:left-[-20px] w-full aspect-square transition-all duration-500 overflow-hidden rounded-[84%_32%_33%_49%_/_94%_74%_49%_25%] blur-sm z-20'>
                    <Image
                        src={"/images/hero/baldoni.png"}
                        alt='manuel-baldoni'
                        fill
                        sizes="50vw"
                        priority
                        className={`block pointer-events-none object-cover transition-all duration-500 delay-[200ms] origin-top-right ${isLoading ? "rotate-[-15deg] brightness-0" : ""}`}
                    />
                </div>
                <div className='absolute top-[-20px] left-[-20px] lg:top-[-35px] lg:left-[-35px] w-full aspect-square transition-all duration-500 overflow-hidden rounded-[84%_32%_33%_49%_/_94%_74%_49%_25%] blur-sm z-30'>
                    <Image
                        src={"/images/hero/baldoni.png"}
                        alt='manuel-baldoni'
                        fill
                        sizes="50vw"
                        priority
                        className={`block pointer-events-none object-cover transition-all duration-500 delay-[400ms] origin-top-right ${isLoading ? "rotate-[-15deg] brightness-0" : ""}`}
                    />
                </div>
                <div className='absolute top-[-20px] left-[-20px] lg:top-[-40px] lg:left-[-40px] w-full aspect-square transition-all duration-500 overflow-hidden rounded-[84%_32%_33%_49%_/_94%_74%_49%_25%] z-40'>
                    <Image
                        src={"/images/hero/baldoni.png"}
                        alt='manuel-baldoni'
                        fill
                        sizes="50vw"
                        priority
                        className={`block pointer-events-none object-cover transition-all duration-500 delay-[600ms] origin-top-right ${isLoading ? "rotate-[-15deg] brightness-0" : ""}`}
                    />
                </div>
            </div>
        </div>
    )
}