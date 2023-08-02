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
                else {
                    entry.target.classList.remove("show")
                }
            })
        })
        const elements = document.querySelectorAll(`.drop-down`)
        elements.forEach(element => observer.observe(element))
    })

    const style = `drop-down`

    return (
        <div className={style}>
            {children}
        </div>
    )
}