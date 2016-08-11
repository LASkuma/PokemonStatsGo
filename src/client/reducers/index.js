import { combineReducers } from 'redux'
import * as ActionTypes from '../actions'
import pokemons from './pokemons'

function authenticated (state = false, action) {
  switch (action.type) {
    case ActionTypes.LOGIN_SUCCESS:
    case ActionTypes.SET_ACCESS_TOKEN:
      return true

    case ActionTypes.LOGOUT:
      return false

    default:
      return state
  }
}

function pokemonInfo (state = {}, action) {
  if (action.type === ActionTypes.LOAD_POKEMON_INFO) {
    return Object.assign({}, state, action.payload)
  }
  return state
}

function accessToken (state = '', action) {
  if (action.type === ActionTypes.SET_ACCESS_TOKEN) {
    return action.payload
  } else if (action.type === ActionTypes.LOGIN_SUCCESS) {
    return action.response.id_token
  }
  return state
}

const rootReducer = combineReducers({
  authenticated,
  pokemonInfo,
  accessToken,
  pokemons
})

export default rootReducer
