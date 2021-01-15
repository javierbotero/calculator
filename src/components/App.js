import React, { Component } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.myState = {
      total: null,
      next: null,
      operation: null,
      firstResult: true,
    };
  }

  render() {
    this.myState = calculate(this.myState, '2');
    console.log(this.myState);
    this.myState = calculate(this.myState, '0');
    console.log(this.myState);
    this.myState = calculate(this.myState, 'x');
    console.log(this.myState);
    this.myState = calculate(this.myState, '-');
    console.log(this.myState);
    this.myState = calculate(this.myState, '1');
    console.log(this.myState);
    this.myState = calculate(this.myState, '0');
    console.log(this.myState);
    this.myState = calculate(this.myState, 'x');
    console.log(this.myState);
    this.myState = calculate(this.myState, '-');
    console.log(this.myState);
    this.myState = calculate(this.myState, '1');
    console.log(this.myState);
    this.myState = calculate(this.myState, '+');
    console.log(this.myState);
    this.myState = calculate(this.myState, '-');
    console.log(this.myState);
    this.myState = calculate(this.myState, '1');
    console.log(this.myState);
    this.myState = calculate(this.myState, '0');
    console.log(this.myState);
    this.myState = calculate(this.myState, '0');
    console.log(this.myState);
    this.myState = calculate(this.myState, '=');
    console.log(this.myState);
    this.myState = calculate(this.myState, 'AC');
    console.log(this.myState);
    return (
      <>
        <Display result="0" />
        <ButtonPanel />
      </>
    );
  }
}
