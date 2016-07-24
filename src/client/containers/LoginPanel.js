import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getStats } from '../actions'

class LoginPanel extends Component {
  handleSubmit (username, password) {
    return (e) => {
      e.preventDefault()
      const { dispatch } = this.props
      dispatch(getStats(username, password))
    }
  }

  render () {
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(this.username.value, this.password.value)(e)}>
          <input type='text' placeholder='Google Account' ref={node => { this.username = node }} />
          <input type='password' placeholder='Enter your password' ref={node => { this.password = node }} />
          <input type='submit' value='Search' />
        </form>
      </div>
    )
  }
}

export default connect()(LoginPanel)
