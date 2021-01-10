import * as React from 'react'
import { Tabs, Typography, List } from 'antd'
import { Link } from 'react-router-dom'

const { TabPane } = Tabs
const { Paragraph, Text } = Typography

const ComicDetailTabs = ({ synopsis, chapters }) => {
  return (
    <Tabs defaultActiveKey='1' size='large'>
      <TabPane tab='Synopsis' key='1'>
        <Paragraph>{synopsis}</Paragraph>
      </TabPane>
      <TabPane tab='Chapter' key='2'>
        <List
          grid={{ gutter: 16, column: 2 }}
          dataSource={chapters}
          renderItem={(chapter) => (
            <List.Item>
              <Link to={`/chapter/${chapter.chapter_endpoint}`}>
                <Text className='comicDetail__chapters'>
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
