import React from "react";
import TodoList from "./TodoList";

function App() {
  return (
    <div>
      <TodoList
        render={({ list, deleteTodo }) => (
          <ul>
            {list.map((todo) => (
              <li key={todo.id}>
                {todo.todo}
                <button onClick={() => deleteTodo(todo.id)}>&times;</button>
              </li>
            ))}
          </ul>
        )}
      />
    </div>
  );
}

export default App 