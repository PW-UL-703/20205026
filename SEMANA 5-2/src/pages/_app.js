import '../styles/all.css'
import '../styles/cuerpo.css'
import '../styles/footer.css'
import '../styles/header.css'
import '../styles/media.css'
import '../styles/nav.css'

import { AppProps } from 'next/app'

export default function MyApp( {Component, pageProps}) {
    return <Component { ...pageProps} />
}