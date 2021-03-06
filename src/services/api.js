import axios from 'axios';
import md5 from 'md5';

import {API_PUBLIC_KEY, API_PRIVATE_KEY} from 'react-native-dotenv';

const api = axios.create({
  baseURL: 'https://gateway.marvel.com/v1/public/',
  headers: {
    Accept: 'application/json',
  },
});

api.interceptors.request.use((config) => {
  const ts = Date.now();
  const hash = md5(`${ts}${API_PRIVATE_KEY}${API_PUBLIC_KEY}`);

  config.params = {
    ts,
    apikey: API_PUBLIC_KEY,
    hash,
  };

  return config;
});

export default api;
