import axios from 'axios';

const MEC_API_HOSTNAME = 'www.mec.ca'

export const mecAxios = axios.create({
  baseURL: `https://${MEC_API_HOSTNAME}`
});
