import { useState } from "react";

const Counter = () => {
  const [number, setNumber] = useState(0);
  const increase = () => {
    setNumber(number + 1);
  };
  const decrease = () => {
    setNumber(number - 1);
  };
  return (
    <div className="App">
      <button onClick={increase}>+</button>
      <h1>{number}</h1>
      <button onClick={decrease}>-</button>
    </div>
  );
};

export default Counter;
