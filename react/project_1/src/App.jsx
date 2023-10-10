import { useState } from "react";
import "./App.css";

const App = () => {
  const [name, setName] = useState("");
  const handleNameChange = () => {
    const names = ["sathish", "ammu", "kaarthi"];
    const int = Math.floor(Math.random() * 3);
    setName(names[int]);
  };
  return (
    <div className="container">
      <h1 className="Text">Hello {name === "" ? "World" : name}!</h1>
      <button onClick={handleNameChange}>click Me</button>
    </div>
  );
};

export default App;
