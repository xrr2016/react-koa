import React, { Component } from 'react'
import { Layout, Menu } from 'antd'
const { Header } = Layout

const headerStyle = {
  position: 'fixed',
  left: 0,
  top: 0,
  width: '100%',
  height: 60,
  backgroundColor: '#fff',
  boxShadow: '0px 1px 1px 0px rgba(0,0,102,0.1)'
}
const menuStyle = {
  height: 60,
  border: 'none'
}
const menuItemStyle = {
  height: 60,
  lineHeight: '60px',
  fontSize: 16,
  color: '#333'
}

class AppHeader extends Component {
  render () {
    return (
      <Header style={headerStyle}>
        <div className='logo' />
        <Menu
          style={menuStyle}  
          theme="white"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          >
          <Menu.Item style={menuItemStyle} key="1">全部</Menu.Item>
          <Menu.Item style={menuItemStyle} key="2">推荐</Menu.Item>
          <Menu.Item style={menuItemStyle} key="3">收藏</Menu.Item>
        </Menu>
      </Header>
    )
  }
}

export default AppHeader
