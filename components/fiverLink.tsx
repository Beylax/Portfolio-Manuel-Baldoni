import Link from "next/link";

export default function FiverLink() {
	return (
		<Link
			href={"https://it.fiverr.com/s/XL0ExYZ"}
			className={`fiver-link block w-fit mx-auto mt-10 rainbow-border text-main shadow-[0_0_10px_-2px_#ffffff] px-6 py-3 text-center text-xl font-bold uppercase rounded-md`}
		>
			{"If you'd like to work with me check out my fiver! I'll see you there"}
		</Link>
	)
}