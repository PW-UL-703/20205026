import './styles/all.css';

import { AppProps } from "next/app";

export default function MyApp ({Component, pageProps}) {
    return <Component {...pageProps} />
}