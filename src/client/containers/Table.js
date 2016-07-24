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

const mapStateToProps = (state) => {
  return {
    ids: Object.keys(state.pokemons.list)
  }
}

export default connect(mapStateToProps)(Table)
