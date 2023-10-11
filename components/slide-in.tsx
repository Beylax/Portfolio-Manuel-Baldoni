import { useEffect } from "react"

interface ISlideIn {
    children: any,
    direction: "left" | "right"
}

export default function SlideIn({ children, direction }: ISlideIn) {
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show")
                }
            })
        }, { threshold: 0.15 })
        const elements = document.querySelectorAll(`.slide-in-${direction}`)
        elements.forEach(element => observer.observe(element))
    })

    return (
        <div className={`slide-in slide-in-${direction}`}>
            {children}
        </div>
    )
}