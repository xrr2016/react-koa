import React, { Component } from 'react'
import AppHeader from '../components/AppHeader'
import { Layout } from 'antd'

const style = {
  backgroundColor: '#f4f4f4'
}

class App extends Component {
  render () {
    return (
      <div style={style}>
        <Layout>
          <AppHeader />
        </Layout>
      </div>
    )
  }
}

export default App
