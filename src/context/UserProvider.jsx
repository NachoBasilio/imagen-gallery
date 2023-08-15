import PropTypes from 'prop-types'
import UserContext from './UserContext'
import galeriaReducer from '../galeriaReducer'
import { useReducer } from 'react'


const init = () => {
    return JSON.parse(localStorage.getItem('favoritos')) || {
        favoritos: []
    }
}


export default function UserProvider({children}) {

    const [state, dispatch] = useReducer(galeriaReducer,{favoritos: []},init);
    console.log(state)

  return (
    <UserContext.Provider value={{
        state,
        dispatch
    }}>
        {children}
    </UserContext.Provider>
  )
}

UserProvider.propTypes = {
    children: PropTypes.node.isRequired
}