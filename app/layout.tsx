import { SpeedInsights } from '@vercel/speed-insights/next'
import '../styles/globals.css'
import { GoogleTagManager } from '@next/third-parties/google'
import { Analytics } from '@vercel/analytics/react'
import Footer from '../components/footer'
import Breadcrumb from '../components/breadcrumb'
import BackToTop from '../components/backToTop'
import SocialFlyout from '../components/socialFlyout'
import Header from '../components/header'
import { Montserrat } from 'next/font/google'
import Loading from '../components/contexts/loadingContext'

const montserrat = Montserrat({ weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], style: ["normal", "italic"], subsets: ["latin"], variable: "--montserrat-font" })

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body>
				<GoogleTagManager gtmId={"GTM-N9VXK56B"} />
				{/* <MousePointer /> */}

				<Loading>
					<BackToTop />
					<SocialFlyout />
					<Header />
					<main className={`${montserrat.className} isolate relative z-10`}>
						<Breadcrumb />
						{children}
					</main>
					<Footer />
				</Loading>

				<SpeedInsights />
				<Analytics />
			</body>
		</html>
	)
}