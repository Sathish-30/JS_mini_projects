import React from "react";
import Create from "./Create.jsx";
import { useState } from "react";
const Home = () => {
  const [todos, setTodos] = useState([]);
  return (
    <div className="content-box">
      <h2 className="header-text">Todo List</h2>
      <Create />
      {todos.length === 0 ? (
        <div>
          <h2 className="no-details">No Record</h2>
        </div>
      ) : (
        todos.map((todo) => <div className="result">{todo}</div>)
      )}
    </div>
  );
};

export default Home;
