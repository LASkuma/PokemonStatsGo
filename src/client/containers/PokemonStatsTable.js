import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import Table from '../components/Table'
import PokemonRow from './PokemonRow'

const PokemonStatsTable = ({ ids }) => {
  const headers = ['Icon', 'Name', 'CP', 'IV Attack', 'IV Defense', 'IV Stamina', 'IV Sum']
  return <Table headers={headers} Row={PokemonRow} ids={ids} />
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

export default connect(mapStateToProps)(PokemonStatsTable)
