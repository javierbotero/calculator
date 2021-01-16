import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

export default function ButtonPanel(props) {
  const { myHandler } = props;
  return (
    <table>
      <tr>
        <Button name="AC" myHandler={myHandler} />
        <Button name="+/-" myHandler={myHandler} />
        <Button name="%" myHandler={myHandler} />
        <Button name="/" myHandler={myHandler} />
      </tr>
      <tr>
        <Button name="7" myHandler={myHandler} />
        <Button name="8" myHandler={myHandler} />
        <Button name="9" myHandler={myHandler} />
        <Button name="x" myHandler={myHandler} />
      </tr>
      <tr>
        <Button name="4" myHandler={myHandler} />
        <Button name="5" myHandler={myHandler} />
        <Button name="6" myHandler={myHandler} />
        <Button name="-" myHandler={myHandler} />
      </tr>
      <tr>
        <Button name="1" myHandler={myHandler} />
        <Button name="2" myHandler={myHandler} />
        <Button name="3" myHandler={myHandler} />
        <Button name="+" myHandler={myHandler} />
      </tr>
      <tr>
        <Button name="0" col={2} myHandler={myHandler} />
        <Button name="." myHandler={myHandler} />
        <Button name="=" myHandler={myHandler} />
      </tr>
    </table>
  );
}

ButtonPanel.propTypes = {
  myHandler: PropTypes.func.isRequired,
};
