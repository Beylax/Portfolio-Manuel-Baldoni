"use client"

import { useEffect } from "react"

interface ISlideIn {
    children: any,
	direction: "left" | "right" | "top" | "bottom"
	className?: string
	delay?: number
}

export default function SlideIn({ children, direction, delay, className }: ISlideIn) {
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
    }, [])

    return (
        <div className={`slide-in slide-in-${direction} ${className}`} style={{ transitionDelay: `${delay ?? 0}ms` }}>
            {children}
        </div>
    )
}