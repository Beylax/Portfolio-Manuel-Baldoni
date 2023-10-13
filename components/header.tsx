import Image from "next/image";
import Container from "./container";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

export default function Header() {
    const router = useRouter();
    const [isSidebarOpen, setIsSidebarOpen]: [boolean, any] = useState(false);

    const ref = useRef<any>();

    useEffect(() => {
        const handleClickOutside = (event: any) => {
            const classNameTarget = (event.target as HTMLElement)?.classList;
            if (!classNameTarget?.contains("sidebar") && !ref.current?.contains(event.target)) {
                setIsSidebarOpen(false)
            }
        };
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, []);

    return (
        <>
            <header className="fixed top-6 w-[90%] lg:w-[85%] max-w-[1400px] left-1/2 translate-x-[-50%] bg-gradient-to-r from-highlight to-highlight50 p-3 rounded-full isolate z-[100000] ">
                <nav className="flex items-center justify-between">
                    <Link href="/" className="relative w-8 h-8 rounded-full hover:scale-110 transition-all duration-500">
                        <Image src={"/images/logo.png"} alt="logo" fill className="object-cover" />
                    </Link>

                    <button className="block lg:hidden" onClick={() => setIsSidebarOpen((current: boolean) => !current)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path fill="white" d="M4 6h16v2H4zm4 5h12v2H8zm5 5h7v2h-7z"></path>
                        </svg>
                    </button>

                    <ul className="hidden lg:flex items-center gap-x-6 p-0">
                        <li className={`nav-item underline-effect ${router?.route === "/" ? "active" : ""}`}>
                            <Link href="/" className="nav-link">
                                Home
                            </Link>
                        </li>
                        <li className={`nav-item underline-effect ${router?.route === "/about" ? "active" : ""}`}>
                            <Link href="#TODO:" className="nav-link">
                                Projects
                            </Link>
                        </li>
                        <li className={`nav-item underline-effect ${router?.route === "/contact" ? "active" : ""}`}>
                            <Link href="#TODO:" className="nav-link">
                                Career
                            </Link>
                        </li>
                        <li className={`nav-item underline-effect ${router?.route === "/contact" ? "active" : ""}`}>
                            <Link href="#TODO:" className="nav-link">
                                Get in touch
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <aside ref={ref} className={`sidenav fixed top-0 bottom-0 left-0 w-2/3 bg-gradient-to-br from-highlight to-highlight50 p-5 rounded-tr-[30%] rounded-br-[30%] z-[1000000] translate-x-[-110%] transition-all duration-500 aria-expanded:translate-x-0 aria-expanded:rounded-tr-2xl aria-expanded:rounded-br-2xl`} aria-expanded={isSidebarOpen}>
                <div className="flex items-center justify-end">
                    <button className="" onClick={() => setIsSidebarOpen(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path fill="white" d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path>
                        </svg>
                    </button>
                </div>
                <ul className="flex flex-col gap-6 p-6">
                    <li className={`nav-item underline-effect w-fit ${router?.route === "/" ? "active" : ""}`}>
                        <Link href="/" className="nav-link">
                            Home
                        </Link>
                    </li>
                    <li className={`nav-item underline-effect w-fit ${router?.route === "/about" ? "active" : ""}`}>
                        <Link href="#TODO:" className="nav-link">
                            Projects
                        </Link>
                    </li>
                    <li className={`nav-item underline-effect w-fit ${router?.route === "/contact" ? "active" : ""}`}>
                        <Link href="#TODO:" className="nav-link">
                            Career
                        </Link>
                    </li>
                    <li className={`nav-item underline-effect w-fit ${router?.route === "/contact" ? "active" : ""}`}>
                        <Link href="#TODO:" className="nav-link">
                            Get in touch
                        </Link>
                    </li>
                </ul>
            </aside>
        </>
    )
}