import Head from "next/head";
import Header from "./header";
import { Poppins } from 'next/font/google'
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

const poppins = Poppins({ weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], style: ["normal", "italic"], subsets: ["latin"] })

export const LoadingContext = createContext<{ isLoading: boolean, setIsLoading: any }>({ isLoading: false, setIsLoading: null })

interface IPropsLayout {
    children: any
    pageTitle: string
    pageDescription?: string
    breadcrumb?: boolean
}

export default function Layout({ children, pageTitle, pageDescription, breadcrumb }: IPropsLayout) {
    const [isLoading, setIsLoading] = useState(false)

    return (
        <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
            <div className={poppins.className}>
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

                <Loader />
                <MousePointer />
                <BackToTop />
                <SocialFlyout /> 

                <Header></Header>

                <main className="overflow-x-hidden max-w-screen">
                    {
                        breadcrumb ?
                            <Breadcrumb /> : null
                    }
                    {children}
                </main>

                <Footer></Footer>
            </div>
        </LoadingContext.Provider>
    )
}