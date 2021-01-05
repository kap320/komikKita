import * as React from 'react'
import { Row, Col, Card, Divider } from 'antd'
import { Link } from 'react-router-dom'
import AliceCarousel from 'react-alice-carousel'

import mangaApi from '../../services'

const { Meta } = Card

const Latest = () => {
  const [state, setState] = React.useState({ loading: true, comics: [] })

  React.useEffect(() => {
    async function fetch() {
      try {
        const comics = await mangaApi.getLatestManga()
        setState({ loading: false, comics })
      } catch (err) {
        return
      }
    }

    fetch()
  }, [])

  const items = state.comics.map((comic) => [
    <Col key={comic.title} className='gutter-row' span={6}>
      <Link to={`/detail/${comic.endpoint}`}>
        <Card
          hoverable
          className='home__latest-card'
          cover={<img alt={comic.title} src={comic.thumb} />}
        >
          <Meta title={comic.title} description={comic.chapter} />
        </Card>
      </Link>
    </Col>,
  ])

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 4 },
  }

  return (
    <Row gutter={16} className='home__latest'>
      <Divider className='home__latest-title' orientation='left'>
        Komik Terbaru
      </Divider>

      {state.loading === true ? (
        <>
          <Col className='gutter-row' span={6}>
            <Card hoverable loading={true} style={{ width: 240 }}></Card>
          </Col>
          <Col className='gutter-row' span={6}>
            <Card hoverable loading={true} style={{ width: 240 }}></Card>
          </Col>
          <Col className='gutter-row' span={6}>
            <Card hoverable loading={true} style={{ width: 240 }}></Card>
          </Col>
          <Col className='gutter-row' span={6}>
            <Card hoverable loading={true} style={{ width: 240 }}></Card>
          </Col>
        </>
      ) : (
        <AliceCarousel
          disableButtonsControls
          mouseTracking
          responsive={responsive}
          infinite
          items={items}
        />
      )}
    </Row>
  )
}

export default Latest
