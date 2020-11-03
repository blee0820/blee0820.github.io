import React, { useState } from 'react'

function App() {

  const [count, setCount] = useState(0)

  const addOne = () => {
    setCount(count + 1)
  }

  const subtractOne = () => {
    setCount(count - 1)
  }

  return (
    <div className="App">
      <h1>Counter</h1>
      <button onClick={addOne}>+</button>
      <p>{count}</p>
      <button onClick={subtractOne}>-</button>
    </div>
  );
}

export default App;
