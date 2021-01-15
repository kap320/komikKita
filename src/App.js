import * as React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Layout } from 'antd'

import Navbar from './components/Navbar'
import Home from './pages/Home'
import MangaDetail from './pages/MangaDetail'
import Chapter from './components/Chapter'
import Genre from './pages/Genre'
import Footer from './components/Footer'

import './App.css'

const { Content } = Layout

function App() {
  return (
    <Router>
      <Layout>
        <Navbar />
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
            <MangaDetail />
          </Route>
          <Route path='/:manga/chapter/:endpoint'>
            <Content
              className='site-layout'
              style={{ padding: '0 50px', marginTop: 50 }}
            >
              <Chapter />
            </Content>
          </Route>
          <Route path='/genres/:genre'>
            <Genre />
          </Route>
        </Switch>
        <Footer />
      </Layout>
    </Router>
  )
}

export default App
