import Container from "./container";
import Image from "next/image";
import Icon from "./icon";
import tailwindConfig from '../tailwind.config.js';

export default function Hero() {
    return (
        <div className="relative overflow-y-visible">
            <section className='py-20'>
                <Container>
                    <div className='flex flex-wrap items-center gap-10'>
                        <div className='relative w-[258px] mx-auto aspect-square pointer-events-none'>
                            <Image src={"/images/Me.png"} alt='manuel-baldoni' fill className='pointer-events-none object-cover drop-shadow-img_hero' />
                        </div>
                        <div className='grow'>
                            <div>
                                <p className='text-white p-0 m-0'>A developer for <span className='text-highlight uppercase font-bold'>passion</span></p>
                                <h1 className='text-white font-bold my-10'>Manuel <span className='text-highlight'>Baldoni</span></h1>
                            </div>
                            <div className='relative quote'>
                                <p className='relative text-tertiary italic'>&quot;Every great dream begins with a dreamer. Always remember, you have within you the strength, the patience, and the passion to reach for the stars to change the world.&quot;</p>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
            <section>
                <Container>
                    <h3 className='text-tertiary mb-5'>
                        I&apos;m a Software Engineer. <span className='animate-blink'>|</span>
                    </h3>
                    <p className='text-white'>Currently, I&apos;m a Software Engineer at <a href='https://diemmea.com' target='__blank' className='font-bold after:bg-highlight underline-effect'>DMA - CX Company for B2B</a></p>
                </Container>
            </section>
            <section className='my-20'>
                <Container>
                    <p className='text-white quote'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                </Container>
            </section>

            <div className="group hidden lg:block absolute bottom-[50px] right-0 w-[200px] h-[200px] bg-tertiary hover:bg-secondary border-[#888fa6] hover:border-primary border-r-4 border-b-2 rounded-full shadow-[0px_0px_30px_30px_rgba(204,214,246,0.9),0px_0px_50px_50px_rgba(204,214,246,0.6),0px_0px_80px_80px_rgba(204,214,246,0.3),0px_0px_100px_100px_rgba(204,214,246,0.1)] hover:shadow-[0px_0px_30px_30px_rgba(113,39,186,0.9),0px_0px_50px_50px_rgba(113,39,186,0.6),0px_0px_80px_80px_rgba(113,39,186,0.3),0px_0px_100px_100px_rgba(113,39,186,0.1)] transition-all">
                <div className="absolute w-[20px] h-[20px] bg-[#888fa6] top-[50px] left-[50px] rounded-full"></div>
                <div className="absolute w-[10px] h-[10px] bg-[#888fa6] top-[60px] left-[80px] rounded-full"></div>
                <div className="absolute w-[10px] h-[10px] bg-[#888fa6] top-[80px] left-[50px] rounded-full"></div>

                <div className="absolute group top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-[200%] h-[200%] bg-transparent rounded-full border-2 border-[#888fa6] origin-[0_0] animate-spin-reverse hover:animate-pause">
                    <div className='absolute w-fit aspect-square pointer-events-none top-0 left-0 origin-center animate-spin group-hover:animate-pause translate-tl-full'>
                        <Icon icon="react" fill={tailwindConfig?.theme?.extend?.colors["react"]} />
                    </div>
                    <div className='absolute w-fit aspect-square pointer-events-none bottom-0 left-0 origin-center animate-spin group-hover:animate-pause translate-bl-full'>
                        <Icon icon="html" fill={tailwindConfig?.theme?.extend?.colors["html"]} />
                    </div>
                    <div className='absolute w-fit aspect-square pointer-events-none top-0 right-0 origin-center animate-spin group-hover:animate-pause translate-tr-full'>
                        <Icon icon="css" fill={tailwindConfig?.theme?.extend?.colors["css"]} />
                    </div>
                    <div className='absolute w-fit aspect-square pointer-events-none bottom-0 right-0 origin-center animate-spin group-hover:animate-pause translate-br-full'>
                        <Icon icon="javascript" fill={tailwindConfig?.theme?.extend?.colors["javascript"]} />
                    </div>
                </div>
            </div>
        </div>
    )
}