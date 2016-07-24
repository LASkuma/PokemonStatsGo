import React, { PropTypes } from 'react'
import { Provider } from 'react-redux'
import DevTools from './DevTools'

const Root = ({ store }) => {
  return (
    <Provider store={store}>
      <div>
        <h1>hello</h1>
        <DevTools />
      </div>
    </Provider>
  )
}

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root
