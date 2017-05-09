import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

class App extends Component {
  render () {
    return (
      <MuiThemeProvider>
        <Navbar />
      </MuiThemeProvider>
    )
  }
}

export default App
