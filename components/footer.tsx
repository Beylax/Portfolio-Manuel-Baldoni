import Link from "next/link";
import tailwindConfig from "../tailwind.config";
import Container from "./container";
import Icon from "./icon";

export default function Footer() {
    return (
        <footer className="bg-secondary py-4">
            <Container className="flex items-center justify-between">
                <div className="w-fit">
                    © 2023 <Link href="/" className="text-white">Manuel Baldoni</Link>
                </div>
                <div className="w-fit flex items-center justify-end gap-x-10">
                    <Link href="https://www.linkedin.com/in/manuel-baldoni" target="__blank">
                        <Icon icon="linkedin" classNameIcon="fill-white hover:fill-linkedin transition-all duration-300" />
                    </Link>
                    <Link href="https://github.com/Beylax" target="__blank">
                        <Icon icon="github" classNameIcon="fill-white hover:fill-github transition-all duration-300" />
                    </Link>
                    <Link href="https://www.instagram.com/_baldo._/" target="__blank">
                        <Icon icon="instagram" classNameIcon="fill-white hover:fill-instagram transition-all duration-300" />
                    </Link>
                </div>
            </Container>
        </footer>
    )
}