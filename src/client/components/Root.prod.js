import React, { PropTypes } from 'react'
import { Provider } from 'react-redux'
import { Router } from 'react-router'
import routes from '../routes'

const Root = ({ store, history }) => {
  const { dispatch, getState } = store
  return (
    <Provider store={store}>
      <Router history={history} routes={routes(dispatch, getState)} />
    </Provider>
  )
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}

export default Root
