import Link from "next/link"
import Head from "next/head"
import Layout from "./componentes/Layout.js"

const Index = () => (
  <Layout content={ 
    <>
      <Head>
          <title>Usando Layouts</title>
      </Head>
      <div>
          <h1>Home Page o Welcome Page</h1>
          <Link href="Listar">Listar los pokemones</Link>
      </div>
    </>
  } />
)

export default Index
