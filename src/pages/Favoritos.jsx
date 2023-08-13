import { useContext } from "react";
import UserContext from "../context/UserContext";
import GaleriaImg from "../components/GaleriaImg";


export default function Favoritos() {
  const { state, dispatch } = useContext(UserContext);
  const imagenes = state.favoritos;
  return (
    <div>
      <div className="galeria">
                {
                    imagenes !== 0 ? 
                    imagenes.map(imagen => 
                    <GaleriaImg 
                        key={imagen.id} 
                        imagen={imagen}
                    />) : <p>No hay imágenes</p>
                }
      </div>
    </div>
  )
}
