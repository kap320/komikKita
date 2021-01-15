import * as React from 'react'
import { Row, Col, Card, Divider, Alert } from 'antd'
import { Link } from 'react-router-dom'
import AliceCarousel from 'react-alice-carousel'

import 'react-alice-carousel/lib/alice-carousel.css'

import mangaApi from '../../services'

import './style.css'

const { Meta } = Card

const Latest = () => {
  const [state, setState] = React.useState({
    loading: true,
    comics: [],
    error: null,
  })

  React.useEffect(() => {
    async function fetch() {
      try {
        const comics = await mangaApi.getLatestManga()

        setState({ loading: false, comics })
      } catch (error) {
        return setState({ loading: false, error })
      }
    }

    fetch()
  }, [])

  const items = state.comics
    ? state.comics.map((comic) => [
        <Col key={comic.title} className='gutter-row' span={6}>
          <Link to={`/detail/${comic.endpoint}`}>
            <Card
              hoverable
              className='latest__card'
              cover={<img alt={comic.title} src={comic.thumb} />}
            >
              <Meta title={comic.title} description={comic.chapter} />
            </Card>
          </Link>
        </Col>,
      ])
    : []

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 4 },
  }

  return (
    <Row gutter={16} className='latest'>
      <Divider className='latest__title' orientation='left'>
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
      ) : state.error ? (
        <Col className='gutter-row' span={6}>
          <Alert
            message='Error'
            description='Error please check your internet'
            type='error'
            showIcon
          />
        </Col>
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
