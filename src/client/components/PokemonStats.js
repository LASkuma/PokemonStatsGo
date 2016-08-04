import React from 'react'
import { Link } from 'react-router'
import LoginPanel from '../containers/LoginPanel'
import PokemonStatsTable from '../containers/PokemonStatsTable'

const PokemonStats = () => {
  return (
    <div>
      <LoginPanel />
      <Link to={'/ranks'}>Check current theoretical ranks</Link>
      <PokemonStatsTable />
    </div>
  )
}

export default PokemonStats
