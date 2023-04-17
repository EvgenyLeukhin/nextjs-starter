import axios from 'axios';
import { API_URL } from './apiUrl';
import { USER_TOKEN_LS, USER_TOKEN_STORE } from './userToken';

const httpClient = axios.create({
  baseURL: API_URL,

  headers: {
    authorization: USER_TOKEN_STORE || USER_TOKEN_LS,
  },
});

httpClient.interceptors.request.use(
  config => {
    // Do something before request is sent
    console.log('interceptors request config', config);
    return config;
  },
  error => {
    console.log('interceptors request error', error);

    // Do something with request error
    return Promise.reject(error);
  },
);

httpClient.interceptors.response.use(
  response => {
    console.log('interceptors request config', response);
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  error => {
    console.log('interceptors response error', error);

    if (error.response.status === 401) {
      // redirect to login and clear userData
      alert('Auth error');
    }
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  },
);

export default httpClient;
