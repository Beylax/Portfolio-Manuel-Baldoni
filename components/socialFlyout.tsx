import Icon from "./icon";
import Link from "next/link";
import PopIn from "./pop-in";

export default function SocialFlyout() {
	return (
		<>
			<div className="fixed right-4 top-1/2 translate-y-[-50%] hidden lg:flex flex-col gap-4 z-[10000]">
				<PopIn delay={2700}>
					<Link href="https://www.linkedin.com/in/manuel-baldoni" target="__blank" className="rainbow-border-small aspect-square p-2 flex items-center justify-center rounded-full">
						<Icon icon="linkedin" classNameIcon="fill-main transition-all duration-300" />
					</Link>
				</PopIn>
				<PopIn delay={3050}>
					<Link href="https://github.com/Beylax" target="__blank" className="rainbow-border-small aspect-square p-2 flex items-center justify-center rounded-full">
						<Icon icon="github" classNameIcon="fill-main transition-all duration-300" />
					</Link>
				</PopIn>
				<PopIn delay={3200}>
					<Link href="https://www.instagram.com/_baldo._/" target="__blank" className="rainbow-border-small aspect-square p-2 flex items-center justify-center rounded-full">
						<Icon icon="instagram" classNameIcon="fill-main transition-all duration-300" />
					</Link>
				</PopIn>
				<PopIn delay={3450}>
					<Link href="/cv.pdf" target="__blank" className="rainbow-border-small aspect-square p-2 flex items-center justify-center rounded-full font-black text-white">
						{"CV"}
					</Link>
				</PopIn>
			</div>
		</>
	)
}