import Image from "next/image";
import Container from "./container";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
    const router = useRouter();

    return (
        <header className="fixed top-6 w-[90%] lg:w-[85%] max-w-[1400px] left-1/2 translate-x-[-50%] bg-gradient-to-r from-highlight to-highlight50 p-3 rounded-full isolate z-[100000] ">
            <nav className="flex items-center justify-between">
                <Link href="/" className="relative w-8 h-8 rounded-full hover:scale-110 transition-all duration-500">
                    <Image src={"/images/logo.png"} alt="logo" fill objectFit="cover" />
                </Link>

                <ul className="flex items-center gap-x-10 p-0">
                    <li className={`nav-item underline-effect ${router?.route === "/" ? "active" : ""}`}>
                        <Link href="/" className="nav-link">
                            Home
                        </Link>
                    </li>
                    <li className={`nav-item underline-effect ${router?.route === "/about" ? "active" : ""}`}>
                        <Link href="/about" className="nav-link">
                            About
                        </Link>
                    </li>
                    <li className={`nav-item underline-effect ${router?.route === "/contact" ? "active" : ""}`}>
                        <Link href="/contact" className="nav-link">
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}