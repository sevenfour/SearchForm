import axios from 'axios';

const GOOGLE_API_HOSTNAME = 'www.googleapis.com';

export const googleAxios = axios.create({
  baseURL: `https://${GOOGLE_API_HOSTNAME}`
});
