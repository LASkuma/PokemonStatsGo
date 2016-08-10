import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/App'
import PokemonStats from './components/PokemonStats'
import PokemonRanks from './containers/PokemonRanks'
import { getStats } from './actions'

export default function routes (dispatch, getState) {
  return (
    <Route path='/' component={App} onEnter={autoLogin(dispatch)}>
      <IndexRoute component={PokemonStats} />
      <Route path='ranks' component={PokemonRanks} />
    </Route>
  )
}

function autoLogin (dispatch) {
  return (nextState, replace) => {
    let tokens = localStorage.getItem('tokens') // eslint-disable-line
    if (tokens) {
      tokens = JSON.parse(tokens)
      const now = new Date().getTime()
      if (tokens.expiry_date - now > 5000) {
        dispatch(getStats(tokens.id_token))
      }
    }
  }
}
