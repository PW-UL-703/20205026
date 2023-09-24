import Head from 'next/head'
import Link from 'next/link'

const main = () => {
    return(
        <>
            <Head>
                <title>Prueba</title>
                <Link rel="icon" href="/icono.jpg" />
            </Head>
            <header>
                <div>
                    &nbsp;
                    <p>Hola</p>
                </div>
            </header>
            <h1></h1>
        </>
    )
}

export default main