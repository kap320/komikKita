import * as React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Layout } from 'antd'

import Navbar from './components/Navbar'
import Home from './pages/Home'
import ComicDetail from './components/ComicDetail'
import Chapter from './components/Chapter'
import Footer from './components/Footer'

import 'react-alice-carousel/lib/alice-carousel.css'
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
            <Home />
          </Route>
          <Route exact path='/about'>
            <Content
              className='site-layout'
              style={{ padding: '0 50px', marginTop: 50 }}
            >
              About
            </Content>
          </Route>
          <Route path='/detail/:endpoint'>
            <Content
              className='site-layout'
              style={{ padding: '0 50px', marginTop: 50 }}
            >
              <ComicDetail />
            </Content>
          </Route>
          <Route path='/:manga/chapter/:endpoint'>
            <Content
              className='site-layout'
              style={{ padding: '0 50px', marginTop: 50 }}
            >
              <Chapter />
            </Content>
          </Route>
        </Switch>
        <Footer />
      </Layout>
    </Router>
  )
}

export default App
