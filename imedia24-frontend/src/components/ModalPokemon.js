import React, { useEffect } from 'react'
import { Modal, Button, Container, Row, Badge, Col } from 'react-bootstrap';
import { connect, useDispatch } from 'react-redux';
import { Media } from 'reactstrap';

import { getPokemonByIdRequest } from '../actions/pokemons';

const ModalPokemon = (props) => {
  console.log(props)
  const dispatch = useDispatch();

  let namePokemon = props.namepokemon
  
  useEffect(() => {
    dispatch(getPokemonByIdRequest(namePokemon));
  }, [dispatch, namePokemon]);

  let pokemon = props.pokemons.pokemon
  return (
    (!pokemon.sprites) ? null :
    <Modal
      onHide={props.onHide}
      show={props.show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {namePokemon}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row className="justify-content-md-center">
            <Media src={pokemon.sprites.other.dream_world.front_default} className='picture'/>
          </Row>
          <hr></hr>
          <Row>
            <div className="span6"></div>
          </Row>
          <Row>
            <h4 className="text-center">Abilities</h4>
          </Row>
          <Row className="justify-content-md-center">
            {pokemon.abilities.map(ability => {
              return <Col xs lg="2" key={ability.ability.name}><Badge pill bg="secondary">{ability.ability.name}</Badge></Col>
            })}
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

const mapStateToProps = (state) => {
  return { ...state };
};

export default connect(mapStateToProps)(ModalPokemon);