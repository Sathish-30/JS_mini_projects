import React, { useEffect } from "react";
import Create from "./Create.jsx";
import { useState } from "react";
import axios from "axios";
const Home = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/get")
      .then((res) => setTodos(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="content-box">
      <h2 className="header-text">Todo List</h2>
      <Create />
      {todos.length === 0 ? (
        <div>
          <h2 className="no-details">No Record</h2>
        </div>
      ) : (
        todos.map((todo) => <div className="result">{todo.task} </div>)
      )}
    </div>
  );
};

export default Home;
