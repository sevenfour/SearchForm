import React, { useState } from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { ErrorOutlined } from '../icons';

import styles from './SearchForm.module.css';

const SEARCH_LABEL = 'Search';
const SEARCHING_LABEL = 'Searching...';

const SearchForm = props => {

  const {
    className,
    error,
    isLoading = false,
    onSubmit = () => {}
  } = props;

  const [searchQuery, setSearchQuery] = useState('');

  function handleChange(e) {
    setSearchQuery(e?.target?.value);
  }

  return (
    <form
      className={clsx(className, styles.form)}
      onSubmit={e => {
        e.preventDefault();
        onSubmit(searchQuery);
      }}
    >
      <div
        className={styles.formWrapper}
        role="search"
      >
        <label
          className={styles.label}
          htmlFor="search"
        >
          { isLoading ? SEARCHING_LABEL : SEARCH_LABEL }
        </label>
        <input
          aria-invalid={Boolean(error)}
          autoCapitalize="off"
          autoComplete="off"
          autoCorrect="on"
          className={styles.input}
          id="search"
          onChange={handleChange}
          type="search"
          value={searchQuery}
        />
        {
          error &&
            <p
              className={styles.error}
              role="alert"
            >
              <ErrorOutlined className={styles.errorIcon} />
              {error}
            </p>
        }
        <button
          className={styles.button}
          type="submit"
        >
          Search
        </button>
      </div>
    </form>
  );
};

SearchForm.propTypes = {
  className: PropTypes.string,
  error: PropTypes.string,
  isLoading: PropTypes.bool,
  onSubmit: PropTypes.func
};

export default SearchForm;
