import * as React from 'react'
import { useParams, Link } from 'react-router-dom'
import { Row, Col, Image, Skeleton, Breadcrumb, List } from 'antd'

import mangaApi from '../../services'

const Chapter = () => {
  const { endpoint, manga } = useParams()

  const [state, setState] = React.useState({ loading: true, chapters: {} })

  React.useEffect(() => {
    async function fetch() {
      try {
        const chapters = await mangaApi.getMangaChapter(endpoint)

        if (chapters.chapter_pages === 0) {
          const chapters = await mangaApi.getMangaChapter(endpoint)

          return setState({ loading: false, chapters })
        }

        return setState({ loading: false, chapters })
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
            <Col className='gutter-row' span={16}>
              <Skeleton />
            </Col>
          </Row>
        </div>
      ) : (
        <>
          <Row gutter={24}>
            <Col className='gutter-row' span={16} offset={4}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>
                  <Link to='/'>Home</Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                  <Link to={`/detail/${manga}`}>{manga}</Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>{endpoint}</Breadcrumb.Item>
              </Breadcrumb>
            </Col>
          </Row>
          <Row gutter={24}>
            <Col className='gutter-row' span={16} offset={4}>
              <List
                grid={{ gutter: 16, column: 1 }}
                dataSource={state.chapters.chapter_image}
                renderItem={(chapter) => (
                  <Image width={650} src={chapter.chapter_image_link} />
                )}
              />
            </Col>
          </Row>
        </>
      )}
    </>
  )
}

export default Chapter
