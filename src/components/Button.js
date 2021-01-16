import React from 'react';
import PropTypes from 'prop-types';

export default function Button({ name, col, myHandler }) {
  return (
    <th colSpan={col} onClick={() => myHandler(name)}>
      {name}
    </th>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  col: PropTypes.number,
  myHandler: PropTypes.func.isRequired,
};

Button.defaultProps = {
  col: 1,
};
