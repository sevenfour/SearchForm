import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import SvgIcon from '../SvgIcon';

const Landscape = (props) => {
  const {
    className,
    color,
    ...rest
  } = props;

  return (
    <SvgIcon
      className={clsx(className)}
      title="Landscape"
      {...rest}
    >
      <path
        d="M14,6 L9.78,11.63 L11.03,13.3 L14,9.33 L19,16 L10.54,16 L6.53,10.63 L1,18 L23,18 L14,6 Z M5,16 L6.52,13.97 L8.04,16 L5,16 Z"
        fill={color}
      />
    </SvgIcon>
  );
};

Landscape.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  fontSize: PropTypes.string
};

export default Landscape;
