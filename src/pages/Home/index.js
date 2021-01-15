import * as React from 'react'
import Layout from 'antd/lib/layout'

import Hero from '../../components/Hero'
import Latest from '../../components/Latest'
import Genre from '../../components/Genre'

class ErrorBoundary extends React.Component {
  state = { error: null }
  static getDerivedStateFromError(error) {
    return { error }
  }

  render() {
    const { error } = this.state
    if (error) {
      return <this.props.FallbackComponent error={error} />
    }

    return this.props.children
  }
}

function ErrorFallback({ error }) {
  return (
    <div role='alert'>
      <pre style={{ whiteSpace: 'normal' }}>{error.message}</pre>
    </div>
  )
}

const Home = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Hero />
      <Layout.Content
        className='site-layout'
        style={{ padding: '0 50px', marginTop: 50 }}
      >
        <Latest />
        <Genre />
      </Layout.Content>
    </ErrorBoundary>
  )
}

export default Home
