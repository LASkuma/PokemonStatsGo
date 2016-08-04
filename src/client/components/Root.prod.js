import React, { PropTypes } from 'react'
import { Provider } from 'react-redux'
import LoginPanel from './LoginPanel'
import Table from './Table'

const Root = ({ store }) => {
  return (
    <Provider store={store}>
      <div>
        <LoginPanel />
        <Table />
      </div>
    </Provider>
  )
}

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root
