import * as React from 'react'
import { Layout } from 'antd'

import ComicDetail from '../../components/ComicDetail'

const MangaDetail = () => {
  return (
    <Layout.Content
      className='site-layout'
      style={{ padding: '0 50px', marginTop: 50 }}
    >
      <ComicDetail />
    </Layout.Content>
  )
}

export default MangaDetail
