import * as React from 'react'
import { Row, Col, Image, Skeleton, Typography, Space } from 'antd'
import { useParams } from 'react-router-dom'

import mangaApi from '../../services'

import ComicDetailTabs from '../ComicDetailTabs'

import './style.css'

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
        <div className='comicDetail__skeleton'>
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
          <Row gutter={7} className='comicDetail__header'>
            <Col className='gutter-row' span={4} offset={4}>
              <Image width={200} src={state.manga.thumb} />
            </Col>
            <Col className span={8} offset={1}>
              <Typography.Title level={2}>
                {' '}
                {state.manga.title}
              </Typography.Title>
              <Space direction='vertical'>
                <Typography.Text className='comicDetail__genre'>
                  {state.manga.genre_list
                    ? state.manga.genre_list.map(
                        (genre) => `${genre.genre_name}    `
                      )
                    : ''}
                </Typography.Text>
                <Typography.Text
                  className='comicDetail__author'
                  type='secondary'
                >
                  Author : {state.manga.author}
                </Typography.Text>
              </Space>
            </Col>
          </Row>
          <Row gutter={6}>
            <Col className='gutter-row' span={15} offset={4}>
              <ComicDetailTabs
                endpoint={endpoint}
                synopsis={state.manga.synopsis}
                chapters={state.manga.chapter}
                genre={state.manga.genre_list}
              />
            </Col>
          </Row>
        </div>
      )}
    </>
  )
}

export default ComicDetail
