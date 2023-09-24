import { useRouter } from "next/router";

export default () => {
    //Necesito usar el router
    const router = useRouter()

    return (
        <>
            <h1>Pagina de rutas dinamicas</h1>
            <p>ID enviado : {router.query.id}</p>
        </>
    )
}
