
import { useContext, useEffect } from "react";
import GaleriaImg from "../components/GaleriaImg"
import useFetch from "../hooks/useFetch"

import "../styles/Galeria.css"
import UserContext from "../context/UserContext";



export default function Galeria() {
    const { imagenes, getImagenes } = useFetch()

    const { state, dispatch } = useContext(UserContext)




    const handleFavorito = (imagen) => {
        if (state.favoritos.find(favorito => favorito.id === imagen.id)) {
            return
        }
        localStorage.setItem('favoritos', JSON.stringify([...state.favoritos, imagen]));
        
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
            <h1 className="titulo-galeria">Galeria</h1>

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

