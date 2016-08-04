import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/App'
import PokemonStats from './components/PokemonStats'

export default (
  <Route path='/' component={App}>
    <IndexRoute component={PokemonStats} />
  </Route>
)
