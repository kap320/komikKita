import * as React from 'react'
import { Layout } from 'antd'

import Hero from '../../components/Hero'
import Latest from '../../components/Latest'
import Genre from '../../components/Genre'

const Home = () => {
  return (
    <>
      <Hero />
      <Layout.Content
        className='site-layout'
        style={{ padding: '0 50px', marginTop: 50 }}
      >
        <Latest />
        <Genre />
      </Layout.Content>
    </>
  )
}

export default Home
