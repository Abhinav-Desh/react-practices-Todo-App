import React, { useEffect } from 'react';

const TodoForm = ({ task, setTask, addTask, updateTask, isEditing, currentTask }) => {

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      if (isEditing) {
        updateTask(task); // Update the existing task
      } else {
        addTask(task); // Add a new task
      }
      setTask(''); 
    }
  };

  useEffect(() => {
    if (isEditing && currentTask) {
      setTask(currentTask.text); 
    }
  }, [isEditing, currentTask, setTask]);

  return (
    <form className="Todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter your task"
        className="input-text"
        required
      />
      <button type="submit" className="addbutton">
        {isEditing ? 'Update Task' : 'Add Task'}
      </button>
    </form>
  );
};

export default TodoForm;
