import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import PokemonRow from './PokemonRow'

const Table = ({ ids }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Icon</th>
          <th>CP</th>
          <th>Individual Attack</th>
          <th>Individual Defense</th>
          <th>Individual Stamina</th>
          <th>Individual Sum</th>
        </tr>
      </thead>
      <tbody>
        {ids.map(id => <PokemonRow id={id} key={id} />)}
      </tbody>
    </table>
  )
}

Table.propTypes = {
  ids: PropTypes.arrayOf(PropTypes.string).isRequired
}

const sortKeysByPokemonId = (list, pokemons) => {
  const compareByPokedex = (a, b) => {
    const p1 = pokemons[a]
    const p2 = pokemons[b]
    const result = parseInt(p1.info.id) - parseInt(p2.info.id)
    if (result === 0) {
      const p1sum = p1.indAttack + p1.indDefense + p1.indStamina
      const p2sum = p2.indAttack + p2.indDefense + p2.indStamina
      return p2sum - p1sum
    } else {
      return result
    }
  }
  return list.sort(compareByPokedex)
}

const mapStateToProps = (state) => {
  return {
    ids: sortKeysByPokemonId(Object.keys(state.pokemons.list), state.pokemons.list)
  }
}

export default connect(mapStateToProps)(Table)
