import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import './Loading.css';
import stylesUtilities from '../../styles/Utilities.module.css';

const Loading = props => {

  const {
    className,
    overlay,
    ...rest
  } = props;

  const loader = (
    <div
      className={clsx(className, 'spinner')}
      role="progressbar"
      {...rest}
    >
      <p className={stylesUtilities.visuallyHidden}>
        Content is loading.
      </p>
      <svg
        className=""
        viewBox="22 22 44 44"
      >
        <circle
          className="circle"
          cx="44"
          cy="44"
          fill="none"
          r="20.2"
          strokeWidth="3.6"
        />
      </svg>
    </div>
  );

  return overlay
    ? <div className="overlay">{loader}</div>
    : loader;
};

Loading.propTypes = {
  className: PropTypes.string,
  overlay: PropTypes.bool
};

export default Loading;
