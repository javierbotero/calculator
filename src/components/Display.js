import React from 'react';
import PropTypes from 'prop-types';

export default function Display({ result }) {
  let str;
  if (result.total === null) {
    str = '0';
  } else {
    str = `${result.total}
 ${result.operation ? result.operation : ''}
 ${result.next ? result.next : ''}`;
  }
  console.log(result);
  return <div>{str}</div>;
}

Display.defaultProps = {
  result: '0',
};

Display.propTypes = {
  result: PropTypes.string,
};
