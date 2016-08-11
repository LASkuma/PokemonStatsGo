import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/App'
import PokemonStats from './components/PokemonStats'
import PokemonRanks from './containers/PokemonRanks'
import * as Actions from './actions'

export default function routes (dispatch, getState) {
  return (
    <Route path='/' component={App} onEnter={initialize(dispatch)}>
      <IndexRoute component={PokemonStats} />
      <Route path='ranks' component={PokemonRanks} />
    </Route>
  )
}

function initialize (dispatch) {
  return (nextState, replace) => {
    dispatch(Actions.loadPokemonInfo())
    dispatch(Actions.authenticateWithTokens())
      .then(authenticated => {
        if (authenticated) {
          dispatch(Actions.getStats())
        }
      })
  }
}
