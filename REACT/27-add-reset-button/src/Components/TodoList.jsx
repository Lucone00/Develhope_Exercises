import React, { useState, useRef } from "react";

function TodoList() {
  const initialValue = '';
  const [items, setItems] = useState([]);
  const newItemInput = useRef();

  const [reset, setReset] = useState("");
  let clearList = useRef("");

  const addItem = () => {
    const newItem = newItemInput.current.value;
    setItems([...items, newItem]);
    newItemInput.current.value = "";
  };

  const setResetHandler = () => {
    setItems([...reset]);
    clearList.current = [];
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
        <button type="button" onClick={setResetHandler}> Reset </button>
      </div>
    </div>
    
  );
}

export default TodoList;
