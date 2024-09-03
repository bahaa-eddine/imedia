import { Types } from '../actions/pokemons';

const initialState = {
  items: [],
  pokemon: {},
  
};

export const pokemonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_POKEMONS_SUCCESS:
      return {
        ...state,
        items: action.payload.items
      };
    case Types.GET_POKEMON_BY_ID_SUCCESS:
      return {
        ...state,
        pokemon: action.payload.pokemon
      };
    default:
      return state;
  }
};
