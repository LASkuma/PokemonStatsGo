import React, { PropTypes } from 'react'
import { Provider } from 'react-redux'
import DevTools from './DevTools'
import LoginPanel from './LoginPanel'
import Table from './Table'

const Root = ({ store }) => {
  return (
    <Provider store={store}>
      <div>
        <LoginPanel />
        <Table />
        <DevTools />
      </div>
    </Provider>
  )
}

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root
