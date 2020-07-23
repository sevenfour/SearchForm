import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import Tile from '../Tile';

import styles from './SearchResult.module.css';

const SearchResult = props => {
  const {
    className,
    name,
    image
  } = props;

  return (
    <Tile className={clsx(styles.container, className)}>
      <figure className={styles.figure}>
        <img
          alt={name}
          className={styles.image}
          src={image}
        />
        <figcaption className={styles.figcaption}>
          {name}
        </figcaption>
      </figure>
    </Tile>
  );
};

SearchResult.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
  name: PropTypes.string
};

export default SearchResult;
