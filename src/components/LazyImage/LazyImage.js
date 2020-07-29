import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Landscape } from '../icons';

import styles from './LazyImage.module.css';

const placeholderSrc = (width, height) =>
  `data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}"%3E%3C/svg%3E`;

// NOTE: the overal image lazy loading can be significantly imporved further

const LazyImage = props => {

  const {
    alt,
    mainUrl,
    width,
    height,
    ...rest
  } = props;

  const [isError, setIsError] = useState(false);
  const [imageSrc, setImageSrc] = useState(placeholderSrc(width, height));

  function handleLoad() {
    setImageSrc(mainUrl);
  }

  function handleError() {
    setIsError(true);
  }  

  return mainUrl && !isError
    ? (
      <img
        alt={alt}
        className={styles.image}
        onError={handleError}
        onLoad={handleLoad}
        src={imageSrc}
        {...rest}
      />
    )
    : <Landscape className={styles.placeholderImage} />;
};

LazyImage.propTypes = {
  alt: PropTypes.string,
  height: PropTypes.string,
  mainUrl: PropTypes.string,
  smallUrl: PropTypes.string,
  width: PropTypes.string
};

export default  LazyImage;
