import React, { Component } from 'react'
import AppHeader from '../components/AppHeader'
import { Layout } from 'antd'

class App extends Component {
  render () {
    return (
      <div>
        <Layout>
          <AppHeader />
        </Layout>
      </div>
    )
  }
}

export default App
