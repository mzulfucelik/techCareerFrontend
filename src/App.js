import React, { useState, useRef } from 'react';
import './App.css';
import TodoList from './components/TodoList';

function App() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");
  const [status, setStatus] = useState("");

  const handleAdd = () => {
    fetch("/api/tasks/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "categoryId": 0,
        "title": title,
        "description": description,
        "startDate": "2024-08-04T17:38:36.550Z",
        "endDate": "2024-08-04T17:38:36.550Z",
        "priority": priority,
        "missionStatus": status
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="App">
      <div className="todo-container">
        <h1 className="todo-header">Todo List</h1>
        <div className="todo-input-container">
          <input onChange={(e) => setTitle(e.target.value)} type="text" className="form-control input-group" placeholder="Add new task" />
          <input onChange={(e) => setDescription(e.target.value)} type="text" className="form-control input-group" placeholder="Description" />
          <select onChange={(e) => setPriority(e.target.value)} className='form-control input-group'>
            <option selected disabled>Önem Derecesi seçiniz</option>
            <option value='LOW_PRIORITY'>Düşük Öncelik</option>
            <option value='NORMAL'>Normal</option>
            <option value='IMPORTANT'>Önemli</option>
          </select>

          <select onChange={(e) => setStatus(e.target.value)} className='form-control input-group'>
            <option selected disabled>Durum seçiniz</option>
            <option value='IN_PROCESS'>Devam Ediyor</option>
            <option value='DONE'>Tamamlandı</option>
          </select>
          <button onClick={handleAdd} className="btn btn-primary">Add Task</button>
        </div>
        <div className="filter-buttons">
          <button className="btn btn-info">All</button>
          <button className="btn btn-info">Done</button>
          <button className="btn btn-info">Todo</button>
        </div>
        <div className="control-buttons">
          <button className="btn btn-danger">Delete Done Tasks</button>
          <button className="btn btn-danger">Delete All Tasks</button>
        </div>
        <TodoList />
      </div>
    </div>
  );
}

export default App;
