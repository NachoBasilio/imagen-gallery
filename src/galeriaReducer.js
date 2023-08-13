

const galeriaReducer = (state, action) => {


    switch (action.type) {
      case 'ADD_FAVORITO':
        if (state.favoritos && state.favoritos.find(favorito => favorito.id === action.payload.id)) {
          return state;
        }
        localStorage.setItem('favoritos', JSON.stringify({favoritos: [...state.favoritos, action.payload]}));
        return {
            ...state,
            favoritos: [...state.favoritos, action.payload]
        };
      case 'REMOVE_FAVORITO':{
        const arrayFiltrado = state.favoritos.filter(favorito => favorito.id !== action.payload);
        localStorage.setItem('favoritos', JSON.stringify({favoritos: arrayFiltrado}));
        return {
            ...state,
            favoritos: arrayFiltrado
        };}
      default:
        return state;
    }
  };
  
  export default galeriaReducer;