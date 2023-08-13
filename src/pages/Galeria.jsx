
import { useEffect } from "react";
import GaleriaImg from "../components/GaleriaImg"
import useFetch from "../hooks/useFetch"
import PropTypes from "prop-types"
import "../styles/Galeria.css"



export default function Galeria({
    state,
    dispatch
}) {
    const { imagenes, getImagenes } = useFetch()




    console.log(state)

    const handleFavorito = (imagen) => {
        dispatch({
            type: "ADD_FAVORITO",
            payload: imagen
        })
        
    }

    

    useEffect(() => {
        getImagenes(10);
    }, []);

    return (
        <div className="gal-home">
            <h1>Galeria</h1>

            <div className="galeria">
                {
                    imagenes !== 0 ? 
                    imagenes.map(imagen => 
                    <GaleriaImg 
                        key={imagen.id} 
                        imagen={imagen}
                        handleFavorito={handleFavorito}
                    />) : <p>No hay imágenes</p>
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

Galeria.propTypes = {
    state: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
}