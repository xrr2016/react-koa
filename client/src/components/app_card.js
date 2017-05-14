import React from 'react'
import { Col, Card } from 'antd'

const AppCard = (props) => {
  const { title, collectAnime } = props
  return (
    <Col span={6} onClick={collectAnime}>
      <Card title={title}>
        <p>Card content</p>
      </Card>
    </Col>
  )
}
// <Card style={style} loading title={title}>
//   {title}
// </Card>

export default AppCard