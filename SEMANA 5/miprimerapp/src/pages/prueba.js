import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head' //Sirve para habilitar la etiqueta <head>.

const Index = () => {
    return(
        <>
            <Head>
                <title>Mi primera pagina</title>
                <link rel="icon" href="/logo.png" />
            </Head> 

            <header>
                <div>
                    &nbsp;
                <p>
                    <Image src="/logo_texto.png"
                        height={143}
                        width={338}
                        alt="Ejemplo de imagen" 
                        ></Image>
                        En el Pokédex Pokéfanaticos encontrarás información detallada sobre cada Pokémon existente. Para cada criatura podrás ver su información general, los lugares donde es posible atraparlo, los ataques / movimientos que puede aprender cuando aumenta de nivel, y finalmente información útil para utilizar este Pokémon para crianza.
                        A continuación, usaremos el tema de  Pokémon para aprender JavaScript
                </p>
                &nbsp;
            </div>
            </header>

            <nav>
                <ul>
                    <li><Link href="">Inicio</Link></li>
                    <li><Link href="">Productos</Link></li>
                    <li><Link href="">Servicios</Link></li>
                    <li><Link href="">Precios</Link></li>
                    <li><Link href="">Nosotros</Link></li>
                    <li><Link href="">Contacto</Link></li>
                </ul>
            </nav>
        </>
    )
}

export default Index