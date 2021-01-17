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
  return <div>{str}</div>;
}

Display.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  result: PropTypes.object.isRequired,
};
