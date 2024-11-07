import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ tasks, editTask, deleteTask,toggleCompletion }) => {
  return (
    <>
      <div className="know">
        <div className="mark">Mark</div>
        <div className="Task">Task</div>
        <div className="Actions">Actions</div>
      </div>
      <ul className="lists">
        {tasks.length > 0 &&
          tasks.map((task) => (
            <TodoItem
              key={task.id}
              task={task}
              editTask={editTask}
              deleteTask={deleteTask}
              toggleCompletion={toggleCompletion}
            />
          ))}
      </ul>
    </>
  );
};

export default TodoList;
