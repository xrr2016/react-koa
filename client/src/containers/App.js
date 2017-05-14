import React, { Component } from 'react'
import { Layout } from 'antd'
import AppHeader from '../components/AppHeader'
import AppCard from '../components/AppCard'

const style = {
  backgroundColor: '#f4f4f4'
}

const cards = [
  {title: 'Re：从零开始的异世界生活'},
  {title: '在下坂本，有何贵干？'},
  {title: '小林家的龙女仆'},
  {title: '埃罗芒阿老师'},
  {title: '夏目友人帐'},
  {title: '双星之阴阳师'}
]

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
          // {cards.map(card => <AppCard key={card.title} {...card} />)}

export default App
