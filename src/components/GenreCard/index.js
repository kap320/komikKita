import * as React from 'react'
import { Row, Card, Col } from 'antd'
import { CaretRightOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

import mangaApi from '../../services'

const { Meta } = Card

const GenreCard = ({ genre, backgroundColor }) => {
  const [state, setState] = React.useState({ loading: true, comics: [] })

  React.useEffect(() => {
    async function fetch() {
      try {
        const comic = await mangaApi.getMangaByGenre(genre.toLowerCase())
        const comics = comic.manga_list.slice(0, 3)

        setState({ loading: false, comics })
      } catch (err) {
        return
      }
    }

    fetch()
  }, [genre])

  return (
    <Row gutter={16} className='genreCard'>
      <Col className='gutter-row' span={6}>
        <Card
          title={genre}
          extra={
            <Link href='#'>
              <CaretRightOutlined className='genreCard__arrow' />
            </Link>
          }
          style={{ width: 250, backgroundColor: `${backgroundColor}` }}
          headStyle={{
            border: 'none',
            color: '#fff',
            fontWeight: 'bold',
            height: '6.8rem',
          }}
        >
          <p className='genreCard__subtitle'>Card content</p>
        </Card>
      </Col>
      {state.loading ? (
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
        </>
      ) : (
        state.comics.map((comic) => (
          <Col key={comic.title} className='gutter-row' span={6}>
            <Link to={`/detail/${comic.endpoint}`}>
              <Card
                hoverable
                className='home__genre-card'
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

export default GenreCard
