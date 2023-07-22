import Link from "next/link";
import tailwindConfig from "../tailwind.config";
import Container from "./container";
import Icon from "./icon";

export default function Footer() {
    return (
        <footer className="bg-secondary py-6">
            <Container className="flex items-center justify-between">
                <div className="w-fit">
                    © 2023 Manuel Baldoni
                </div>
                <div className="w-fit flex items-center justify-end gap-x-10">
                    <Link href="https://www.linkedin.com/in/manuel-baldoni" target="__blank">
                        <Icon icon="linkedin" fill="white" />
                    </Link>
                    <Link href="https://github.com/Beylax" target="__blank">
                        <Icon icon="github" fill="white" />
                    </Link>
                    <Link href="https://www.instagram.com/_baldo._/" target="__blank">
                        <Icon icon="instagram" fill="white" />
                    </Link>
                </div>
            </Container>
        </footer>
    )
}