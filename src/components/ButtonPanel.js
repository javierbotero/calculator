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
        <Button name="7" />
        <Button name="8" />
        <Button name="9" />
        <Button name="X" />
      </tr>
      <tr>
        <Button name="4" />
        <Button name="5" />
        <Button name="6" />
        <Button name="-" />
      </tr>
      <tr>
        <Button name="1" />
        <Button name="2" />
        <Button name="3" />
        <Button name="+" />
      </tr>
      <tr>
        <Button name="0" col={2} />
        <Button name="." />
        <Button name="=" />
      </tr>
    </table>
  );
}
