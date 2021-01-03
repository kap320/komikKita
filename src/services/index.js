import axios from 'axios'

const baseUrl = 'https://mangamint.kaedenoki.net/api/'

class mangaApi {
  static getLatestManga = async () => {
    try {
      const res = await axios.get(`${baseUrl}manga/page/1`)

      return res.data.manga_list
    } catch (err) {
      return err
    }
  }
}

export default mangaApi
