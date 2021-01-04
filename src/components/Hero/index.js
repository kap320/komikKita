import * as React from 'react'
import { Row, Col, Card, Button, Space, Typography } from 'antd'

const Hero = () => {
  const { Title, Paragraph } = Typography

  return (
    <Row className='home__hero'>
      <Space align='center'>
        <Col span={24}>
          <Card className='home__card' style={{ width: 500 }}>
            <Title level={1} className='home_card-title'>
              Card content
            </Title>
            <Paragraph className='home_card-paragraph'>
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
