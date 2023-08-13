import PropTypes from 'prop-types';
import Imagen from './Imagen';
import "../styles/GaleriaImg.css"

export default function GaleriaImg({imagen, handleFavorito}) {
  return (
    <> 
        <Imagen  
        imagen={imagen} 
        handleFavorito={handleFavorito}
        />
    </>
  )
}

GaleriaImg.propTypes = {
    imagen: PropTypes.object.isRequired,
    handleFavorito: PropTypes.func
}
