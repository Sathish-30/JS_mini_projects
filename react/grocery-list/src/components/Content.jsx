import React from "react";
import "../App.css";
const Content = () => {
  return (
    <div className="main-content">
      <form action="" className="form-detail">
        <div className="in-field">
          <input
            type="text"
            placeholder="Enter product Id"
            className="input-field"
          />
          <input
            type="text"
            placeholder="Enter product name"
            className="input-field"
          />
        </div>
        <input type="button" value="Add" id="btn" />
      </form>
    </div>
  );
};

export default Content;
