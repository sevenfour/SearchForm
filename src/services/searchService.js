
import { get } from './serviceUtils';
import { searchAxios } from 'utils/axios';

const SEARCH_ENGINE_ID = process.env.REACT_APP_SEARCH_ENGINE_ID;
const SEARCH_FORM_API_KEY = process.env.REACT_APP_SEARCH_FORM_API_KEY;
const API_SEARCH_ENDPOINT = process.env.REACT_APP_API_SEARCH_ENDPOINT;

/**
 * Returns search results
 */
export const constructGetSearchResults = (axios) => (query, params) => {
  return get(
    axios,
    API_SEARCH_ENDPOINT,
    {
      params: {
        key: SEARCH_FORM_API_KEY,
        cx: SEARCH_ENGINE_ID,
        q: query,
        ...params
      }
    },
    'Unable to retreive search results'
  );
};

export const getSearchResults = constructGetSearchResults(searchAxios);
