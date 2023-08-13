import {Routes,Route  } from "react-router-dom";
import Favoritos from "./pages/Favoritos";
import Galeria from "./pages/Galeria"
import Home from "./pages/Home";
import UserProvider from "./context/UserProvider";
import Header from "./components/Header";


function App() {



  return (
    <UserProvider>
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/galeria" element={<Galeria/>} />
        <Route path="/favoritos" element={<Favoritos/>} />
      </Routes>

    </UserProvider>
  )
}

export default App
