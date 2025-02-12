import React from 'react';
import { useState } from 'react';

export function App(props) {
  const [count, setCount] = useState(0);

  // using a functional update for setState allows us to get the updated value of count before we add one to it.
  function handleClick() {
    setCount(count => count + 1);
    setCount(count => count + 1);
    setCount(count => count + 1);
  }
  return (
    <div className='App'>
      <button onClick={handleClick}>click me</button>
      <p>{count}</p>
    </div>
  );
}
