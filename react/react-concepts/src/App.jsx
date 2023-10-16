import React from "react";
import { useState } from "react";
const App = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount();
  };
  return (
    <div className="container">
      <h4 className="text">{count}</h4>
      <button className="increment" onClick={handleClick}>
        inc
      </button>
    </div>
  );
};

export default App;
