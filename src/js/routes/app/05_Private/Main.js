import React from 'react'
import {
  // BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom'

//components
import login from '../../../components/01_c_login/login'

const Main = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    login.fakeAuth.isAuthenticated ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
)

export default Main
