

const galeriaReducer = (state, action) => {


    switch (action.type) {
      case 'ADD_FAVORITO':
        if (state.favoritos.findIndex(favorito => favorito.id === action.payload.id) !== -1) {
          return state;
        }
        return {
            ...state,
            favoritos: [...state.favoritos, action.payload]
        };
      default:
        return state;
    }
  };
  
  export default galeriaReducer;