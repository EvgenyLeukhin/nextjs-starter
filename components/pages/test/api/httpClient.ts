import { API_URL } from './apiUrl';
import axios from 'axios';
import { testStore } from '../store-redux-classic';

const httpClient = axios.create({
  baseURL: API_URL,

  headers: {
    // inject userToken --> get token value from store
    Authorization: testStore.getState().app.userData.token,
  },
});

export default httpClient;
