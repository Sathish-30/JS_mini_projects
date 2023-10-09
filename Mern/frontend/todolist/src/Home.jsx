import React, { useEffect } from "react";
import Create from "./Create.jsx";
import { useState } from "react";
import axios from "axios";
import "./App.css";
import {
  BsCircle,
  BsFillCheckCircleFill,
  BsFillTrashFill,
} from "react-icons/bs";
const Home = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/get")
      .then((res) => setTodos(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleEdit = (_id) => {
    axios
      .put("http://localhost:5000/update/" + _id)
      .then((res) => location.reload())
      .catch((err) => console.log(err));
  };
  const handleDelete = (_id) => {
    console.log("deleted");
    axios
      .delete("http://localhost:5000/delete/" + _id)
      .then((res) => location.reload())
      .catch((err) => console.log(err));
  };

  return (
    <div className="content-box">
      <h2 className="header-text">Todo List</h2>
      <Create />
      {todos.length === 0 ? (
        <div>
          <h2 className="no-details">No Record</h2>
        </div>
      ) : (
        todos.map((todo) => (
          <div className="result">
            <div className="checkbox">
              {todo.done ? (
                <BsFillCheckCircleFill className="icon"></BsFillCheckCircleFill>
              ) : (
                <BsCircle
                  className="icon"
                  onClick={() => handleEdit(todo._id)}
                />
              )}
              <p className={todo.done ? "line-through" : ""}>{todo.task}</p>{" "}
            </div>
            <div>
              <span className="delIcon" onClick={() => handleDelete(todo._id)}>
                <BsFillTrashFill className="icon" />
              </span>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Home;
