import React, { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

export default function App() {
  const firstState = {
    total: null,
    next: null,
    operation: null,
    computed: false,
  };

  const [myState, setMyState] = useState(firstState);

  const handleClick = buttonName => {
    setMyState(calculate(myState, buttonName));
  };

  return (
    <>
      <div className="parent">
        <Display result={myState} />
        <ButtonPanel myHandler={handleClick} />
      </div>
    </>
  );
}
