import { useEffect } from "react"

interface IDropDown {
    children: any
    delay: number
}

export default function DropDown({children, delay}: IDropDown) {
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show")
                }
            })
        }, { threshold: 0.15 })
        const elements = document.querySelectorAll(`.drop-down`)
        elements.forEach(element => observer.observe(element))
    })

    return (
        <div className={"drop-down"} style={{ transitionDelay: `${delay}ms` }}>
            {children}
        </div>
    )
}