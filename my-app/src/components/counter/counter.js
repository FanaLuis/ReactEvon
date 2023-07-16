import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const handleInceament = () => {
    setTimeout(function delay() {
      setCount(count + 1);
    }, 1000);
  };

  return <div onClick={handleInceament}>Increament {count}</div>;
};

export default Counter;
