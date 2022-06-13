import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

// Constants
import { APP_BASE_URL, AUTH_DATA } from 'constants/Common';

// Utils
import { get } from 'utils/localStorage';

const http = axios.create({
  baseURL: APP_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

http.interceptors.request.use(
  async (config: AxiosRequestConfig) => {
    const authData = await get(AUTH_DATA);
    const access_token = authData ? JSON.parse(authData).access_token : null;
    if (access_token) {
      const masterHeaders = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${access_token}`
      };
      config.headers = masterHeaders;
    }
    return config;
  },
  error => {
    return Promise.reject(error.message);
  }
);

// Add a response interceptor
http.interceptors.response.use(
  function (response: AxiosResponse) {
    // Do something with response data
    return response;
  }
  //   async function (error) {
  // Do something with response error
  // const originalRequest = error.config;
  // const httpStatus = error.response?.status;

  // if (!httpStatus || httpStatus === 500) {
  //   // Internal Server
  // }
  // if (httpStatus === 401 && !originalRequest._retry) {
  //   // not yet login, redirect to login
  //   // handle access token expired
  // }
  // if (httpStatus === 400) {
  //   // error when bad request
  // }

  // return Promise.reject((error.response && error.response.data) || 'Something went wrong');
  //   },
);

export default http;
