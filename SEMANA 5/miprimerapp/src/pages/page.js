import Link from 'next/link'
const Index = () => {
    return(
        <>
            <div>
                <h1>Pagina de Bienvenida...</h1>
                <p>Hola mundo NetxJS !!</p>
                <p>
                    Ir a la sgte pagina<br></br>
                    <Link href="/page2">pagina #2</Link>
                </p>
                <p>
                    Ir a la sgte pagina<br></br>
                    <Link href="/imagen">Ver imagen</Link>
                </p>
            </div>
            <div>
                <ul>
                    <li><Link href="/xyz/1">parametro 1</Link></li>
                    <li><Link href="/xyz/10">parametro 10</Link></li>
                    <li><Link href="/xyz/100">parametro 100</Link></li>
                    <li><Link href="/xyz/9999">parametro 9999</Link></li>
                    <li><Link href="/xyz/88888">parametro 88888</Link></li>
                </ul>
            </div>
        </>
    )
}

export default Index