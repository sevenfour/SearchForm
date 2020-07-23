import React, { useState } from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import styles from './SearchForm.module.css';

const SearchForm = props => {

  const {
    className,
    error,
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
          Search gear on MEC
          {
            error &&
              <p
                className={styles.error}
                role="alert"
              >
                {error}
              </p>
          }
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
  onSubmit: PropTypes.func
};

export default SearchForm;
