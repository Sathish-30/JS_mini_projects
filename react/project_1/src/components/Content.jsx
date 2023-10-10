import React, { useState } from "react";

const Content = () => {
  const [name, setName] = useState("");

  const handleNameChange = () => {
    const names = ["sathish", "ammu", "kaarthi"];
    const int = Math.floor(Math.random() * 3);
    setName(names[int]);
  };

  return (
    <main className="container">
      <h1 className="Text">Hello {name === "" ? "World" : name}!</h1>
      <button onClick={handleNameChange}>click Me</button>
    </main>
  );
};

export default Content;
