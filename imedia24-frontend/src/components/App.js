import React from 'react';
import { Route, Routes } from "react-router-dom";

import { Header } from './Header';

import PokemonsList from './PokemonsList';
import Home from './Home';

const App = props => {



  return (
    <>
      <Header />
      <br/>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="/pokemons" element={<PokemonsList />}/>
        </Routes>
    </>
  );
};

export default App;
