import axios from 'axios'

export const CALL_API = Symbol('Call API')

const callApi = ({ endpoint, method, body }) => {
  if (method === 'GET') {
    return axios.get(endpoint)
      .then((response) => {
        return response
      }, (err) => {
        throw err
      })
  } else {
    return axios.post(endpoint, body)
      .then((response) => {
        return response
      }, (err) => {
        throw err
      })
  }
}

export default (store) => (next) => (action) => {
  const callAPI = action[CALL_API]
  if (typeof callAPI === 'undefined') {
    return next(action)
  }

  const { types, endpoint, method, body, auth } = callAPI

  if (typeof endpoint !== 'string') {
    throw new Error('Specify a string endpoint URL.')
  }
  if (!Array.isArray(types) || types.length !== 3) {
    throw new Error('Expected an array of three action types.')
  }
  if (!types.every(type => typeof type === 'string')) {
    throw new Error('Expected action types to be strings.')
  }

  const actionWith = (data) => {
    const finalAction = Object.assign({}, action, data)
    delete finalAction[CALL_API]
    return finalAction
  }

  const [ requestType, successType, failureType ] = types
  next(actionWith({ type: requestType }))

  let request = {
    endpoint,
    method: 'GET'
  }
  if (typeof method !== 'undefined') {
    if (method === 'POST') {
      request.method = 'POST'
      request.body = body || {}
      if (auth) {
        const accessToken = store.getState().accessToken
        if (accessToken) {
          request.body.accessToken = accessToken
        } else {
          throw new Error('Require Login')
        }
      }
    } else {
      throw new Error('Unsupported method')
    }
  }

  return callApi(request)
    .then(response => {
      next(actionWith({
        response: response.data,
        type: successType
      }))
      return response
    })
    .catch(error => {
      next(actionWith({
        type: failureType,
        error: error.data || 'Something bad happened'
      }))
      throw error
    })
}
