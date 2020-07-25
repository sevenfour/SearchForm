import React, { useRef, useCallback, useEffect, useState } from 'react';
import log from 'loglevel';

import { getSearchResults } from 'services/searchService';

import { useProgressProviderContext } from 'context/ProgressContextProvider';

import Loading from 'components/Loading';
import SearchForm from 'components/SearchForm';
import SearchResult from 'components/SearchResult';

import styles from './Search.module.css';

const PAGE_STEP = 9;

const emptySearchTermError = 'You need to enter a search term.';
const noResultsMessage = 'No results for your search have been found';
const networkError = 'Ops..., something went wrong.';

const getIntersectionObserver = (callback) =>
  new IntersectionObserver(callback);

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

  const [resultsToDisplay, setResultsToDisplay] = useState([]);

  const [resultsStep, setResultsStep] = useState(PAGE_STEP);
  const [hasMore, setHasMore] = useState(false);

  const [error, setError] = useState('');

  const { loading, setLoading } = useProgressProviderContext();

  // Need to use Ref to persist between re-renders
  const observer = useRef();

  const lastResultRef = useCallback(node => {
    if (loading) return;

    // Disconnect the previous node observer if that's a case
    observer.current && observer.current.disconnect();

    // Connect a new observer to the new last element
    observer.current = getIntersectionObserver(entries =>
      entries[0].isIntersecting &&
      hasMore &&
      setResultsStep(prevStep => prevStep + PAGE_STEP)
    );

    // Observe the last element
    node && observer.current.observe(node);
  }, [loading, hasMore]);

  useEffect(() => {
    setSearchResults([]);
    setResultsToDisplay([]);
    setResultsStep(PAGE_STEP);
  }, [searchString]);

  useEffect(() => {
    const isMore =
      searchResults.slice(resultsStep, resultsStep + PAGE_STEP).length > 0;

    setHasMore(isMore);

    setResultsToDisplay(prev =>
      [
        ...prev,
        ...searchResults.slice(resultsStep - PAGE_STEP, resultsStep)
      ]
    );
  }, [searchResults, resultsStep]);

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
        !error && searchString &&
          <h1
            className={styles.title}
            id="resultsFor"
          >
            Results for: {searchString}
          </h1>
      }
      {loading && <Loading className={styles.loader} />}
      {
        !error && !loading && (
          <div
            aria-labelledby={searchResults.length > 0 ? 'resultsFor' : null}
            className={styles.resultsGrid}
          >
            {
              resultsToDisplay.length > 0
                ? (
                  resultsToDisplay
                    .map(({name, smallImage, mainImage}, index) => {

                      const isLastResult =
                        resultsToDisplay.length === index + 1;

                      const result = (
                        <SearchResult
                          className={styles.result}
                          key={index}
                          mainImage={mainImage}
                          name={name}
                          smallImage={smallImage}
                        />
                      );

                      return isLastResult
                        ? (
                          <div
                            className={styles.refWrapper}
                            key={index}
                            ref={lastResultRef}
                          >
                            {result}
                          </div>
                        )
                        : result;
                    })
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
