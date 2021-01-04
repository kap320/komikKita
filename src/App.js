import * as React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Layout } from 'antd'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Latest from './components/Latest'
import ComicDetail from './components/ComicDetail'
import Footer from './components/Footer'

import './App.css'

const { Content } = Layout

function App() {
  return (
    <Router>
      <Layout>
        <Navbar />
        {/* Switch */}
        <Switch>
          <Route exact path='/'>
            <Hero />
            <Content
              className='site-layout'
              style={{ padding: '0 50px', marginTop: 45 }}
            >
              <Latest />
            </Content>
          </Route>
          <Route exact path='/about'>
            <Content
              className='site-layout'
              style={{ padding: '0 50px', marginTop: 45 }}
            >
              About
            </Content>
          </Route>
          <Route path='/:endpoint'>
            <Content
              className='site-layout'
              style={{ padding: '0 50px', marginTop: 45 }}
            >
              <ComicDetail />
            </Content>
          </Route>
        </Switch>
        <Footer />
      </Layout>
    </Router>
  )
}

export default App
