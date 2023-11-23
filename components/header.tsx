import Image from "next/image";
import Container from "./container";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect, useRef, useState } from "react";
import { LoadingContext } from "./layout";
import Icon from "./icon";
import { navItems } from "../lib/utils";

const DELAY_VISIBILITY = 3

export default function Header() {
    const router = useRouter();

    const [isVisible, setIsVisible] = useState(true)

    useEffect(() => {
        setIsVisible(true)

        const timeId = setTimeout(() => {
            // After 3 seconds set the show value to false
            setIsVisible(false)
        }, DELAY_VISIBILITY * 1000)

        return () => {
            clearTimeout(timeId)
        }
    }, [router.route]);

    useEffect(() => {
        const timeId = setTimeout(() => {
            // After 3 seconds set the show value to false
            setIsVisible(false)
        }, DELAY_VISIBILITY * 1000)

        return () => {
            clearTimeout(timeId)
        }
    }, [isVisible]);

    return (
        <header className="group fixed top-0 left-0 right-0 h-[80px] lg:h-auto lg:bottom-0 lg:right-[unset] lg:w-[81px] z-[10000]">
            <nav className={`fixed top-0 left-1/2 translate-x-[-50%] z-[10000] flex items-center justify-center py-2 px-14 lg:top-1/2 lg:left-0 lg:translate-x-0 lg:translate-y-[-50%] lg:px-2 lg:py-14 bg-gradient-to-r from-highlight to-highlight50 overflow-hidden rounded-bl-[50px] rounded-br-[50px] lg:rounded-tr-[50px] lg:rounded-bl-none transition-all duration-700 ease-in-out shadow-[0_10px_20px_-16px_white] hover:translate-y-0 lg:hover:translate-y-[-50%] lg:hover:translate-x-0 group-hover:translate-y-0 lg:group-hover:translate-y-[-50%] lg:group-hover:translate-x-0 ${isVisible ? "" : "translate-y-[-90%] lg:translate-x-[-90%]"}`}>
                <ul className="flex lg:flex-col items-center gap-4">
                    {
                        navItems?.map(navItem => {
                            return (
                                <li key={navItem.link} className={`nav-item ${router?.route === navItem.link ? "active" : ""}`}>
                                    <Link href={navItem.link} className="nav-link">
                                        <Icon icon={navItem.icon.icon} fill={navItem.icon.fill} classNameIcon={navItem.icon.classNameIcon} />
                                    </Link>
                                    <label>{navItem.label}</label>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
        </header>
    )
}