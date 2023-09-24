import Image from "next/image"
import Link from "next/link"
import Head from "next/head"
import Layout from "./componentes/Layout"

const main = () => (
    <Layout content = {
        <>
            <Head>
                <title>PaginaPrueba</title>
                <Image src="/logo.png" height={400} width={600} alt="icon"></Image>                
            </Head>
            <h1>Prueba</h1>
            <form></form>
        </>
    } />
)

export default main