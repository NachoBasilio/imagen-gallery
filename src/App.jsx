import Galeria from "./pages/Galeria"
import galeriaReducer  from "./reducer"
import { useReducer } from "react";


function App() {
  const [state, dispatch] = useReducer(galeriaReducer, {
    favoritos: [],
    galeria: []
  });


  return (
    <>
      <Galeria state={state} dispatch={dispatch}/>
    </>
  )
}

export default App
