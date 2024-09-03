import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import { connect, useDispatch } from 'react-redux';
import { Button } from 'reactstrap';
import { getPokemonsRequest } from '../actions/pokemons';
import ModalPokemon from './ModalPokemon';

const PokemonsList = (props) => {

  const dispatch = useDispatch();
  const [modalShow, setModalShow] = useState(false);
  const [modalPokemonName, setPokemonName] = useState("1");
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    dispatch(getPokemonsRequest());
  }, [dispatch]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function handleScroll() {
    if (Math.trunc(window.innerHeight + document.documentElement.scrollTop) !== document.documentElement.offsetHeight) return;
    console.log('Fetch more list items!');
    setIsFetching(true);
  }

  useEffect(() => {
    if (!isFetching) return;
    fetchMorePokemonListItems();
  }, [isFetching]);

  function fetchMorePokemonListItems() {
    setTimeout(() => {
      // refresh data
      setIsFetching(false);
    }, 2000);
  }
  return (
    (!props.pokemons.items) ? null :
      <>
        <ModalPokemon
          show={modalShow}
          onHide={() => setModalShow(false)}
          namepokemon={modalPokemonName}
        />
        <Container className='auto-grid'>
          {props.pokemons.items.map(pokemon => {
            return <Row className='padding-20'>
              <Button color="secondary" className="mb-2" key={pokemon.name}
                onClick={() => {
                  setPokemonName(pokemon.name)
                  setModalShow(true)
                }}>
                {pokemon.name}
              </Button>
            </Row>
          })}
        </Container>
      </>
  );
};



const mapStateToProps = (state) => {
  return { ...state };
};

export default connect(mapStateToProps)(PokemonsList);
