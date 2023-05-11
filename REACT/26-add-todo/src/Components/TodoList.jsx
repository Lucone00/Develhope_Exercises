import React, { useState, useRef } from "react";

function TodoList() {
  const [items, setItems] = useState([]);
  const newItemInput = useRef();

  const addItem = () => {
    const newItem = newItemInput.current.value;
    setItems([...items, newItem]);
    newItemInput.current.value = "";
  };

  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div>
        <input type="text" ref={newItemInput} />
        <button onClick={addItem}>Add item</button>
      </div>
    </div>
  );
}

export default TodoList;
