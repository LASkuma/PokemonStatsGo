import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loginAndGetStats } from '../actions'

class LoginPanel extends Component {
  handleSubmit (authCode) {
    return (e) => {
      e.preventDefault()
      const { dispatch } = this.props
      dispatch(loginAndGetStats(authCode))
    }
  }

  render () {
    return (
      <div>
        <a target='_blank' href='https://accounts.google.com/o/oauth2/auth?client_id=848232511240-73ri3t7plvk96pj4f85uj8otdat2alem.apps.googleusercontent.com&amp;redirect_uri=urn%3Aietf%3Awg%3Aoauth%3A2.0%3Aoob&amp;response_type=code&amp;scope=openid%20email%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email'>
          <img src='https://developers.google.com/identity/images/btn_google_signin_light_normal_web.png' alt='Sign in with Google' />
        </a>
        <form onSubmit={e => this.handleSubmit(this.authCode.value)(e)}>
          <label htmlFor='auth_code'>Click "Sign in with Google" and copy your token</label>
          <br />
          <input id='auth_code' type='text' placeholder='Paste your token here' ref={node => { this.authCode = node }} />
          <input type='submit' value='Search' />
        </form>
      </div>
    )
  }
}

export default connect()(LoginPanel)
