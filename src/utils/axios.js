import axios from 'axios';

const API_HOSTNAME = process.env.REACT_APP_API_HOSTNAME;

export const searchAxios = axios.create({
  baseURL: `https://${API_HOSTNAME}`
});
