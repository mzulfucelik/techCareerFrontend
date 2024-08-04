// TodoInput Komponenti
import React, { useState } from 'react';

function TodoInput({ addTask }) {
  const [input, setInput] = useState('');

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (input) {
      addTask(input);
      setInput('');
    }
  };

  return (
    <div className="todo-input">
      <form onSubmit={handleSubmit} className="form-inline justify-content-center">
        <input
          type="text"
          className="form-control mb-2 mr-sm-2"
          placeholder="Add new task"
          value={input}
          onChange={handleInputChange}
        />
        <button type="submit" className="btn btn-primary mb-2">Add Task</button>
      </form>
    </div>
  );
}

export default TodoInput;
