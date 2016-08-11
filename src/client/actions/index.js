import pokemonInfo from '../assets/pokemonInfo.json'
import { CALL_API } from '../middlewares/api'

export const STATS_LOAD_REQUEST = 'STATS_LOAD_REQUEST'
export const STATS_LOAD_SUCCESS = 'STATS_LOAD_SUCCESS'
export const STATS_LOAD_FAILURE = 'STATS_LOAD_FAILURE'

export function getStats (accessToken) {
  return {
    [CALL_API]: {
      types: [STATS_LOAD_REQUEST, STATS_LOAD_SUCCESS, STATS_LOAD_FAILURE],
      endpoint: '/stats',
      method: 'POST',
      body: { accessToken }
    }
  }
}

export const LOAD_POKEMON_INFO = 'LOAD_POKEMON_INFO'

export function loadPokemonInfo () {
  return {
    type: LOAD_POKEMON_INFO,
    payload: pokemonInfo
  }
}

export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

export function login (authCode) {
  return {
    [CALL_API]: {
      types: [LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE],
      endpoint: 'token',
      method: 'POST',
      body: { authCode }
    }
  }
}

export function loginAndGetStats (authCode) {
  return (dispatch, getState) => {
    dispatch(login(authCode))
      .then(response => {
        const tokens = response.data
        localStorage.setItem('tokens', JSON.stringify(tokens)) // eslint-disable-line
        return tokens
      })
      .then(tokens => dispatch(getStats(tokens.id_token)))
      .catch(err => console.log(err))
  }
}

export const TRANSFER_REQUEST = 'TRANSFER_REQUEST'
export const TRANSFER_SUCCESS = 'TRANSFER_SUCCESS'
export const TRANSFER_FAILURE = 'TRANSFER_FAILURE'

export function transfer (id) {
  const accessToken = getAccessToken()
  return {
    [CALL_API]: {
      types: [TRANSFER_REQUEST, TRANSFER_SUCCESS, TRANSFER_FAILURE],
      endpoint: 'transfer',
      method: 'POST',
      body: { accessToken, id }
    }
  }
}

function getAccessToken () {
  let tokens = localStorage.getItem('tokens') // eslint-disable-line
  if (tokens) {
    tokens = JSON.parse(tokens)
    const now = new Date().getTime()
    if (tokens.expiry_date - now > 5000) {
      return tokens.id_token
    }
  }
  return undefined
}
