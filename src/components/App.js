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
    calculate(this.myState, '1');
    return (
      <>
        <Display result="0" />
        <ButtonPanel />
      </>
    );
  }
}
