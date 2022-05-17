import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthData } from 'constants/Common';

const http = axios.create({
  //Change to http://10.0.2.2 for android and http://localhost for iOS
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
  },
});

http.interceptors.request.use(
  async (config: AxiosRequestConfig) => {
    const authData = await AsyncStorage.getItem(AuthData);
    const access_token = authData ? JSON.parse(authData).access_token : null;
    if (access_token) {
      const masterHeaders = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${access_token}`,
      };
      config.headers = masterHeaders;
    }
    return config;
  },
  error => {
    return Promise.reject(error.message);
  },
);

// Add a response interceptor
http.interceptors.response.use(
  function (response: AxiosResponse) {
    // Do something with response data
    return response;
  },
  function (error) {
    // Do something with response error
    // signOut();
    return Promise.reject(error);
  },
);

export default http;
