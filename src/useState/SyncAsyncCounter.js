import React from "react";
import { useState } from "react";

const SyncAsyncCounter = () => {
  const [number, setNumber] = useState(0);
  const increase = () => {
    setNumber(number + 1);
  };
  const asyncIncrease = () => {
    setTimeout(() => {
      setNumber((currentNumber) => currentNumber + 1);
    }, 3000);
  };
  return (
    <div>
      <button onClick={increase}>Sync Increase</button>
      <button onClick={asyncIncrease}>Async Increase</button>
      <h1>{number}</h1>
    </div>
  );
};

export default SyncAsyncCounter;
