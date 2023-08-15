

const galeriaReducer = (state, action) => {


    switch (action.type) {
      case 'ADD_FAVORITO':

        return {
            ...state,
            favoritos: [...state.favoritos, action.payload]
        };
      case 'REMOVE_FAVORITO':{
        return {
            ...state,
            favoritos: action.payload
        };}
      default:
        return state;
    }
  };
  
  export default galeriaReducer;