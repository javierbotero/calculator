/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';

export default function Button({
  name, myClass, myHandler, color, wide,
}) {
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div
      className={`${myClass} ${color}`}
      onClick={() => myHandler(name)}
      style={{
        backgroundColor: color,
        flexBasis: wide === 'true' ? '50%' : '25%',
      }}
    >
      {name}
    </div>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  myHandler: PropTypes.func.isRequired,
  myClass: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.string,
};

Button.defaultProps = {
  color: '#f5933d',
  wide: 'false',
};
