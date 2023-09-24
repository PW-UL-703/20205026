import Link from "next/link"
import Head from "next/head"
import Layout from "./componentes/Layout.js"

const Index2 = () => (
  <Layout content={ 
    <>
      <Head>
          <title>pagina2</title>
      </Head>
      <div>
          <h1>Home Page o Welcome Page</h1>
          <Link href="pagina3">Ir a la pagina3</Link>
      </div>
    </>
  } />
)

export default Index2