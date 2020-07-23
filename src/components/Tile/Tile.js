import React from 'react';
import PropTypes from 'prop-types';

import styles from './Tile.module.css';

import clsx from 'clsx';

const Tile = props => {
  const {
    children,
    className,
    ...rest
  } = props;

  return (
    <div
      className={clsx(styles.root, className)}
      {...rest}
    >
      {children}
    </div>
  );
};

Tile.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default Tile;
