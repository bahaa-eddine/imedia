export const Types = {
  GET_POKEMONS_REQUEST: 'GET_POKEMONS_REQUEST',
  GET_POKEMONS_SUCCESS: 'GET_POKEMONS_SUCCESS',
  GET_POKEMON_BY_ID_REQUEST: 'GET_POKEMON_BY_ID_REQUEST',
  GET_POKEMON_BY_ID_SUCCESS: 'GET_POKEMON_BY_ID_SUCCESS'
};

export const getPokemonsRequest = () => ({
  type: Types.GET_POKEMONS_REQUEST
});

export const getPokemonsSuccess = items => ({
  type: Types.GET_POKEMONS_SUCCESS,
  payload: { items }
});

export const getPokemonByIdRequest = (name) => ({
  type: Types.GET_POKEMON_BY_ID_REQUEST,
  name: name
});

export const getPokemonByIdSuccess = pokemon => ({
  type: Types.GET_POKEMON_BY_ID_SUCCESS,
  payload: { pokemon }
});

