import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { browserHistory } from 'react-router'
import Root from './components/Root'
import configureStore from './store/configureStore'
import { loadPokemonInfo } from './actions'

const store = configureStore()
store.dispatch(loadPokemonInfo())

render(
  <Root store={store} history={browserHistory} />,
  document.getElementById('root')
)
