import * as React from 'react'
import { Layout, Menu } from 'antd'

import Latest from './components/Latest'
import './App.css'

function App() {
  const { Content, Header, Footer } = Layout

  return (
    <Layout>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <div className='logo' />
        <Menu theme='dark' mode='horizontal'>
          <Menu.Item key='1'>nav 1</Menu.Item>
          <Menu.Item key='2'>nav 2</Menu.Item>
          <Menu.Item key='3'>nav 3</Menu.Item>
        </Menu>
      </Header>
      <Content
        className='site-layout'
        style={{ padding: '0 50px', marginTop: 64 }}
      >
        <Latest />
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        baca Komik ©2018 Created by Ant UED
      </Footer>
    </Layout>
  )
}

export default App
