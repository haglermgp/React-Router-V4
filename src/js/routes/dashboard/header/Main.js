import React, {Component} from 'react';
import {
  Route,
  Link,
  withRouter
} from 'react-router-dom'

//components
import login from '../../../components/01_c_login/login'

class Header extends Component {

  render() {
    return (
      <div style={{background: 'rgb(0, 139, 217)'}}>
        <ul>
          <li><Link to="/public">Geting Starter</Link></li>
          <li><Route path="/" component={AuthButton}/></li>
        </ul>
      </div>
    )
  }
}

const AuthButton = withRouter(({ history }) => (
  login.fakeAuth.isAuthenticated ? (
      <button onClick={() => {
        login.fakeAuth.signout(() => history.push('/'))
      }}>Cerrar Sesion </button>
  ) : (
    <Link to="/protected"><button>Iniciar Sesion</button></Link>
  )
))

export default Header;
// This example is taking advantage of the composability of the AppBar to render different components depending on the application state.
