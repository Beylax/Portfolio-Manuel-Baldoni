import Link from "next/link";
import Container from "./container";
import Icon from "./icon";
import Social from "./social";

export default function Footer() {
    return (
        <footer className="bg-secondary py-4">
            <Container className="flex items-center justify-between">
                <h6 className="block w-fit">
                    © 2023 <Link href="/" className="text-main">Manuel Baldoni</Link>
                </h6>
                <Social />
            </Container>
        </footer>
    )
}