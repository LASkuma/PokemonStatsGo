import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import Row from '../components/Row'

const RankRow = ({ id, entry, imgPath, index }) => {
  let fastMove = entry.move1.split('_')
  fastMove = fastMove.slice(0, fastMove.length - 1)
  fastMove = fastMove.join(' ').toLowerCase()
  const cols = [
    index + 1,
    <img src={imgPath} />,
    entry.pokemon.toLowerCase(),
    fastMove,
    entry.move2.split('_').join(' ').toLowerCase(),
    entry.dps,
    entry.offense,
    entry.defense,
    entry.total
  ]
  return <Row cols={cols} />
}

RankRow.propTypes = {
  id: PropTypes.string.isRequired,
  entry: PropTypes.object.isRequired,
  imgPath: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired
}

const mapStateToProps = (state, ownProps) => {
  const entry = state.pokemonInfo.pokemonStats[ownProps.id]
  return {
    entry,
    imgPath: state.pokemonInfo.pokemons[entry.id].img
  }
}

export default connect(mapStateToProps)(RankRow)
