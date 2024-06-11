import Link from "next/link";
import Icon from "./icon";

export default function Social() {
    return (
        <div className="w-fit flex items-center justify-end gap-x-5 md:gap-x-10">
            <Link href="https://www.linkedin.com/in/manuel-baldoni" target="__blank">
                <Icon icon="linkedin" classNameIcon="fill-main hover:fill-linkedin transition-all duration-200" />
            </Link>
            <Link href="https://github.com/Beylax" target="__blank">
                <Icon icon="github" classNameIcon="fill-main hover:fill-github transition-all duration-200" />
            </Link>
            <Link href="https://www.instagram.com/_baldo._/" target="__blank">
                <Icon icon="instagram" classNameIcon="fill-main hover:fill-instagram transition-all duration-200" />
            </Link>
        </div>
    )
}