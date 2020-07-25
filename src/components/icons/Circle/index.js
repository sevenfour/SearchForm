import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import SvgIcon from '../SvgIcon';

const Circle = (props) => {
  const {
    className,
    color,
    ...rest
  } = props;

  return (
    <SvgIcon
      className={clsx(className)}
      title="Circle"
      viewBox="22 22 44 44"
      {...rest}
    >
      <circle
        cx="44"
        cy="44"
        fill={color}
        r="20.2"
        strokeWidth="3.6"
      />
    </SvgIcon>
  );
};

Circle.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  fontSize: PropTypes.string
};

export default Circle;
