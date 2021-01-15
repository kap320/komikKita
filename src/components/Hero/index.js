import * as React from 'react'
import { Row, Col, Card, Button, Space, Typography } from 'antd'

import './style.css'

const Hero = () => {
  const { Title, Paragraph } = Typography

  return (
    <Row className='hero'>
      <Space align='center'>
        <Col span={24}>
          <Card className='hero__card' style={{ width: 500 }}>
            <Title level={1} className='hero__card-title'>
              Card content
            </Title>
            <Paragraph className='hero__card-paragraph'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              bibendum quam non nisi lobortis, a gravida purus faucibus. Nullam
              accumsan ligula sagittis tincidunt posuere. Nulla.
            </Paragraph>
            <Button size='large'>Default Button</Button>
          </Card>
        </Col>
      </Space>
    </Row>
  )
}

export default Hero
