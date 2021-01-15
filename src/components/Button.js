import React from 'react';
import PropTypes from 'prop-types';

export default function Button({ name, col }) {
  return <th colSpan={col}>{name}</th>;
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  col: PropTypes.number,
};

Button.defaultProps = {
  col: 1,
};
