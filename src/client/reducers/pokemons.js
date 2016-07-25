import { combineReducers } from 'redux'
import * as ActionTypes from '../actions'

function list (state = {}, action) {
  if (action.type === ActionTypes.STATS_LOAD_SUCCESS) {
    return Object.assign({}, action.response)
  }

  return state
}

function isFetching (state = false, action) {
  switch (action.type) {
    case ActionTypes.STATS_LOAD_REQUEST:
      return true

    case ActionTypes.STATS_LOAD_SUCCESS:
    case ActionTypes.STATS_LOAD_FAILURE:
      return false

    default:
      return state
  }
}

const pokemons = combineReducers({
  list,
  isFetching
})

export default pokemons
