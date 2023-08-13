import PropTypes from 'prop-types';

export default function Imagen({imagen, handleFavorito}) {
  return (
    <div className='contenedor-imagen'>
        <img src={imagen.download_url} alt={imagen.author} />
        <p className='autor'>{imagen.author}</p>
        {
            handleFavorito ?
            <button
            onClick={() => handleFavorito(imagen)} 
            className='boton-corazon'>
            <svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                <path fill="#ef4444" d="M256 448a32 32 0 0 1-18-5.57c-78.59-53.35-112.62-89.93-131.39-112.8c-40-48.75-59.15-98.8-58.61-153C48.63 114.52 98.46 64 159.08 64c44.08 0 74.61 24.83 92.39 45.51a6 6 0 0 0 9.06 0C278.31 88.81 308.84 64 352.92 64c60.62 0 110.45 50.52 111.08 112.64c.54 54.21-18.63 104.26-58.61 153c-18.77 22.87-52.8 59.45-131.39 112.8a32 32 0 0 1-18 5.56Z"/>
            </svg>
            </button>
            : null
        }
    </div>
  )
}

Imagen.propTypes = {
    imagen: PropTypes.object.isRequired,
    handleFavorito: PropTypes.func
}
