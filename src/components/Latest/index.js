import * as React from 'react'
import { Row, Col, Card, Divider } from 'antd'
import { Link } from 'react-router-dom'

import mangaApi from '../../services'

const { Meta } = Card

const Latest = () => {
  const [state, setState] = React.useState({ loading: true, comics: [] })

  React.useEffect(() => {
    async function fetch() {
      try {
        const comics = await mangaApi.getLatestManga()
        const newComics = comics.slice(0, 4)
        setState({ loading: false, comics: newComics })
      } catch (err) {
        return
      }
    }

    fetch()
  }, [])

  return (
    <Row gutter={6} className='home__latest'>
      <Divider orientation='left'>Komik Terbaru</Divider>

      {state.loading === true ? (
        <Col className='gutter-row' span={6}>
          <Card hoverable loading={true} style={{ width: 240 }}></Card>
        </Col>
      ) : (
        state.comics.map((comic) => (
          <Col key={comic.title} className='gutter-row' span={6}>
            <Link to={`/${comic.endpoint}`}>
              <Card
                hoverable
                className='home__latest-card'
                cover={<img alt={comic.title} src={comic.thumb} />}
              >
                <Meta title={comic.title} description={comic.chapter} />
              </Card>
            </Link>
          </Col>
        ))
      )}
    </Row>
  )
}

export default Latest
