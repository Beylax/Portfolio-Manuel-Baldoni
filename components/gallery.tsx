"use client"

import Image from "next/image"
import { useState } from "react"

interface IGalleryProps {
	images: Array<{
		image_url: string
		alt_text: string
	}>
}

export default function Gallery(props: IGalleryProps) {
	const [activeImage, setActiveImage] = useState(props?.images[0])

	return (
		<div className="gallery flex flex-col items-center gap-6">
			<div className="w-full flex items-center justify-start gap-4 p-3 lg:p-6 rounded-lg border border-[#444444] overflow-auto">
				{
					props?.images?.map((img, i) => {
						return (
							<button type="button" key={img.image_url} className={"relative isolate h-[60px] lg:h-[100px] aspect-square shrink-0 rounded-lg overflow-hidden"} onClick={() => {
								setActiveImage(img)
							}}>
								<div className={`absolute inset-0 bg-black z-[10] ${img.image_url !== activeImage.image_url ? "opacity-80" : "opacity-0"}`}></div>
								<Image src={img.image_url} alt={img.alt_text ?? "Image"} fill className="object-cover" />
							</button>
						)
					})
				}
			</div>
			<div className="w-full lg:w-[80%] aspect-video">
				<div className="relative w-full h-full rounded-lg overflow-hidden">
					<Image src={activeImage.image_url} alt={activeImage.alt_text ?? "Image"} fill className="object-cover" />
				</div>
			</div>
		</div>
	)
}