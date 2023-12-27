import axios from 'axios'

const baseUrl = 'https://weeb-scraper.onrender.com/api'

class mangaApi {
  static getLatestManga = async () => {
    try {
      const res = await axios.get(`${baseUrl}/manga/page/1`)

      return res.data.manga_list
    } catch (err) {
      return err
    }
  }

  static getDetailManga = async (endpoint) => {
    try {
      const res = await axios.get(`${baseUrl}/manga/detail/${endpoint} `)

      return res.data
    } catch (err) {
      return err
    }
  }

  static getMangaByGenre = async (genre, page = 1) => {
    try {
      const res = await axios.get(`${baseUrl}/genres/${genre}/${page}`)

      return res.data
    } catch (err) {
      return err
    }
  }

  static getMangaChapter = async (endpoint) => {
    try {
      const res = await axios.get(`${baseUrl}/chapter/${endpoint}`)

      return res.data
    } catch (err) {
      return err
    }
  }
}

export default mangaApi
