import * as React from 'react'
import { Link } from 'react-router-dom'
import { List, Card, Pagination, Col, Row } from 'antd'

import mangaApi from '../../services'

import './style.css'

const GenreList = ({ genre }) => {
  const [state, setState] = React.useState({
    loading: true,
    comics: [],
    page: 1,
    error: null,
  })

  React.useEffect(() => {
    async function fetch() {
      try {
        setState({
          loading: true,
          comics: [],
          page: state.page,
        })

        const comics = await mangaApi.getMangaByGenre(genre, state.page)

        setState({
          loading: false,
          comics: comics.manga_list,
          page: state.page,
        })
      } catch (error) {
        return setState({ loading: false, error })
      }
    }

    fetch()
  }, [genre, state.page])

  const onChange = (page) => {
    setState({ page })
  }

  return (
    <>
      {state.loading === true ? (
        <Row gutter={16} className='latest'>
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
        </Row>
      ) : (
        <>
          <List
            grid={{ gutter: 16, column: 4 }}
            dataSource={state.comics}
            renderItem={(comic) => (
              <List.Item className='genreList__list'>
                <Link to={`/detail/${comic.endpoint}`}>
                  <Card
                    hoverable
                    className='latest__card'
                    cover={<img alt={comic.title} src={comic.thumb} />}
                  >
                    <Card.Meta
                      title={comic.title}
                      description={comic.chapter}
                    />
                  </Card>
                </Link>
              </List.Item>
            )}
          />
          <Pagination
            defaultCurrent={state.page}
            pageSize={20}
            total={1140}
            showSizeChanger={false}
            onChange={onChange}
          />
        </>
      )}
    </>
  )
}

export default GenreList
