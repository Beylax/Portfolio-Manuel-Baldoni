import Link from "next/link";
import Container from "../components/container";

export default function PageNotFound() {
	return (
		<Container className="min-h-[calc(100vh_-_64px_-_104px)] lg:min-h-[calc(100vh_-_64px_-_136px)] flex items-center justify-center">
			<div className="text-center">
				<h1 className="font-bold mb-10">Page Not Found</h1>
				<Link
					href={"/"}
					className={`underline-effect-small py-2 text-center text-xl font-bold uppercase text-main hover:text-hemerald transition-[scale] duration-500 delay-[1500ms]`}>
					{"Go back home"}
				</Link>
			</div>
		</Container>
	)
}