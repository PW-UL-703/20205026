import Head from "next/head"
import Image from "next/image"

export default props => (
    <>
        <Head>
            <title>Administración de bibliotecas</title>
        </Head>
        <header>
            &nbsp;
                <Image src="/icono_perfil.png" height={512} width={512} alt="icon"></Image>
                <div class="menu-toggle">
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
                </div>
            &nbsp;
        </header>

        <h1>Biblioteca</h1>


        //Habilitamos los estilos importandos en _app en el Layout
        <main>
            {props.content}
        </main>
        

    </>
)