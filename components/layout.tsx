import Head from "next/head";
import Header from "./header";
import { Poppins } from 'next/font/google'
import Footer from "./footer";
import { createContext, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

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

                <div className={`loading flex items-center justify-center fixed z-[100000] bg-gradient-to-r from-highlight to-highlight50 transition-all duration-500 overflow-hidden inset-0 ${isLoading ? "" : "scale-150 opacity-0 pointer-events-none"}`}>
                    <div className="relative">
                        <span className="loader"></span>
                    </div>
                </div>
                <Header></Header>
                <main className="overflow-x-hidden max-w-screen">
                    {children}
                </main>
                <Footer></Footer>
            </div>
        </LoadingContext.Provider>
    )
}