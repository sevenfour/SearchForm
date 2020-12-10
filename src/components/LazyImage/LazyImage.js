import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { Landscape } from '../icons';

import styles from './LazyImage.module.css';

const placeholderSrc = (width, height) =>
  `data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}"%3E%3C/svg%3E`;

const LazyImage = props => {

  const {
    alt,
    aspectRatio,
    className,
    imgUrl,
    width,
    height,
    placeholderImage: Placeholder,
    ...rest
  } = props;

  // Edge Legacy browser needs to encodeURIComponent the src string
  const placeholderImage = encodeURIComponent(placeholderSrc(width, height));

  const [isError, setIsError] = useState(false);
  const [imageSrc, setImageSrc] = useState(
    aspectRatio && imgUrl ? imgUrl : placeholderImage
  );

  useEffect(() => {
    imgUrl && setImageSrc(imgUrl);
  }, [imgUrl]);

  function handleError() {
    setIsError(true);
  }

  const imageToDisplay = imgUrl && !isError
    ? (
      <img
        alt={alt}
        className={clsx(styles.image, className)}
        loading="lazy"
        onError={handleError}
        src={imageSrc}
        style={{'--height': height}}
        {...rest}
      />
    )
    : (
      <Placeholder
        className={clsx(styles.placeholderImage, className)}
        style={{'--height': height}}
      />
    );

  return aspectRatio
    ? (
      <div
        className={clsx(styles.aspectRatioBox, className)}
        style={{'--aspect-ratio': aspectRatio}}
      >
        {imageToDisplay}
      </div>
    )
    : imageToDisplay;
};

LazyImage.propTypes = {
  alt: PropTypes.string,
  aspectRatio: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  className: PropTypes.string,
  height: PropTypes.number,
  imgUrl: PropTypes.string,
  placeholderImage: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.func
  ]),
  width: PropTypes.number
};

LazyImage.defaultProps = {
  height: 'auto',
  width: '100%',
  placeholderImage: Landscape
};

export default  LazyImage;
