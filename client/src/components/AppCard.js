import React from 'react'
import { Card } from 'antd'

const style = {
  borderRadius: '0px'
}

const AppCard = (props) => {
  const { title } = props
  return (
    <Card style={style} loading title={title}>
      Card
    </Card>
  )
}

export default AppCard