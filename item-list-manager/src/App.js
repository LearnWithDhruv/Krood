import React, { useState } from "react";
import "./App.css";

function App() {
  const [items, setItems] = useState([]); // State for the list of items
  const [inputValue, setInputValue] = useState(""); // State for the input field

  // Function to handle adding items
  const handleAddItem = () => {
    if (inputValue.trim() !== "") {
      setItems([...items, inputValue]);
      setInputValue(""); // Clear the input field
    }
  };

  return (
    <div className="container">
      <h1>Item List Manager</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter item"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleAddItem}>Add Item</button>
      </div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li> // Display items
        ))}
      </ul>
    </div>
  );
}

export default App;