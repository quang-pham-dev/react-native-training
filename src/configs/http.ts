import axios from 'axios'

import Config from 'react-native-config'

const http = axios.create({
  baseURL: Config.API_BASE_URL,
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
  timeout: 10000,
})

export default http
