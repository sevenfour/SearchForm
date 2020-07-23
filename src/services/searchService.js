import { mecAxios as axios } from '../utils/axios';

import { get } from './serviceUtils';

const MEC_API_SEARCH_ENDPOINT = 'api/v1/products/search';

/**
 * Returns search results
 */
export const getSearchResults = (query) => {
  return get(
    axios,
    MEC_API_SEARCH_ENDPOINT,
    {
      params: {
        keywords: query
      }
    },
    'Unable to retreive search results'
  );
};
