import React, { useState } from 'react';
import Start from './Components/Start';
import TodoForm from './Components/TodoForm';
import TodoList from './Components/TodoList';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);  // Store the array of tasks
  const [currentTask, setCurrentTask] = useState(null);  // Add current task
  const [isEditing, setIsEditing] = useState(false);
  const [taskInput, setTaskInput] = useState('');  // Task input for the form

  // Add new task
  const addTask = (newTaskText) => {
    setTasks([...tasks, { id: Date.now(), text: newTaskText }]);
  };

  // Edit an existing task
  const editTask = (task) => {
    setCurrentTask(task);  // Set current task for editing
    setTaskInput(task.text);  // Set taskInput to the current task text
    setIsEditing(true);  // Enable editing mode
  };

  // Update an existing task
  const updateTask = (updatedTaskText) => {
    setTasks(tasks.map(task => 
      task.id === currentTask.id ? { ...task, text: updatedTaskText } : task
    ));
    setIsEditing(false);  // Exit editing mode
    setCurrentTask(null);  // Reset current task
    setTaskInput('');  // Clear input
  };

  // Delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="App">
      <Start />
      <TodoForm
        task={taskInput}
        setTask={setTaskInput}
        addTask={addTask}
        updateTask={updateTask}
        isEditing={isEditing}
        currentTask={currentTask}
      />
      <TodoList tasks={tasks} editTask={editTask} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
