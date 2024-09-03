import { takeEvery } from "redux-saga/effects";
import { getPokemons, watchGetPokemonsRequest } from "../pokemons";

describe('fetchPokemonsFromApi', () => {
    const genObject = watchGetPokemonsRequest();

    it('should wait for every GET_POKEMONS_REQUEST action and call getPokemons', () => {
        expect(genObject.next().value)
            .toEqual(takeEvery('GET_POKEMONS_REQUEST', getPokemons));
    });

    it('should be done on next iteration', () => {
        expect(genObject.next().done).toBeTruthy();
    });
});
