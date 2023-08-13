import GaleriaImg from "../components/GaleriaImg"
import useFetch from "../hooks/useFetch"
import "../styles/Galeria.css"

export default function Galeria() {
    const { imagenes, getImagenes } = useFetch()

    document.addEventListener("DOMContentLoaded", () => {
        getImagenes(10)
    })
    return (
        <div className="gal-home">
            <h1>Galeria</h1>

            <div className="galeria">
                {
                    imagenes ? 
                    imagenes.map(imagen => <GaleriaImg key={imagen.id} imagen={imagen}/>) : <p>No hay imagenes</p>
                }
            </div>

            <button className="boton-de-mas" onClick={
                () => {
                     getImagenes(10)
                }
            }>+</button>
        </div>
    )
}
