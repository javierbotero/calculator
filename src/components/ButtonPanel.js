import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

export default function ButtonPanel(props) {
  const { myHandler } = props;
  return (
    <div className="container">
      <Button myClass="key keyWidthGeneral" color="#e1e1e1" name="AC" myHandler={myHandler} />
      <Button myClass="key keyWidthGeneral" color="#e1e1e1" name="+/-" myHandler={myHandler} />
      <Button myClass="key keyWidthGeneral" color="#e1e1e1" name="%" myHandler={myHandler} />
      <Button myClass="key keyWidthGeneral" name="/" myHandler={myHandler} />
      <Button myClass="key keyWidthGeneral" color="#e1e1e1" name="7" myHandler={myHandler} />
      <Button myClass="key keyWidthGeneral" color="#e1e1e1" name="8" myHandler={myHandler} />
      <Button myClass="key keyWidthGeneral" color="#e1e1e1" name="9" myHandler={myHandler} />
      <Button myClass="key keyWidthGeneral" name="x" myHandler={myHandler} />
      <Button myClass="key keyWidthGeneral" color="#e1e1e1" name="4" myHandler={myHandler} />
      <Button myClass="key keyWidthGeneral" color="#e1e1e1" name="5" myHandler={myHandler} />
      <Button myClass="key keyWidthGeneral" color="#e1e1e1" name="6" myHandler={myHandler} />
      <Button myClass="key keyWidthGeneral" name="-" myHandler={myHandler} />
      <Button myClass="key keyWidthGeneral" color="#e1e1e1" name="1" myHandler={myHandler} />
      <Button myClass="key keyWidthGeneral" color="#e1e1e1" name="2" myHandler={myHandler} />
      <Button myClass="key keyWidthGeneral" color="#e1e1e1" name="3" myHandler={myHandler} />
      <Button myClass="key keyWidthGeneral" name="+" myHandler={myHandler} />
      <Button myClass="key keyWidthSpecial" color="#e1e1e1" name="0" wide myHandler={myHandler} />
      <Button myClass="key keyWidthGeneral" color="#e1e1e1" name="." myHandler={myHandler} />
      <Button myClass="key keyWidthGeneral" name="=" myHandler={myHandler} />
    </div>
  );
}

ButtonPanel.propTypes = {
  myHandler: PropTypes.func.isRequired,
};
