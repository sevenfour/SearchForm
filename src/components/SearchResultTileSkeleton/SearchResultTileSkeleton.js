import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import styles from './SearchResultTileSkeleton.module.css';

const SearchResultTileSkeleton = props => {

  const { className } = props;

  return (
    <div
      aria-label="Search result Tile Skeleton"
      className={clsx(styles.container, className)}
      role="img"
    >
      <div
        className={clsx(styles.aspectRatioBox, styles.imageBox)}
        style={{'--aspect-ratio': '16/9'}}
      />
      <div className={styles.dataBox} />
    </div>
  );
};

SearchResultTileSkeleton.propTypes = {
  className: PropTypes.string
};

export default SearchResultTileSkeleton;
