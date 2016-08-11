import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import Row from '../components/Row'
import TransferButton from './TransferButton'

const PokemonRow = ({ id, pokemon }) => {
  const sum = pokemon.indAttack + pokemon.indDefense + pokemon.indStamina
  const cols = [
    <img src={pokemon.info.img} />,
    pokemon.info.name,
    pokemon.cp,
    pokemon.indAttack,
    pokemon.indDefense,
    pokemon.indStamina,
    sum,
    <TransferButton id={id} />
  ]
  return <Row cols={cols} />
}

PokemonRow.propTypes = {
  id: PropTypes.string.isRequired,
  pokemon: PropTypes.object.isRequired
}

const mapStateToProps = (state, ownProps) => {
  return {
    pokemon: state.pokemons.list[ownProps.id]
  }
}

export default connect(mapStateToProps)(PokemonRow)
