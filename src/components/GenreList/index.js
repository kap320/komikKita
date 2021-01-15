import * as React from 'react'
import { Link } from 'react-router-dom'
import { List, Card, Pagination } from 'antd'

import mangaApi from '../../services'

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
      <List
        grid={{ gutter: 16, column: 4 }}
        dataSource={state.comics}
        renderItem={(comic) => (
          <List.Item>
            <Link to='#'>
              <Card
                hoverable
                className='latest__card'
                cover={<img alt={comic.title} src={comic.thumb} />}
              >
                <Card.Meta title={comic.title} description={comic.chapter} />
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
  )
}

export default GenreList
