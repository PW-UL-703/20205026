import Image from 'next/image'

const EjemploImage = () => {
    return (
        <>
            <h1>Ejemplo de Imagen</h1>
            <Image src="/logo_texto.png"
                height={143}
                width={675}
                alt="Ejemplo de imagen" 
                ></Image>
        </>
    )
}
export default EjemploImage