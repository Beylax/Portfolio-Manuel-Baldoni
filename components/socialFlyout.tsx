import tailwindConfig from "../tailwind.config";
import Icon from "./icon";
import Link from "next/link";
import PopIn from "./pop-in";

export default function SocialFlyout() {
	return (
		<>
			<div className="fixed right-4 top-1/2 translate-y-[-50%] hidden lg:flex flex-col gap-4 z-[10000]">
				{/* <button className="aspect-square p-2 flex items-center justify-center z-[10000] bg-gradient-to-r from-highlight to-highlight50 rounded-full z-[100000]" onClick={() => {
                    setIsVisible(true)
                    document.querySelector("html")?.classList?.add("overflow-hidden")
                }}>
                    <span className="text-sm font-bold ">CV</span>
                </button> */}
				<PopIn delay={2000}>
					<Link href="https://www.linkedin.com/in/manuel-baldoni" target="__blank" className="aspect-square p-2 flex items-center justify-center bg-gradient-to-r from-highlight to-highlight50 rounded-full">
						<Icon icon="linkedin" classNameIcon="fill-main transition-all duration-300" />
					</Link>
				</PopIn>
				<PopIn delay={2000}>
					<Link href="https://github.com/Beylax" target="__blank" className="aspect-square p-2 flex items-center justify-center bg-gradient-to-r from-highlight to-highlight50 rounded-full">
						<Icon icon="github" classNameIcon="fill-main transition-all duration-300" />
					</Link>
				</PopIn>
				<PopIn delay={2000}>
					<Link href="https://www.instagram.com/_baldo._/" target="__blank" className="aspect-square p-2 flex items-center justify-center bg-gradient-to-r from-highlight to-highlight50 rounded-full">
						<Icon icon="instagram" classNameIcon="fill-main transition-all duration-300" />
					</Link>
				</PopIn>
			</div>
			{/* <div className={`fixed inset-0 bg-[rgba(0,0,0,0.8)] p-6 lg:p-10 transition-all duration-300 z-[1000000] ${!isVisible ? "opacity-0 invisible pointer-events-none" : ""}`}>
                <iframe src={"/cv.pdf"} className="h-full w-full"></iframe>
                <button className="absolute top-2 right-2" onClick={() => {
                    setIsVisible(false)
                    document.querySelector("html")?.classList?.remove("overflow-hidden")
                }}>
                    <Icon icon="close" fill={tailwindConfig.theme.extend.colors["main"]} />
                </button>
            </div> */}
		</>
	)
}