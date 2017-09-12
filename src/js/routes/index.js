import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  // Link,
  Switch
} from 'react-router-dom'

//components

import * as app from './app'

const Index = () => (
  <Router>
    <div>
      <h2>QuechuaLingo</h2>
      <Switch>
        <Route exact path="/" component={app.Home}/>
      </Switch>
    </div>
  </Router>
)

export default Index
