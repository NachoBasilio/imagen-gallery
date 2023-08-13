import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header>
        <h1>Galeria de Fotos</h1>
        <ul>
        <li>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/galeria">Galeria</NavLink>
            <NavLink to="/favoritos">Favoritos</NavLink>
        </li>
        </ul>
  </header>
  )
}
