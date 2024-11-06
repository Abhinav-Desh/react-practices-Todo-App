import React from "react";

const TodoItem = ({ task, editTask, deleteTask }) => {
  console.log(task.id + " --> " + task.text);

  return (
    <li className="items" key={task.id}>
      <div>
        <input type="checkbox" />
      </div>
      <div className="data">{task.text}</div>
      <button className="edit" onClick={() => editTask(task)}>Edit</button>
      <button 
        className="delete"
        onClick={() => deleteTask(task.id)} // Pass task id to delete
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
