import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  // Link,
  Switch
} from 'react-router-dom'

//components
import AppBarMain from './dashboard/header/Main'
import * as app from './app'

const BasicExample = () => (
  <Router>
    <div>
      <AppBarMain/>
      <Switch>
        <Route exact path="/home" component={app.Home}/>
        <Route exact path="/home/about" component={app.About}/>
        <Route path="/home/topics" component={app.Topics}/>
        <Route exact path="/login" component={app.Login}/>
      </Switch>
    </div>
  </Router>
)

export default BasicExample
