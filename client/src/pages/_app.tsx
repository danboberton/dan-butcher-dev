import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import {Head} from "next/document";


export default function App({Component, pageProps}: AppProps) {
    return (
        <>
            <Head>
                <title>Dan Butcher is a dev</title>
            </Head>
            <Component {...pageProps} />
        </>
    )
}
