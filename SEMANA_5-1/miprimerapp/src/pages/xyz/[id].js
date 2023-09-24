import { useRouter } from 'next/router'

export default () => {
    // necesito usar el router
    const router = useRouter()

    return(
        <>
                <h1>Pagina de Rutas Dinamicas</h1>
                <p>ID enviado : { router.query.id} </p>
        </>
    )
}