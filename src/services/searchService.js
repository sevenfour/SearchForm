
import { get } from './serviceUtils';
import { googleAxios } from 'utils/axios';

const SEARCH_ENGINE_ID = process.env.REACT_APP_SEARCH_ENGINE_ID;
const SEARCH_FORM_API_KEY = process.env.REACT_APP_SEARCH_FORM_API_KEY;

const GOOGLE_API_SEARCH_ENDPOINT = 'customsearch/v1';

/**
 * Returns search results
 */
export const constructGetSearchResults = (axios) => (query) => {
  return get(
    axios,
    GOOGLE_API_SEARCH_ENDPOINT,
    {
      params: {
        key: SEARCH_FORM_API_KEY,
        cx: SEARCH_ENGINE_ID,
        q: query
      }
    },
    'Unable to retreive search results'
  );
};

export const getGoogleSearchResults = constructGetSearchResults(googleAxios);
