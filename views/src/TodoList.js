import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const TodoList = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task) {
      setTasks([...tasks, { id: uuidv4(), text: task, completed: false }]);
      setTask('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Todo List</h5>
        <input
          type="text"
          className="form-control"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add a new task..."
        />
        <button className="btn btn-primary mt-2" onClick={addTask}>Add</button>
        <ul className="list-group mt-3">
          {tasks.map((t) => (
            <li key={t.id} className={`list-group-item d-flex justify-content-between align-items-center ${t.completed ? 'list-group-item-success' : ''}`}>
              <div>
                <input
                  type="checkbox"
                  checked={t.completed}
                  onChange={() => toggleTask(t.id)}
                  className="me-2"
                />
                {t.text}
              </div>
              <button className="btn btn-danger btn-sm" onClick={() => deleteTask(t.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
