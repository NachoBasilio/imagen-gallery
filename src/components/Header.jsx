import { NavLink } from 'react-router-dom'

import "../styles/Header.css"

export default function Header() {
  return (
    <header>
        <ul>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/galeria">Galeria</NavLink>
            </li>
            <li>
                <NavLink to="/favoritos">Favoritos</NavLink>
            </li>
        </ul>
    </header>
  )
}
