import { combineReducers } from 'redux'
import * as ActionTypes from '../actions'
import pokemons from './pokemons'

function authenticated (state = false, action) {
  if (action.type === ActionTypes.STATS_LOAD_SUCCESS) {
    return true
  }
  return state
}

const rootReducer = combineReducers({
  authenticated,
  pokemons
})

export default rootReducer
