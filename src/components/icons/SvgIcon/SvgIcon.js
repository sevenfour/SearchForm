import React from 'react';
import PropTypes from 'prop-types';

import styles from './SvgIcon.module.css';

import clsx from 'clsx';

/*
 * This SVG helper was inspired by the M-UI one
 * https://material-ui.com/api/svg-icon/
*/

const SvgIcon = props => {

  const {
    children,
    className,
    ...rest
  } = props;

  return (
    <svg
      aria-hidden="true"
      className={clsx(styles.root, className)}
      focusable="false"
      role="presentation"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      {children}
    </svg>
  );
};

SvgIcon.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default SvgIcon;
