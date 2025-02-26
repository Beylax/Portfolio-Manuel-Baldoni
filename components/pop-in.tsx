"use client"

import { useEffect } from "react"

interface IPopIn {
	children: any
	className?: string
	delay?: number
}

export default function PopIn({ children, delay, className }: IPopIn) {
	useEffect(() => {
		const observer = new IntersectionObserver(entries => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					entry.target.classList.add("show")
				}
			})
		}, { threshold: 0.15 })
		const elements = document.querySelectorAll(`.pop-in`)
		elements.forEach(element => observer.observe(element))
	})

	return (
		<div className={`pop-in ${className}`} style={{ transitionDelay: `${delay ?? 0}ms` }}>
			{children}
		</div>
	)
}