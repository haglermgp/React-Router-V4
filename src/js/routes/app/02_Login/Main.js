import React from 'react'
import {
  Redirect
} from 'react-router-dom'

//components
import login from '../../../components/01_c_login/login'

class Main extends React.Component {
  state = {
    redirectToReferrer: false
  }

  login = () => {
    login.fakeAuth.authenticate(() => {
      this.setState({ redirectToReferrer: true })
    })
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    const { redirectToReferrer } = this.state

    if (redirectToReferrer) {
      return (
        <Redirect to={from}/>
      )
    }

    return (
      <div>
        <h3>Login Component</h3>
        <p>You must log in to view the page at {from.pathname}</p>
        <button onClick={this.login}>Log in</button>
      </div>
    )
  }
}

export default Main
