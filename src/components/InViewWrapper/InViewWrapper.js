import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { useInView } from 'react-intersection-observer';

import styles from './InViewWrapper.module.css';

const InViewWrapper = props => {

  const {
    className,
    content: Content,
    placeHolder: PlaceHolder,
    initialInView
  } = props;

  const [ref, inView] = useInView({initialInView});

  return (
    <div
      className={clsx(styles.container, className)}
      ref={ref}
    >
      {inView ? Content : PlaceHolder}
    </div>
  );
};

InViewWrapper.propTypes = {
  className: PropTypes.string,
  content: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
  ]),
  initialInView: PropTypes.bool,
  placeHolder: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
  ]),
  rootMargin: PropTypes.string
};

InViewWrapper.defaultProps = {
  initialInView: false
};

export default InViewWrapper;
