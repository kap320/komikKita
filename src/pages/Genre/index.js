import * as React from 'react'
import Layout from 'antd/lib/layout'
import { useParams } from 'react-router-dom'

import GenreList from '../../components/GenreList'

const Genre = () => {
  const { genre } = useParams()

  return (
    <Layout.Content
      className='site-layout'
      style={{ padding: '0 6rem', marginTop: 50 }}
    >
      <GenreList genre={genre} />
    </Layout.Content>
  )
}

export default Genre
