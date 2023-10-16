import Link from "next/link";
import tailwindConfig from "../tailwind.config";
import Container from "./container";
import Icon from "./icon";
import Social from "./social";

export default function Footer() {
    return (
        <footer className="bg-secondary py-4">
            <Container className="flex items-center justify-between">
                <div className="w-fit">
                    © 2023 <Link href="/" className="text-white">Manuel Baldoni</Link>
                </div>
                <Social />
            </Container>
        </footer>
    )
}