import Image from "next/image";
import Link from "next/link";
interface IProject {
    title: string;
    description: string;
    link?: string;
    reverse?: boolean;
}

export default function Project({ title, description, link, reverse }: IProject) {
    return (
        <div className={`project flex flex-wrap items-center  gap-y-8 ${reverse ? "flex-row-reverse" : ""}`}>
            <div className="relative w-full lg:w-1/2 z-30">
                <h5 className={`w-fit text-highlight font-semibold pointer-events-none ${reverse ? "lg:ml-auto" : ""}`}>Featured Project</h5>
                <h4 className={`w-fit text-tertiary font-semibold cursor-pointer ${reverse ? "lg:ml-auto" : ""}${link ? " underline-effect after:bg-tertiary" : ""}`}>
                    {
                        link ?
                            <Link href={link} target="__blank" className="text-tertiary">
                                {title}
                            </Link>
                            :
                            title
                    }
                </h4>

                {
                    link ?
                        <Link href={link} target="__blank" className={`block group relative w-full lg:w-[120%] rounded-xl overflow-hidden mt-10 border-highlight cursor-pointer ${reverse ? " border-r-2 border-l-2 lg:border-l-0 lg:translate-x-[-16%]" : "border-l-2 border-r-2 lg:border-r-0"}`}>
                            <div className="absolute inset-0 bg-secondary opacity-50 z-10"></div>
                            <div className={`absolute w-0 h-full group-hover:w-full bg-highlight opacity-50 z-20 transition-all ${reverse ? "right-0" : "left-0"}`}></div>
                            <div className="relative text-tertiary px-8 py-6 z-30 backdrop-blur-md" dangerouslySetInnerHTML={{__html: description}}></div>
                        </Link> :
                        <div className={`block group relative w-full lg:w-[120%] rounded-xl overflow-hidden mt-10 border-highlight cursor-pointer ${reverse ? " border-r-2 border-l-2 lg:border-l-0 lg:translate-x-[-16%]" : "border-l-2 border-r-2 lg:border-r-0"}`}>
                            <div className="absolute inset-0 bg-secondary opacity-50 z-10"></div>
                            <div className={`absolute w-0 h-full group-hover:w-full bg-highlight opacity-50 z-20 transition-all ${reverse ? "right-0" : "left-0"}`}></div>
                            <div className="relative text-tertiary px-8 py-6 z-30 backdrop-blur-md" dangerouslySetInnerHTML={{__html: description}}></div>
                        </div>
                }
            </div>
            <div className={`relative w-full lg:w-1/2 aspect-video rounded-xl overflow-hidden border-highlight z-10 border-none lg:border-t-[2px] shadow-[0px_0px_30px_0px_rgba(113,39,186,0.6)] ${reverse ? "lg:border-l-[2px] lg:shadow-[-10px_-10px_30px_0px_rgba(113,39,186,0.6)]" : "lg:border-r-[2px] lg:shadow-[10px_-10px_30px_0px_rgba(113,39,186,0.6)]"}`}>
                <Image src={"/images/project_amadori.png"} alt="project_amadori" fill className="object-cover" />
                <div className="absolute inset-0 opacity-50 bg-black"></div>
            </div>
        </div>
    )
}