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
            console.log(window)
            if (window.scrollY <= 0) {
                document.getElementById("header")?.classList.remove("scrolled")
            }
            else {
                document.getElementById("header")?.classList.add("scrolled")
            }
        })
    }, [])

    return (
        <header id="header" className="fixed top-0 left-0 right-0 z-[10000] isolate before:absolute before:inset-0 before:backdrop-blur-md before:z-[-1] after:absolute after:inset-0 [&.scrolled]:after:bg-gradient-to-r after:from-highlight after:to-highlight50 after:opacity-0 [&.scrolled]:after:opacity-20 after:z-[-1] after:transition-all after:duration-1000 after:ease-in-out">
            <Container className="flex items-center justify-between py-2 lg:py-4">
                <Image src={"/images/logo.png"} alt="logo" width={40} height={40} />

                <nav>
                    <ul className="flex items-center gap-x-2 sm:gap-x-4">
                        {
                            navItems?.map((navItem, i) => {
                                return (
                                    <li key={navItem.link} className={`group nav-item ${router?.route === navItem.link ? "active" : ""}`}>
                                        <Link href={navItem.link} className="flex items-center gap-x-1 sm:gap-x-2">
                                            <div className="nav-link">
                                                <Icon icon={navItem.icon.icon} fill={navItem.icon.fill} classNameIcon={navItem.icon.classNameIcon} />
                                            </div>
                                            <label className="underline-effect after:bg-main text-main">{navItem.label}</label>
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