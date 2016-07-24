import { CALL_API } from '../middlewares/api'

export const STATS_LOAD_REQUEST = 'STATS_LOAD_REQUEST'
export const STATS_LOAD_SUCCESS = 'STATS_LOAD_SUCCESS'
export const STATS_LOAD_FAILURE = 'STATS_LOAD_FAILURE'

export function getStats (username, password) {
  return {
    [CALL_API]: {
      types: [STATS_LOAD_REQUEST, STATS_LOAD_SUCCESS, STATS_LOAD_FAILURE],
      endpoint: '/stats',
      method: 'POST',
      body: { username, password }
    }
  }
}
