import React from "react";
import { useState, useEffect } from "react";

const Basic = () => {
  const [count, setCount] = useState(0);
  const increase = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.count("useEffect runs!");
    document.title = `You clicked ${count} times`;
  });

  console.count("component rendered!");
  return (
    <div>
      <h3>You clicked {count} times</h3>
      <button onClick={increase}>Increase</button>
    </div>
  );
};

export default Basic;
