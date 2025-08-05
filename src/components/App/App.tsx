import { useState } from "react";
import "./App.scss";

const App: React.FC = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);

  return (
    <div>
      <button onClick={increment}>
        <span>increment</span>
      </button>
      <h1>{count}</h1>
      <button onClick={decrement}>
        <span>decrement</span>
      </button>
    </div>
  );
};

export default App;
