import PropTypes from 'prop-types';
import Imagen from './Imagen';
import "../styles/GaleriaImg.css"

export default function GaleriaImg({imagen, handleFavorito, handlerEliminar}) {
  return (
    <> 
        <Imagen  
        imagen={imagen} 
        handleFavorito={handleFavorito}
        handlerEliminar={handlerEliminar}
        />
    </>
  )
}

GaleriaImg.propTypes = {
    imagen: PropTypes.object.isRequired,
    handleFavorito: PropTypes.func,
    handlerEliminar: PropTypes.func,
}
