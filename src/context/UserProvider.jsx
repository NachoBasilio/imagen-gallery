import PropTypes from 'prop-types'
import UserContext from './UserContext'
import galeriaReducer from '../galeriaReducer'
import { useReducer } from 'react'





export default function UserProvider({children}) {
    const [state, dispatch] = useReducer(galeriaReducer, {
        favoritos: []
    })

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