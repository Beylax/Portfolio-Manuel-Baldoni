import '../styles/globals.css'
import { GoogleTagManager } from '@next/third-parties/google'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <GoogleTagManager gtmId={"GTM-N9VXK56B"} />
    </>
  )
}

export default MyApp
