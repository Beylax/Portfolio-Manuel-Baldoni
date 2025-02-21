"use client"

import { createContext, useEffect, useState } from "react";

export const LoadingContext = createContext<{ isLoading: boolean, setIsLoading: any }>({ isLoading: false, setIsLoading: null })

export default function Loading({
	children
}: {
	children: React.ReactNode
}) {
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		setInterval(() => {
			setIsLoading(false)
		}, 100)
	}, [])

	return (
		<LoadingContext.Provider value={{ isLoading, setIsLoading }}>
			{children}
		</LoadingContext.Provider>
	)
}