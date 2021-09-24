import {Component} from 'react'
import './index.css'

class LoginFrom extends Component {
  state = {
    username: '',
    password: '',
    errorMsg: '',
    loginError: false,
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const objectDetails = {username, password}

    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(objectDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()
    console.log(response)
    console.log(data)

    if (response.ok === true) {
      this.responseSuccess()
    } else {
      this.responseFailure(data.error_msg)
    }
  }

  responseSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  responseFailure = failure => {
    this.setState({
      loginError: true,
      errorMsg: failure,
    })
  }

  render() {
    const {loginError, errorMsg} = this.state
    return (
      <div className="login-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
          className="login-image"
        />
        <div className="form-container">
          <div className="image-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
              className="nav-image down"
            />
          </div>
          <form className="form" onSubmit={this.onSubmitForm}>
            <div className="down">
              <label className="label" htmlFor="name">
                USERNAME
              </label>
              <br />
              <input
                id="name"
                type="text"
                className="input"
                placeholder="Username"
                onChange={this.onChangeUsername}
              />
            </div>

            <div>
              <label className="label" htmlFor="password">
                PASSWORD
              </label>
              <br />
              <input
                id="password"
                type="password"
                className="input"
                placeholder="Password"
                onChange={this.onChangePassword}
              />
            </div>
            <button className="button login-btn" type="submit">
              Login
            </button>
            {loginError ? <p className="error">{errorMsg}</p> : ''}
          </form>
        </div>
      </div>
    )
  }
}

export default LoginFrom
