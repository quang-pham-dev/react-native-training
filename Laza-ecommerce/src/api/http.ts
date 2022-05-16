import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { get } from 'utils/localStorage';

const http = axios.create({
  baseURL: 'http://localhost:3000', //Change to http://10.0.2.2 for android and http://localhost for iOS
  headers: {
    'Content-Type': 'application/json',
  },
});

http.interceptors.request.use(
  async (config: AxiosRequestConfig) => {
    const accessToken = get('access_token');
    if (accessToken) {
      const masterHeaders = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      };
      config.headers = { ...masterHeaders };
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

// Add a response interceptor
http.interceptors.response.use(
  function (response: AxiosResponse) {
    // Do something with response data
    console.log('response', response);
    return response;
  },
  function (error) {
    // Do something with response error
    return Promise.reject(error);
  },
);

export default http;
