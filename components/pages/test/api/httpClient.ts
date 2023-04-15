import axios from 'axios';
import { API_URL } from './apiUrl';
import { USER_TOKEN_LS, USER_TOKEN_STORE } from './userToken';

const httpClient = axios.create({
  baseURL: API_URL,

  headers: {
    authorization: USER_TOKEN_LS || USER_TOKEN_STORE,
  },
});

export default httpClient;
