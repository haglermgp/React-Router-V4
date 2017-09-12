import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'


//Routes >> app
import Login  from '../02_Login/Main'
import Public from '../03_Public/Main'
import Inicio from '../04_Inicio/Main'
import PrivateRoute from '../05_Private/Main'

//Routes >> Dashboards
import Header from '../../dashboard/header/Main'

const Home = () => (
  <Router>
    <div>
      <Header/>
      <Route path="/public" component={Public}/>
      <Route path="/login" component={Login}/>

      <PrivateRoute path="/protected" component={Inicio}/>
    </div>
  </Router>
)


export default Home
