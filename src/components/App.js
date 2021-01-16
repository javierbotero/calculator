import React, { Component } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: null,
      // eslint-disable-next-line react/no-unused-state
      next: null,
      // eslint-disable-next-line react/no-unused-state
      operation: null,
      // eslint-disable-next-line react/no-unused-state
      firstResult: true,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(ButtonName) {
    this.setState(state => calculate(state, ButtonName));
  }

  render() {
    const { total } = this.state;
    console.log(total);
    return (
      <>
        <Display result={total} />
        <ButtonPanel myHandler={this.handleClick} />
      </>
    );
  }
}
