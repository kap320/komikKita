import * as React from 'react'
import { useParams } from 'react-router-dom'
import { Row, Col, Image, Skeleton, Typography, List } from 'antd'

import mangaApi from '../../services'

const Chapter = () => {
  const { endpoint } = useParams()

  const [state, setState] = React.useState({ loading: true, chapters: {} })

  React.useEffect(() => {
    async function fetch() {
      try {
        const chapters = await mangaApi.getMangaChapter(endpoint)

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
            <Col className='gutter-row' span={16} offset={4}>
              <Skeleton />
            </Col>
          </Row>
        </div>
      ) : (
        <Row gutter={24}>
          <Col className='gutter-row' span={16} offset={5}>
            <List
              grid={{ gutter: 16, column: 1 }}
              dataSource={state.chapters.chapter_image}
              renderItem={(chapter) => (
                <Image width={650} src={chapter.chapter_image_link} />
              )}
            />
          </Col>
        </Row>
      )}
    </>
  )
}

export default Chapter
