import * as React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Layout } from 'antd'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Latest from './components/Latest'
import Genre from './components/Genre'
import ComicDetail from './components/ComicDetail'
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
            <Hero />
            <Content
              className='site-layout'
              style={{ padding: '0 50px', marginTop: 50 }}
            >
              <Latest />
              <Genre />
            </Content>
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
        </Switch>
        <Footer />
      </Layout>
    </Router>
  )
}

export default App
