import '@/styles/globals.css'
import {Fira_Code} from 'next/font/google'
import {Roboto} from 'next/font/google'
import type {AppProps} from 'next/app'

const fira = Fira_Code({subsets: ['latin']})
const roboto = Roboto({subsets: ['latin'], weight: "400"})

export default function App({Component, pageProps}: AppProps) {
    return (
        <>
            <style jsx global>{`
              html {
                font-family: ${roboto.style.fontFamily};
              }
            `}</style>
            <Component {...pageProps} />
        </>
    )
}
