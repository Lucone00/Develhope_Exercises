import React, { useState } from "react";

function TodoList(props) {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = (todo) => {
    const newTodo = {
      id: Math.random(),
      todo: todo,
    };
    setList([...list, newTodo]);
    setInput(""); // Cancella il contenuto dell'input box dopo l'aggiunta di un nuovo todo
  };

  const handleReset = () => {
    setList([]);
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const deleteTodo = (id) => {
    const newList = list.filter((todo) => todo.id !== id);
    setList(newList);
  };

  return (
    <div>
      <h1>TodoList</h1>
      <button onClick={handleReset}>Reset</button>
      <input type="text" value={input} onChange={handleInputChange} />
      <button onClick={() => addTodo(input)}>Add</button>
      {props.render({
        list: list,
        deleteTodo: deleteTodo,
      })}
    </div>
  );
}

export default TodoList;
