import React from 'react';

const TodoItem = ({ task, editTask, deleteTask, toggleCompletion }) => {
  return (
    <div className="items">
      <div className='checkbox-item'>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleCompletion(task.id)} // Toggle completion status
        />
      </div>
      <div
        className="data"
        style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
      >
        {task.text}
      </div>
      <div className='action-buttons'>
        <button className="edit" onClick={() => editTask(task)}>Edit </button>
        <button className="delete" onClick={() => deleteTask(task.id)}>Delete </button>
      </div>
    </div>
  );
}

export default TodoItem;
