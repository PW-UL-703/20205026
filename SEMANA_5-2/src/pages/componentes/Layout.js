import Head from "next/head";
import Link from "next/link";


export default props => (
    <>
    <Head>
        <title>Pokemon</title>
    </Head>
    <header>
        <div>
            &nbsp;
        <p>
            <img src="./imagenes/logo_texto.png" width="338" alt="Logo"/>
            En el Pokédex Pokéfanaticos encontrarás información detallada sobre cada Pokémon existente. Para cada criatura podrás ver su información general, los lugares donde es posible atraparlo, los ataques / movimientos que puede aprender cuando aumenta de nivel, y finalmente información útil para utilizar este Pokémon para crianza.
            A continuación, usaremos el tema de  Pokémon para aprender JavaScript
        </p>
        &nbsp;
        </div>
    </header>

    <nav>
        <ul>
            <li><Link href="/pagina1">Inicio</Link></li>
            <li><Link href="/listar">Listado</Link></li>

        </ul>
    </nav>

    /*Se pone esto para habilitar los estilos en el Layout
    <main>
        {props.content}
    </main>
    
    <footer>
        <p>Ingenieria de Sistemas &copy; 2023-2 - Programacion Web 703</p>
    </footer>
    </>
);