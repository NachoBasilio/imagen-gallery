import PropTypes from 'prop-types';

export default function Imagen({imagen}) {
  return (
    <div className='contenedor-imagen'>
        <img src={imagen.download_url} alt={imagen.author} />
    </div>
  )
}

Imagen.propTypes = {
    imagen: PropTypes.object.isRequired
}
