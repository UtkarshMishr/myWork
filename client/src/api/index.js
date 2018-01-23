import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: 'http://localhost:8081/'
  })
}

/* import axios from 'axios'
import config from '../config'

export default {
  request (method, uri, data = null) {
    if (!method) {
      console.error('API function call requires method argument')
      return
    }

    if (!uri) {
      console.error('API function call requires uri argument')
      return
    }

    var url = config.serverURI + uri
    return axios({ method, url, data })
  }
}
*/
