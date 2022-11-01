import React from "react";
import { useEffect, useState } from "react";

const AutoCounter = () => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setNumber((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const restart = () => {
    setNumber(() => 0);
  };
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={restart}>restart</button>
    </div>
  );
};

export default AutoCounter;
