import React, { Component, useState } from "react";

function Counter({ init = 0 }) {
  const [count, setCount] = useState(init);

  const reset = () => setCount(init);
  const minus = () => setCount(count - 1);
  const add = () => setCount(count + 1);
  return (
    <>
      <div className="container">
        <h1>Count: {count}</h1>
        <button className="btn" onClick={reset}>
          Reset
        </button>
        <button className="btn" onClick={minus}>
          -
        </button>
        <button className="btn" onClick={add}>
          +
        </button>
      </div>
    </>
  );
}
export default Counter;
