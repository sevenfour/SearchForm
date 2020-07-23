import React, { useState } from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

const SearchForm = props => {

  const {
    className,
    onSubmit = () => {}
  } = props;

  const [searchQuery, setSearchQuery] = useState('');

  function handleChange(e) {
    setSearchQuery(e?.target?.value);
  };

  return (
    <form
      className={clsx(className)}
      onSubmit={e => {
        e.preventDefault();
        onSubmit(searchQuery);
      }}
    >
      <div role="search">
        <label htmlFor="search">
          Search gear on MEC
        </label>
        <input
          id="search"
          type="text"
          value={searchQuery}
          onChange={handleChange}
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
