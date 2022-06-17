import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

// Constants
import { APP_BASE_URL } from 'constants/Common';

const http = axios.create({
  baseURL: APP_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 10000
});

export default http;
