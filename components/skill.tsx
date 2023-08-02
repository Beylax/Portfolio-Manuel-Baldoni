import Image from "next/image";
import Link from "next/link";

interface IProps{
    link?: string;
    img_name: string;
    title: string;
}

export default function Skill(props: IProps) {
    
    return (
        <div className="skill relative w-full aspect-square rounded-2xl overflow-hidden flex items-center justify-center group shadow-skill">
            <div className="absolute inset-0 bg-highlight opacity-20 z-10"></div>
            {
                props?.link ? 
                    <Link href={props?.link} target="_blank" className="block relative w-full z-20">
                        <div className="relative w-1/2 aspect-square mx-auto group-hover:scale-105 transition-all duration-300">
                            <Image src={`/images/${props?.img_name}`} alt={props?.title} fill className="object-contain"></Image>
                        </div>
                        <h4 className="text-center text-white font-bold mt-4">
                            {props?.title}
                        </h4>
                    </Link> : 
                    <div className="relative w-full z-20">
                        <div className="relative w-1/2 aspect-square mx-auto group-hover:scale-105 transition-all duration-300">
                            <Image src={`/images/${props?.img_name}`} alt={props?.title} fill className="object-contain"></Image>
                        </div>
                        <h4 className="text-center text-white font-bold mt-4">
                            {props?.title}
                        </h4>
                    </div>
            }
        </div>
    )
}