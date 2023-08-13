import { useContext } from "react";
import UserContext from "../context/UserContext";
import GaleriaImg from "../components/GaleriaImg";


export default function Favoritos() {
  const { state, dispatch } = useContext(UserContext);
  const imagenes = state.favoritos || [];


  const handlerEliminar = (id) => {
    dispatch({
      type: "REMOVE_FAVORITO",
      payload: id,
    });
  };


  return (
    <div>
      <h1 className="contenedor-home titulo">Favorito</h1>
      <div className="galeria">
                {
                  imagenes.length == 0 ? <p>No hay imagenes</p> : imagenes.map((imagen) => (
                    <GaleriaImg key={imagen.id} imagen={imagen} handlerEliminar={handlerEliminar} />
                  ))
                }
      </div>
    </div>
  )
}
