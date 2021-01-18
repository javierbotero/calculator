import React from 'react';
import PropTypes from 'prop-types';

export default function Button({
  name, col, myHandler, myClass,
}) {
  return (
    <th colSpan={col} onClick={() => myHandler(name)} className={myClass}>
      {name}
    </th>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  col: PropTypes.number,
  myHandler: PropTypes.func.isRequired,
  myClass: PropTypes.string,
};

Button.defaultProps = {
  col: 1,
  myClass: '',
};
