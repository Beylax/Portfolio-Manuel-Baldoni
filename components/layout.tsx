import Head from "next/head";
import Header from "./header";
import { Poppins } from 'next/font/google'
import Footer from "./footer";
import { createContext, useEffect, useState } from "react";
import Script from 'next/script'
import Loader from "./loader";
import MousePointer from "./mousePointer";
import BackToTop from "./backToTop";

const poppins = Poppins({ weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], style: ["normal", "italic"], subsets: ["latin"] })

export const LoadingContext = createContext<{ isLoading: boolean }>({ isLoading: true })

const DELAY_LOADING = 3

export default function Layout({ children }: any) {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        let timer = setTimeout(() => {
            setIsLoading(false)
        }, DELAY_LOADING * 1000)

        return () => {
            clearTimeout(timer)
        }
    }, [])

    return (
        <LoadingContext.Provider value={{ isLoading }}>
            <div className={poppins.className}>
                <Head>
                    <title>Manuel Baldoni | Portfolio</title>
                    <meta name="description" content="Portfolio di Manuel Baldoni - Full-stack developer - Front-end passion"></meta>
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
                {/* <BackToTop /> */}

                <Header></Header>
                
                <main className="overflow-x-hidden max-w-screen">
                    {children}
                </main>
                
                <Footer></Footer>
            </div>
        </LoadingContext.Provider>
    )
}