import * as React from 'react'
import { useParams } from 'react-router-dom'
import { Row, Col, Image, Skeleton, Typography, Space } from 'antd'

import mangaApi from '../../services'
import ComicDetailTabs from '../ComicDetailTabs'

const { Title, Text } = Typography

function ComicDetail() {
  const { endpoint } = useParams()

  const [state, setState] = React.useState({ loading: true, manga: {} })

  React.useEffect(() => {
    async function fetch() {
      try {
        const manga = await mangaApi.getDetailManga(endpoint)

        if (manga.title === '') {
          const manga = await mangaApi.getDetailManga(endpoint)

          return setState({ loading: false, manga })
        }

        return setState({ loading: false, manga })
      } catch (err) {
        return
      }
    }

    fetch()
  }, [endpoint])

  return (
    <>
      {state.loading === true ? (
        <div className='comicDetail_skeleton'>
          <Row gutter={6}>
            <Col className='gutter-row' span={16} offset={4}>
              <Skeleton avatar />
            </Col>
          </Row>
          <Row gutter={6}>
            <Col className='gutter-row' span={16} offset={4}>
              <Skeleton />
            </Col>
          </Row>
        </div>
      ) : (
        <div className='comicDetail'>
          <Row gutter={6} className='comicDetail_header'>
            <Col className='gutter-row' span={4} offset={4}>
              <Image width={200} src={`${state.manga.thumb}`} />
            </Col>
            <Col className span={8} offset={1}>
              <Title level={2}> {state.manga.title}</Title>
              <Space direction='vertical'>
                <Text className='comicDetail__genre'>
                  {state.manga.genre_list
                    ? state.manga.genre_list[0].genre_name
                    : ''}
                </Text>
                <Text className='comicDetail__author' type='secondary'>
                  Author : {state.manga.author}
                </Text>
              </Space>
            </Col>
          </Row>
          <Row gutter={6}>
            <Col className='gutter-row' span={16} offset={4}>
              <ComicDetailTabs
                endpoint={endpoint}
                synopsis={state.manga.synopsis}
                chapters={state.manga.chapter}
              />
            </Col>
          </Row>
        </div>
      )}
    </>
  )
}

export default ComicDetail
