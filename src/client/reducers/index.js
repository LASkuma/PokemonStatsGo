import { combineReducers } from 'redux'
import * as ActionTypes from '../actions'
import pokemons from './pokemons'

function authenticated (state = false, action) {
  if (action.type === ActionTypes.STATS_LOAD_SUCCESS) {
    return true
  }
  return state
}

function pokemonInfo (state = {}, action) {
  if (action.type === ActionTypes.LOAD_POKEMON_INFO) {
    return Object.assign({}, state, action.payload)
  }
  return state
}

const rootReducer = combineReducers({
  authenticated,
  pokemonInfo,
  pokemons
})

export default rootReducer
