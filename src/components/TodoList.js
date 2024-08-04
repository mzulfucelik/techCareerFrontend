// TodoList.js
import React, { useEffect, useState } from 'react';

function TodoList() {

  const [tasks, setTasks] = useState([])

  useEffect(() => {
    handleFetchTodos()
  }, [])

  const handleFetchTodos = () => {
    fetch("/api/tasks/getall", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((result) => setTasks(result))
      .catch((err) => console.log(err))
  }

  const handleRemove = (id) => {
    fetch("/api/tasks/delete/" + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((result) => handleFetchTodos())
      .catch((err) => console.log(err))

    handleFetchTodos();
  }


  const handleToggle = (id) => {
    fetch("/api/tasks/update/0", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "id": id,
        "categoryId": 0,
        "title": "string",
        "description": "string",
        "startDate": "2024-08-04T17:41:37.635Z",
        "endDate": "2024-08-04T17:41:37.635Z",
        "priority": "LOW_PRIORITY",
        "missionStatus": "DONE"
      }),
    })
      .then((res) => res.json())
      .then((result) => handleFetchTodos())
      .catch((err) => console.log(err))

      handleFetchTodos()
  }


  return (
    <div className="todo-list">
      <ul className="list-group">
        {tasks.map((task) => (
          <div>
            {task.title}
            <li key={task.id} className="list-group-item todo-item">
              <span style={{ textDecoration: task.missionStatus == 'DONE' ? 'line-through' : 'none' }}>
                {task.description}
              </span>
              <div>
                <button onClick={() => handleToggle(task.id)} className="btn btn-success-custom mr-2">
                  ✓
                </button>
                <button onClick={() => handleRemove(task.id)} className="btn btn-danger-custom">
                  ✗
                </button>
              </div>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}
export default TodoList;
