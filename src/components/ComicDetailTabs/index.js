import * as React from 'react'
import { Tabs, Typography, List } from 'antd'
import { Link } from 'react-router-dom'

import './style.css'

const { TabPane } = Tabs
const { Paragraph, Text } = Typography

const ComicDetailTabs = ({ synopsis, chapters, endpoint }) => {
  return (
    <Tabs defaultActiveKey='1' size='large'>
      <TabPane tab='Synopsis' key='1'>
        <Paragraph className='comicDetailTabs__synopsis'>{synopsis}</Paragraph>
      </TabPane>
      <TabPane tab='Chapter' key='2'>
        <List
          grid={{ gutter: 16, column: 2 }}
          dataSource={chapters}
          renderItem={(chapter) => (
            <List.Item>
              <Link to={`/${endpoint}/chapter/${chapter.chapter_endpoint}`}>
                <Text className='comicDetailTabs__chapters'>
                  {chapter.chapter_title}
                </Text>
              </Link>
            </List.Item>
          )}
        />
      </TabPane>
    </Tabs>
  )
}

export default ComicDetailTabs
