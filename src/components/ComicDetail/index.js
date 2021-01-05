import * as React from 'react'
import { useParams } from 'react-router-dom'
import { Row, Col, Image, Skeleton } from 'antd'

import mangaApi from '../../services'

function ComicDetail() {
  const { endpoint } = useParams()

  const [state, setState] = React.useState({ loading: true, manga: {} })

  React.useEffect(() => {
    async function fetch() {
      try {
        const manga = await mangaApi.getDetailManga(endpoint)

        return setState({ loading: false, manga })
      } catch (err) {
        return
      }
    }

    fetch()
  }, [endpoint])

  return (
    <Row gutter={6} className='comicDetail'>
      {state.loading === true ? (
        <Skeleton />
      ) : (
        <>
          <Col className='gutter-row' span={8}>
            <Image width={300} src={`${state.manga.thumb}`} />
          </Col>
          <Col className span={8} offset={8}>
            <p>Nama : {state.manga.title}</p>
            <p>Type : {state.manga.type}</p>
          </Col>
        </>
      )}
    </Row>
  )
}

export default ComicDetail
