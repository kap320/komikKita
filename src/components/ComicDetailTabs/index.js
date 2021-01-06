import * as React from 'react'

import { Tabs, Typography } from 'antd'

const { TabPane } = Tabs
const { Paragraph } = Typography

const ComicDetailTabs = ({ synopsis }) => {
  return (
    <Tabs defaultActiveKey='1' size='large'>
      <TabPane tab='Synopsis' key='1'>
        <Paragraph>{synopsis}</Paragraph>
      </TabPane>
      <TabPane tab='Chapter' key='2'>
        Content of Tab Pane 2
      </TabPane>
    </Tabs>
  )
}

export default ComicDetailTabs
