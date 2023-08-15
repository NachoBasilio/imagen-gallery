import { useContext } from "react";
import UserContext from "../context/UserContext";
import GaleriaImg from "../components/GaleriaImg";


export default function Favoritos() {
  const { state, dispatch } = useContext(UserContext);
  const imagenes = state.favoritos;
  console.log(imagenes);


  const handlerEliminar = (id) => {
    const arrayFiltrado = imagenes.filter((imagen) => imagen.id !== id);
    localStorage.setItem('favoritos', JSON.stringify({favoritos: arrayFiltrado}));

    dispatch({
      type: "REMOVE_FAVORITO",
      payload: arrayFiltrado,
    });
    
  };


  return (
    <div>
      <h1 className="contenedor-home titulo">Favorito</h1>
      <div className="galeria">
                {
                    imagenes && imagenes.map((imagen) => (
                        <GaleriaImg
                            key={imagen.id}
                            imagen={imagen}
                            handlerEliminar={handlerEliminar}
                        />
                    ))
                }
      </div>
    </div>
  )
}
