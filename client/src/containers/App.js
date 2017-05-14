import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Layout, Row } from 'antd'
import * as actionCreators from '../actions/index'
import AppHeader from '../components/app_header'
import AppCard from '../components/app_card'

// const { Content, Footer } = Layout
const style = {
  backgroundColor: '#f4f4f4'
}

const cards = [
  { title: 'Re：从零开始的异世界生活' },
  { title: '在下坂本，有何贵干？' },
  { title: '小林家的龙女仆' },
  { title: '埃罗芒阿老师' },
  { title: '夏目友人帐' },
  { title: '双星之阴阳师' }
]

class App extends Component {
  render() {
    const { actions } = this.props
    return (
      <div style={style}>
        <Layout>
          <AppHeader />
          <Row style={{ marginTop: 60 }}>
            {cards.map(card => <AppCard
              collectAnime={actions.collectAnime}
              key={card.title} {...card} />)}
          </Row>
        </Layout>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    animes: state.animes
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actionCreators, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
