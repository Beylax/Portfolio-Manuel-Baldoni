import Head from "next/head";
import Header from "./header";
import { Montserrat, Poppins } from 'next/font/google'
import Footer from "./footer";
import { createContext, useEffect, useState } from "react";
import Script from 'next/script'
import Loader from "./loader";
import MousePointer from "./mousePointer";
import BackToTop from "./backToTop";
import Container from "./container";
import Breadcrumb from "./breadcrumb";
import Curriculum from "./socialFlyout";
import SocialFlyout from "./socialFlyout";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

const poppins = Poppins({ weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], style: ["normal", "italic"], subsets: ["latin"], variable: "--poppins-font" })
const montserrat = Montserrat({ weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], style: ["normal", "italic"], subsets: ["latin"], variable: "--montserrat-font" })

export const LoadingContext = createContext<{ isLoading: boolean, setIsLoading: any }>({ isLoading: true, setIsLoading: null })

interface IPropsLayout {
	children: any
	pageTitle: string
	pageDescription?: string
	breadcrumb?: boolean
}

export default function Layout({ children, pageTitle, pageDescription, breadcrumb }: IPropsLayout) {
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		setIsLoading(false)
	}, [])

	return (
		<LoadingContext.Provider value={{ isLoading, setIsLoading }}>
			<div className={`${montserrat.className} isolate`}>
				<Head>
					<title>{pageTitle}</title>
					{
						pageDescription ?
							<meta name="description" content={pageDescription}></meta> : null
					}
				</Head>

				<Script async src="https://www.googletagmanager.com/gtag/js?id=G-4NYFFVC195"></Script>
				<Script id="google-analytics">
					{`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());

                        gtag('config', 'G-4NYFFVC195');
                    `}
				</Script>

				{/* <Loader /> */}
				{/* <MousePointer /> */}
				<BackToTop />
				<SocialFlyout />

				<Header></Header>

				<main className="relative max-w-screen z-10">
					{
						breadcrumb ?
							<Breadcrumb /> : null
					}
					{children}
				</main>

				<Footer></Footer>

				<Analytics />
				<SpeedInsights />
			</div>
		</LoadingContext.Provider>
	)
}