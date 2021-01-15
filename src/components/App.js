import React, { Component } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      result: '0',
    };
  }

  render() {
    const { result } = this.state;
    return (
      <>
        <Display result={result} />
        <ButtonPanel />
      </>
    );
  }
}
