import React, { useEffect, useState } from 'react';
import log from 'loglevel';

import { useInView } from 'react-intersection-observer';

import { getSearchResults } from 'services/searchService';

import { useProgressProviderContext } from 'context/ProgressContextProvider';

import Loading from 'components/Loading';
import SearchForm from 'components/SearchForm';
import SearchResult from 'components/SearchResult';
import InViewWrapper from 'components/InViewWrapper';
import SearchResultTileSkeleton from 'components/SearchResultTileSkeleton';

import { dataMapperNameMapping } from 'utils/dataMappers';

import styles from './Search.module.css';

const SEARCH_API_NAME = process.env.REACT_APP_SEARCH_API_NAME;

const PAGE_STEP = 9;
const MAX_RESULTS = 90;

const emptySearchTermError = 'You need to enter a search term.';
const noResultsMessage = 'No results for your search have been found';
const networkError = 'Ops..., something went wrong.';

const dataMapper = dataMapperNameMapping[SEARCH_API_NAME];

const Search = () => {

  const [searchString, setSearchString] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const [totalSearchResults, setTotalSearchResults] = useState(0);

  const [resultsStep, setResultsStep] = useState(0);

  const [error, setError] = useState('');

  const { loading, setLoading } = useProgressProviderContext();

  const [lastResultRef, isLastTileInView] = useInView();

  useEffect(() => {
    if (loading) return;

    if (isLastTileInView &&
      !error &&
      searchResults.length <= MAX_RESULTS &&
      searchResults.length < totalSearchResults
    ) {
      setResultsStep(prevStep => prevStep + PAGE_STEP);
    }
  }, [
    isLastTileInView,
    loading,
    totalSearchResults,
    searchResults,
    error
  ]);

  useEffect(() => {
    setSearchResults([]);
    setResultsStep(0);
  }, [searchString]);

  const getData = async (query) => {

    try {
      setLoading(true);

      const {
        items = [],
        queries: {
          request
        } = {}
      } = await getSearchResults(
        query,
        {
          num: PAGE_STEP,
          start: resultsStep
        }
      );

      setSearchResults(prevResults => [
        ...prevResults,
        ...items
      ]);

      const [ requestObj ] = request;
      const { totalResults } = requestObj;

      setTotalSearchResults(Number(totalResults));
    } catch (e) {
      log.error(e); // failed to fetch

      setError(networkError);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    /*
     * Don't load data on the initial render as
     * that will be handled by onSubmit
    */
    resultsStep > 0 && getData(searchString);
  }, [resultsStep]);

  function handleOnSubmit(query) {
    const isEmptyQuery = Boolean(!query);

    setError(isEmptyQuery ? emptySearchTermError : null);

    if (isEmptyQuery) return;

    setSearchString(query);

    getData(query);
  }

  return (
    <div className={styles.container}>
      <SearchForm
        error={error}
        isLoading={loading}
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

          <div
            aria-labelledby={searchResults.length > 0 ? 'resultsFor' : null}
            className={styles.resultsGrid}
          >
            {
              searchResults.length > 0
                ? (
                  searchResults.map((datum, index) => {

                    const isLastResult = searchResults.length === index + 1;

                    const {
                      name,
                      mainImage
                    } = dataMapper(datum);

                    const props = {
                      mainImage,
                      name
                    };

                    const result = (
                        <SearchResult
                          className={styles.result}
                          key={index}
                          {...props}
                        />
                    );

                    return isLastResult
                      ? (
                          <div
                            className={styles.refWrapper}
                            key={index}
                            ref={lastResultRef}
                          >
                            <InViewWrapper 
                              content={result}
                              initialInView={!index}
                              placeHolder={<SearchResultTileSkeleton />}
                            />
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

      }
    </div>
  );
};

export default Search;
