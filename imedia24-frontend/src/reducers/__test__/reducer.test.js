import { getPokemonsRequest } from "../../actions/pokemons";
import { pokemonsReducer } from "../pokemons";

describe('testing reducer', () => {
    describe('GET_POKEMONS_REQUEST case', () => {
        const action = getPokemonsRequest();

        it('should check the action', () => {
            expect(action).toEqual({ type: 'GET_POKEMONS_REQUEST' });
        })

        it('should set items in state', () => {
            const state = pokemonsReducer(undefined, action);
            expect(state).toHaveProperty('items')
        });
    });
});