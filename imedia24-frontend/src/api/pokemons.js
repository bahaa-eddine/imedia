import axios from 'axios';

axios.defaults.baseURL = 'https://pokeapi.co/api/v2/';

export const getPokemons = () => {
  return axios.get('/pokemon/?limit=50');
};

export const getPokemonById = (id) => {
  return axios.get(`/pokemon/${id}`);
};