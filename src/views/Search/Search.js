import React, { useEffect, useState } from 'react';
import log from 'loglevel';

import { getSearchResults } from '../../services/searchService';

import { useProgressProviderContext } from '../../context/ProgressContextProvider';

import Loading from '../../components/Loading';
import SearchForm from '../../components/SearchForm';
import SearchResult from '../../components/SearchResult';

import styles from './Search.module.css';

const emptySearchTermError = 'You need to enter a search term.';
const noResultsMessage = 'No results for your search have been found';
const networkError = 'Ops..., something went wrong. Please try again';

const searchResultsDataMapper = result => {

  const {
    full_name = '',
    default_image_urls: {
      main_image_url = '',
      small_image_url = ''
    } = {}
  } = result;

  return {
    name: full_name,
    mainImage: main_image_url,
    smallImage: small_image_url
  };
};

const Search = () => {

  const [searchString, setSearchString] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const [error, setError] = useState('');

  const { loading, setLoading } = useProgressProviderContext();

  useEffect(() => {
    setSearchResults([]);
  }, [searchString]);

  async function handleOnSubmit(query) {
    const isEmptyQuery = Boolean(!query);

    setError(isEmptyQuery ? emptySearchTermError : null);

    if (isEmptyQuery) return;

    setLoading(true);
    setSearchString(query);
    try {
      const { products = [] } = await getSearchResults(query);
      setSearchResults(products.map(searchResultsDataMapper));
    } catch (e) {
      log.error(e); // failed to fetch
      setError(networkError);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className={styles.container}>
      <SearchForm
        error={error}
        onSubmit={handleOnSubmit}
      />
      {
        searchString &&
          <h1
            className={styles.title}
            id="resultsFor"
          >
            Results for: {searchString}
          </h1>
      }
      {loading && <Loading className={styles.loader} />}
      {
        !error && (
          <div
            aria-labelledby={searchResults.length > 0 ? 'resultsFor' : null}
            className={styles.resultsGrid}
          >
            {
              searchResults.length > 0
                ? (
                  searchResults.map(({name, mainImage}, index) =>
                    <SearchResult
                      className={styles.result}
                      image={mainImage}
                      key={index}
                      name={name}
                    />
                  )
                )
                : <div className={styles.noResultsMsg}>
                    {searchString && !loading && noResultsMessage}
                  </div>

            }
          </div>    
        )
      }
    </div>
  );
};

export default Search;
