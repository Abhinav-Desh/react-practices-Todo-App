import React from "react";

const TodoForm = ({ task, setTask, addTask, updateTask, currentTask, isEditing }) => {
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (task) {
      if (isEditing) {
        updateTask(task);  // Update task if in editing mode
      } else {
        addTask(task);  // Add new task if not in editing mode
      }
      setTask('');  // Clear input after submission
    }
  };

  return (
    <>
      <form className="Todo-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Your Task"
          value={task}
          onChange={(e) => setTask(e.target.value)}  // Update task input on change
          className="input-text"
          required
          minLength="1"
          maxLength="50"
          size="50"
        />
        <button type="submit" className="addbutton">
          {isEditing ? 'Update Task' : 'Add Task'}  {/* Button text changes based on editing mode */}
        </button>
      </form>
    </>
  );
};

export default TodoForm;
