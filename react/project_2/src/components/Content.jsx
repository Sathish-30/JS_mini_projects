import React from "react";
import { useState } from "react";
const Content = () => {
  // Where name is the getter and setName is the setter
  const [name, setName] = useState("Dave");
  return (
    <main className="main-container">
      <form className="form-details">
        <input
          type="text"
          placeholder="Enter item id"
          id="item-id"
          className="input-field"
        />
        <input
          type="text"
          placeholder="Enter item"
          id="item-name"
          className="input-field"
        />
        <input type="button" value="Add" id="addBtn" className="btn" />
      </form>
    </main>
  );
};

export default Content;
