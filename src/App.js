import React, { useState } from 'react';
import Start from './Components/Start'
import TodoList from './Components/TodoList';
import TodoForm from './Components/TodoForm';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);

  // Add new task to the list
  const addTask = (newTaskText) => {
    setTasks([...tasks, { id: Date.now(), text: newTaskText, completed: false }]);
  };

  // Edit a task
  const editTask = (task) => {
    setCurrentTask(task);
    setTaskInput(task.text);
    setIsEditing(true);
  };

  // Update task after editing
  const updateTask = (updatedTaskText) => {
    setTasks(tasks.map(task =>
      task.id === currentTask.id ? { ...task, text: updatedTaskText } : task
    ));
    setIsEditing(false);
    setCurrentTask(null);
  };

  // Delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // Toggle task completion
  const toggleCompletion = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div className="App">
      <Start/>
      <TodoForm
        task={taskInput}
        setTask={setTaskInput}
        addTask={addTask}
        updateTask={updateTask}
        isEditing={isEditing}
        currentTask={currentTask}
      />
      <TodoList
  tasks={tasks}
  editTask={editTask}
  deleteTask={deleteTask}
  toggleCompletion={toggleCompletion}
/>

    </div>
  );
}

export default App;
