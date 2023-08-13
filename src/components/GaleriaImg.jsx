import PropTypes from 'prop-types';
import Imagen from './Imagen';
import "../styles/GaleriaImg.css"

export default function GaleriaImg({imagen}) {
  return (
    <> 
        <Imagen  imagen={imagen}/>
    </>
  )
}

GaleriaImg.propTypes = {
    imagen: PropTypes.object.isRequired
}
