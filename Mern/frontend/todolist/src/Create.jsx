import React, { useState } from "react";
import "./App.css";
import axios from "axios";
const Create = () => {
  const [task, setTask] = useState();
  const handleAdd = () => {
    axios
      .post("http://localhost:5000/add", { task: task })
      .then((result) => location.reload())
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <input
        type="text"
        name="todo"
        id="input"
        placeholder="Enter Task"
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="button" className="btn" onClick={handleAdd}>
        Add
      </button>
    </div>
  );
};

export default Create;
