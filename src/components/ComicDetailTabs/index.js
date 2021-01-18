import * as React from 'react'
import { Tabs, Typography, List } from 'antd'
import { Link } from 'react-router-dom'

import './style.css'

const ComicDetailTabs = ({ synopsis, chapters, endpoint, genre }) => {
  return (
    <Tabs defaultActiveKey='1' size='large'>
      <Tabs.TabPane tab='Synopsis' key='1'>
        <Typography.Paragraph className='comicDetailTabs__synopsis'>
          {synopsis}
        </Typography.Paragraph>
      </Tabs.TabPane>
      <Tabs.TabPane tab='Chapter' key='2'>
        <List
          grid={{ gutter: 16, column: 2 }}
          dataSource={chapters}
          renderItem={(chapter) => (
            <List.Item>
              <Link to={`/${endpoint}/chapter/${chapter.chapter_endpoint}`}>
                <Typography.Text className='comicDetailTabs__chapters'>
                  {chapter.chapter_title}
                </Typography.Text>
              </Link>
            </List.Item>
          )}
        />
      </Tabs.TabPane>
    </Tabs>
  )
}

export default ComicDetailTabs
