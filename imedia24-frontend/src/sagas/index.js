import { all } from 'redux-saga/effects';
import pokemonSagas from './pokemons';

export default function* rootSaga() {
  yield all([...pokemonSagas]);
}
