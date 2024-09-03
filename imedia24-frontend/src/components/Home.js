import { Button } from 'reactstrap';
import { useNavigate  } from "react-router-dom";
import React from 'react';

const Home = () => {

  let navigation = useNavigate ();

  function goToListPokemon () {
    navigation("/pokemons");
  }

  return (
    <>
      <Button onClick={goToListPokemon}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Pokebola-pokeball-png-0.png" alt="" width="40" /> Pokemon Go
      </Button>
    </>
  );
};

export default Home;
