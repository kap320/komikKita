import * as React from 'react'
import { Divider } from 'antd'

import GenreCard from '../GenreCard'

const Genre = () => {
  return (
    <>
      <Divider className='home__latest-title' orientation='left'>
        Genre
      </Divider>
      <GenreCard genre='Action' backgroundColor='#9271E9' />
      <GenreCard genre='Romance' backgroundColor='#F8537F' />
    </>
  )
}

export default Genre
