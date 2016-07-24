import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

const PokemonRow = ({ id, pokemon }) => {
  return (
    <tr>
      <td><img src={pokemon.info.img} /></td>
      <td>{pokemon.cp}</td>
      <td>{pokemon.indAttack}</td>
      <td>{pokemon.indDefense}</td>
      <td>{pokemon.indStamina}</td>
    </tr>
  )
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
