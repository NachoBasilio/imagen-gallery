import GaleriaImg from "../components/GaleriaImg"
import useFetch from "../hooks/useFetch"


export default function Galeria() {
    const { imagenes, getImagenes } = useFetch()

    return (
        <>
            <h1>Galeria</h1>
            <button onClick={
                () => {
                     getImagenes(10)
                }
            }>Obtener imagenes</button>
            <div className="galeria">
                {
                    imagenes ? 
                    imagenes.map(imagen => <GaleriaImg key={imagen.id} imagen={imagen}/>) : <p>No hay imagenes</p>
                }
            </div>
        </>
    )
}
