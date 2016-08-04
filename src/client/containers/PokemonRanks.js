import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import Table from '../components/Table'
import RankRow from './RankRow'

const PokemonRanks = ({ ids }) => {
  const headers = [
    'Rank',
    'Icon',
    'name',
    'Fast Move',
    'Cinematic Move',
    'Moveset DPS',
    'Offense',
    'Defense',
    'Total'
  ]
  return <Table headers={headers} Row={RankRow} ids={ids} />
}

PokemonRanks.propTypes = {
  ids: PropTypes.arrayOf(PropTypes.string).isRequired
}

const sortKeysByTotal = (keys, entries) => {
  const compare = (key1, key2) => {
    return entries[key2].total - entries[key1].total
  }
  return keys.sort(compare)
}

const legendaries = {
  144: true,
  145: true,
  146: true,
  150: true,
  151: true
}

const filterOutLegendaries = (keys, entries) => {
  return keys.filter(key => legendaries[entries[key].id] === undefined)
}

const mapStateToProps = (state) => {
  const entries = state.pokemonInfo.pokemonStats
  const keys = filterOutLegendaries(Object.keys(entries), entries)
  return {
    ids: sortKeysByTotal(keys, entries)
  }
}

export default connect(mapStateToProps)(PokemonRanks)
