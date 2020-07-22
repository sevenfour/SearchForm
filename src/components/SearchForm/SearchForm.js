import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

const SearchForm = props => {

  const {
    className,
    onSubmit = () => {}
  } = props;

  return (
    <form
      className={clsx(className)}
      onSubmit={e => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <div role="search">
        <label htmlFor="search">
          Search MEC
        </label>
        <input
          id="search"
          type="text"
        />
        <button type="submit">
          Search
        </button>
      </div>
    </form>
  );
};

SearchForm.propTypes = {
  className: PropTypes.string,
  onSubmit: PropTypes.func
};

export default SearchForm;
