import Head from "next/head";
import Header from "./header";
import { Poppins } from 'next/font/google'
import Footer from "./footer";

const poppins = Poppins({ weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], style: ["normal", "italic"], subsets: ["latin"] })

export default function Layout({children} : any) {
    return (
        <div className={poppins.className}>
            <Head>
                <title>Manuel Baldoni | Portfolio</title>
                <meta name="description" content="Portfolio di Manuel Baldoni - Full-stack developer - Front-end passion"></meta>
            </Head>
            
            <Header></Header>
            <main className="overflow-x-hidden max-w-screen">
                {children}
            </main>
            <Footer></Footer>
        </div>
    )
}