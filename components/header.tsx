import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { navItems } from "../lib/utils";
import { LoadingContext } from "./layout";
import Icon from "./icon";
import Image from "next/image";
import Container from "./container";

export default function Header() {
    const { isLoading } = useContext(LoadingContext)
    const router = useRouter()

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
        const obsverver = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    document.getElementById("contact")?.classList.add("notification")
                }
                else {
                    document.getElementById("contact")?.classList.remove("notification")
                }
            });
        })

        if (info_section) {
            obsverver.observe(info_section)
        }
    }, [])

    return (
        <header id="header" className={`fixed top-0 left-0 right-0 z-[10000] isolate transition-all duration-700 before:absolute before:inset-0 before:backdrop-blur-md before:z-[-1] after:absolute after:inset-0 [&.scrolled]:after:bg-gradient-to-r after:from-highlight after:to-highlight50 after:opacity-0 [&.scrolled]:after:opacity-20 after:z-[-1] after:transition-all after:duration-1000 after:ease-in-out ${isLoading ? "translate-y-[-100%]" : ""}`}>
            <Container className="flex items-center justify-between py-2 lg:py-4">
                <Link href={"/"}>
                    <Image src={"/images/logo.png"} alt="logo" width={40} height={40} />
                </Link>

                <nav>
                    <ul className="flex items-center gap-x-4">
                        {
                            navItems?.map((navItem, i) => {
                                return (
                                    <li id={navItem.id} key={navItem.id} className={`nav-item ${router?.route === navItem.link ? "active" : ""} [&.notification_.nav-link:before]:opacity-100 [&.notification_.nav-link:after]:opacity-100 [&.notification_.nav-link:before]:animate-ping [&.notification]:animate-wiggle`}>
                                        <Link href={navItem.link} className="flex items-center gap-x-2">
                                            <div className={`relative nav-link ${navItem.id === "contact" ? "after:absolute after:w-[6px] after:h-[6px] after:rounded-full after:bg-white after:top-0 after:right-0 after:z-20 after:transition-all after:opacity-0 before:absolute before:w-[6px] before:h-[6px] before:rounded-full before:bg-white before:top-0 before:right-0 before:z-10 before:transition-all before:opacity-0" : ""}`}>
                                                <Icon icon={navItem.icon.icon} fill={navItem.icon.fill} classNameIcon={navItem.icon.classNameIcon} />
                                            </div>
                                            <label className="text-main underline-effect">{navItem.label}</label>
                                        </Link>

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