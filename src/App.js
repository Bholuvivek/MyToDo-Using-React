import React, { useState } from 'react';
import './App.css';
import Task from './components/Task'; 

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { name: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <div className="task-container">
        <div className="input-container">
          <input
            type="text"
            placeholder="Enter task..."
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button onClick={addTask}>Add Task</button>
        </div>

        <div className="tasks-box">
          {tasks.map((task, index) => (
            <Task
              key={index}
              task={task.name}
              onDelete={() => deleteTask(index)}
              isCompleted={task.completed}
              onToggleCompletion={() => toggleTaskCompletion(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
