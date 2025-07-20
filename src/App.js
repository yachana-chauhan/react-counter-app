import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);
  const reset = () => setCount(0);

  return (
    <div className="counter-container">
      <h1>React Counter App</h1>
      <div className="display">{count}</div>
      <div className="buttons">
        <button onClick={increment} className="inc">Increment</button>
        <button onClick={decrement} className="dec">Decrement</button>
        <button onClick={reset} className="reset">Reset</button>
      </div>
    </div>
  );
}

export default App;
