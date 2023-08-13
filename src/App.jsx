import { NavLink,Routes,Route  } from "react-router-dom";
import Favoritos from "./pages/Favoritos";
import Galeria from "./pages/Galeria"
import Home from "./pages/Home";
import UserProvider from "./context/UserProvider";


function App() {



  return (
    <UserProvider>
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

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/galeria" element={<Galeria/>} />
        <Route path="/favoritos" element={<Favoritos/>} />
      </Routes>

    </UserProvider>
  )
}

export default App
