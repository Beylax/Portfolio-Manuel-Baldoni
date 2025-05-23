"use client"

import Image from "next/image";
import Link from "next/link";
import { ISkill } from "../lib/utils";
import tailwindConfig from "../tailwind.config";
import { useEffect, useRef, useState } from "react";

function Content(props: { skill: ISkill; isHover: boolean }) {
	const { skill, isHover } = props

	return (
		<div className="group transition-all transform-gpu">
			<div className="relative w-1/2 aspect-square mx-auto transition-all duration-300 rainbow-border rounded-full transform-gpu group-hover:scale-110">
				{/* <div
					className="level absolute inset-[-3px] rounded-full group-hover:rotate-[720deg] transition-all duration-1000 transform-gpu"
					style={{
						background: `conic-gradient(${isHover ? tailwindConfig.theme.extend.colors["highlight50"] : tailwindConfig.theme.extend.colors["hemerald"]} ${skill?.level || 0}%, transparent 0)`
					}}
				></div>
				<div className="absolute inset-0 flex items-center justify-center z-10 isolate overflow-hidden rounded-full after:bg-black after:opacity-80 after:absolute after:inset-0 after:z-[-1] font-bold opacity-0 group-hover:opacity-100 transition-all duration-500 text-tertiary">
					{skill?.level}%
				</div> */}
				<Image
					src={`${skill?.image_url}`}
					alt={skill?.title}
					fill
					sizes="40vw, min-width(640px) 30vw, min-width(768px) 20vw, min-width(1280px) 10vw"
					className="object-contain bg-primary rounded-full p-4" />
			</div>
			<h5 className="text-center text-main text-sm font-bold mt-4">
				{skill?.title}
			</h5>
		</div>
	)
}

interface ISkillProps {
	skill: ISkill
	style: any
}

export default function Skill(props: ISkillProps) {
	const { skill, style } = props

	const [isHover, setIsHover] = useState<boolean>(false)

	const ref = useRef<any>(undefined)

	useEffect(() => {
		(ref?.current as HTMLElement)?.addEventListener("mouseenter", () => setIsHover(true));

		(ref?.current as HTMLElement)?.addEventListener("mouseleave", () => setIsHover(false));
	}, [])

	return (
		<div ref={ref} className="skill relative w-full aspect-square flex items-start justify-center group" style={style}>
			{
				skill?.link ?
					<Link href={skill?.link} target="_blank" className="block relative w-full z-20">
						<Content skill={skill} isHover={isHover} />
					</Link> :
					<div className="relative w-full z-20">
						<Content skill={skill} isHover={isHover} />
					</div>
			}
		</div>
	)
}