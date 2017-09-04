import React, { Component } from 'react'

import Routes from './routes'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class App extends Component {

  render () {
    return (
      <MuiThemeProvider>
        <Routes />
      </MuiThemeProvider>
    )
  }

}
