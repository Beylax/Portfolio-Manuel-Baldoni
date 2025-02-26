"use client"

import { useContext, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { navItems } from "../lib/utils";
import Icon from "./icon";
import Image from "next/image";
import Container from "./container";
import { LoadingContext } from "./contexts/loadingContext";
import path from "path";

export default function Header() {
	// const { isLoading } = useContext(LoadingContext)
	const isLoading = false
	const pathname = usePathname()

	useEffect(() => {
		document.addEventListener("scroll", function () {
			if (window.scrollY <= 0) {
				document.getElementById("header")?.classList.remove("scrolled")
			}
			else {
				document.getElementById("header")?.classList.add("scrolled")
			}
		})

		const info_section = document.querySelector("#info")
		const fiver_links = document.querySelectorAll(".fiver-link") || []
		const obsverver = new IntersectionObserver((entries, observer) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					document.getElementById("contact")?.classList.add("notification")
				}
				else {
					document.getElementById("contact")?.classList.remove("notification")
				}
			});
		},
			{
				threshold: .5
			}
		)

		if (info_section) {
			obsverver.observe(info_section)
		}

		for (let i = 0; i < fiver_links.length; i++) {
			obsverver.observe(fiver_links[i])
		}
	}, [])

	return (
		<header id="header" className={`fixed top-0 left-0 right-0 z-[10000] isolate transition-all duration-700 before:absolute before:inset-0 before:backdrop-blur-md before:z-[-1] after:absolute after:inset-0 [&.scrolled]:after:bg-gradient-to-r after:from-highlight after:to-highlight50 after:opacity-0 [&.scrolled]:after:opacity-20 after:z-[-1] after:transition-all after:duration-1000 after:ease-in-out ${isLoading ? "translate-y-[-100%]" : ""} ${pathname === "/" ? "delay-[2000ms]" : ""}`}>
			<Container className="flex items-center justify-between py-2 lg:py-4">
				<Link href={"/"}>
					<Image src={"/images/logo.png"} alt="logo" width={40} height={40} />
				</Link>

				<nav>
					<ul className="flex items-center gap-x-4">
						{
							navItems?.map((navItem, i) => {
								return (
									<li id={navItem.id} key={navItem.id} className={`nav-item relative ${pathname?.split("/")?.filter(f => !!f)?.includes(`${navItem.link.replaceAll("/", "")}`) ? "active" : ""} [&.notification_.nav-link:before]:opacity-100 [&.notification_.nav-link:after]:opacity-100 [&.notification_.nav-link:before]:animate-ping [&.notification_.nav-link]:animate-wiggle [&.notification_.exerpt]:opacity-100 [&.notification_.exerpt]:pointer-events-auto`}>
										<Link href={navItem.link} className="flex items-center gap-x-2">
											<div className={`relative nav-link ${navItem.id === "contact" ? "after:absolute after:w-[6px] after:h-[6px] after:rounded-full after:bg-white after:top-0 after:right-0 after:z-20 after:transition-all after:opacity-0 before:absolute before:w-[6px] before:h-[6px] before:rounded-full before:bg-white before:top-0 before:right-0 before:z-10 before:transition-all before:opacity-0" : ""}`}>
												<Icon icon={navItem.icon.icon} fill={navItem.icon.fill} classNameIcon={navItem.icon.classNameIcon} />
											</div>
											<label className="cursor-pointer text-main underline-effect">{navItem.label}</label>
										</Link>

										{
											navItem.id === "contact" ?
												<Link href={navItem.link} className="exerpt cursor-pointer absolute text-black text-sm p-[10px] rounded-md bg-white right-0 top-[calc(100%+15px)] w-[200px] transition-all duration-700 opacity-0 pointer-events-none after:absolute after:bottom-[calc(100%-1px)] after:right-[25px] after:border-t-[0px] after:border-x-[10px] after:border-b-[10px] after:border-l-transparent after:border-r-transparent after:border-b-white">
													{"Hey, if you are intrested contact me! I'll answer you in minutes"}
												</Link> : null
										}

										{
											i !== navItems?.length - 1 ?
												<span className="font-light">{"|"}</span> : null
										}
									</li>
								)
							})
						}
					</ul>
				</nav>
			</Container>
		</header>
	)
}