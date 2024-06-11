import Image from "next/image"
import { useState } from "react"

interface IGalleryProps {
    images: Array<any>
}

export default function Gallery(props: IGalleryProps) {
    const [activeImage, setActiveImage] = useState(props?.images[0])

    return (
        <div className="gallery flex flex-col items-center gap-6">
            <div className="w-full flex items-center justify-start gap-4 p-3 lg:p-6 rounded-lg border border-[#444444] overflow-auto">
                {
                    props?.images?.map((img, i) => {
                        return (
                            <button type="button" key={img.src} className={"relative isolate h-[60px] lg:h-[100px] aspect-square shrink-0 rounded-lg overflow-hidden"} onClick={() => {
                                setActiveImage(img)
                            }}>
                                <div className={`absolute inset-0 bg-black z-[10] ${img.src !== activeImage.src ? "opacity-80" : "opacity-0"}`}></div>
                                <Image src={img.src} alt={img.alt} fill className="object-cover" />
                            </button>
                        )
                    })
                }
            </div>
            <div className="w-full lg:w-[80%] aspect-video">
                <div className="relative w-full h-full rounded-lg overflow-hidden">
                    <Image src={activeImage.src} alt={activeImage.alt} fill className="object-cover" />
                </div>
            </div>
        </div>
    )
}