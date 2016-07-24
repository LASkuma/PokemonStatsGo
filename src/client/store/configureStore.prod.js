import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import api from '../middlewares/api'
import rootReducer from '../reducers'

export default function configureStore(preloadedState) {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunk, api)
  )
}
