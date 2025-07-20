import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState(() => {
    const stored = localStorage.getItem("todos");
    return stored ? JSON.parse(stored) : [];
  });
  const [input, setInput] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (input.trim() === "") return;
    const newTodo = { text: input, completed: false };
    setTodos([...todos, newTodo]);
    setInput("");
  };

  const toggleComplete = (index) => {
    const updated = [...todos];
    updated[index].completed = !updated[index].completed;
    setTodos(updated);
  };

  const deleteTodo = (index) => {
    const updated = todos.filter((_, i) => i !== index);
    setTodos(updated);
  };

  return (
    <div className="app">
      <h1>✨ My Todo List ✨</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter a task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addTodo}>Add</button>
      </div>

      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index} className={todo.completed ? "completed" : ""}>
            <span onClick={() => toggleComplete(index)}>{todo.text}</span>
            <button onClick={() => deleteTodo(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;