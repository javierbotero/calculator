import React from 'react';
import Button from './Button';

export default function ButtonPanel() {
  return (
    <table>
      <tr>
        <Button name="AC" col={1} />
        <Button name="+/-" col={1} />
        <Button name="%" col={1} />
        <Button name="/" col={1} />
      </tr>
      <tr>
        <Button name="7" col={1} />
        <Button name="8" col={1} />
        <Button name="9" col={1} />
        <Button name="X" col={1} />
      </tr>
      <tr>
        <Button name="4" col={1} />
        <Button name="5" col={1} />
        <Button name="6" col={1} />
        <Button name="-" col={1} />
      </tr>
      <tr>
        <Button name="1" col={1} />
        <Button name="2" col={1} />
        <Button name="3" col={1} />
        <Button name="+" col={1} />
      </tr>
      <tr>
        <Button name="0" col={2} />
        <Button name="." col={1} />
        <Button name="=" col={1} />
      </tr>
    </table>
  );
}
