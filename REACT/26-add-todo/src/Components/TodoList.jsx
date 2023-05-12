import React, { useState, useRef } from "react";

function TodoList() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = (todo) => {
    const newTodo = {
      id: Math.random(),
      todo: todo,
    };
    setList([...list, newTodo]);
    setInput("");
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <>
      <h1>TodoList</h1>
      <input type="text" value={input} onChange={handleInputChange} />
      <button onClick={() => addTodo(input)}>Add</button>

      <ul>
        {list.map((todo) => (
          <li key={todo.id}>{todo.todo}</li>
        ))}
      </ul>
    </>
  );
}

export default TodoList;
