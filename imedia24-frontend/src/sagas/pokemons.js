import { takeEvery, call, put, fork } from 'redux-saga/effects';
import * as actions from '../actions/pokemons';
import * as api from '../api/pokemons';

export function* getPokemons() {
  try {
    const result = yield call(api.getPokemons);
    yield put(actions.getPokemonsSuccess(result.data.results));
  } catch (error) {
    console.error(error);
  }
}

export function* getPokemonById(action) {
  try {
    const result = yield call(api.getPokemonById,action.name);
    yield put(actions.getPokemonByIdSuccess(result.data));
  } catch (error) {
    console.error(error);
  }
}


export function* watchGetPokemonsRequest() {
  yield takeEvery(actions.Types.GET_POKEMONS_REQUEST, getPokemons);
}

export function* watchGetPokemonByIdRequest() {
  yield takeEvery(actions.Types.GET_POKEMON_BY_ID_REQUEST, getPokemonById);
}

const pokemonSagas = [fork(watchGetPokemonsRequest), fork(watchGetPokemonByIdRequest)];

export default pokemonSagas;
