import React, { useState } from 'react';
import log from 'loglevel';

import { getSearchResults } from '../../services/searchService';

import SearchForm from '../../components/SearchForm';

const Search = () => {

  const [searchString, setSearchString] = useState('');

  async function handleOnSubmit(query) {
    setSearchString(query);
    try {
      const searchResults = await getSearchResults(query);
    } catch (e) {
      log.error(e); // TypeError: failed to fetch
    } finally {
    }
  }

  return (
    <>
      <SearchForm
        onSubmit={handleOnSubmit}
      />
      {
        searchString && <h1>Results for: {searchString}</h1>
      }
    </>
  );
};

export default Search;
