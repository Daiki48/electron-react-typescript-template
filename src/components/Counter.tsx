import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState<number>(0);

  const Increment = () => {
    setCount(count + 1);
  };

  const Decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Counter Sample</h1>
      <button onClick={Increment}>+1</button>
      <button onClick={Decrement}>-1</button>
      <p>{count}</p>
    </div>
  );
};
