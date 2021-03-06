import React, { PropTypes } from 'react'
import { Provider } from 'react-redux'
import { Router } from 'react-router'
import DevTools from '../containers/DevTools'
import routes from '../routes'

const Root = ({ store, history }) => {
  const { dispatch, getState } = store
  return (
    <Provider store={store}>
      <div>
        <Router history={history} routes={routes(dispatch, getState)} />
        <DevTools />
      </div>
    </Provider>
  )
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}

export default Root
