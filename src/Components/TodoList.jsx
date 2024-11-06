import React from "react";
import TodoItem from "./TodoItem"
import TodoForm from "./TodoForm";
const TodoList = ({tasks,editTask,deleteTask}) =>{


console.log(tasks, '--->');
    return (
      <>
      <div className="know">
      <div className="mark">Mark</div>
      <div className="Task">Task</div>
      <div className="Actions">Actions</div>
     </div>
      <ul className="lists">
      {tasks.length >0 && tasks.map(task => <TodoItem keyX={task.id}   task={task} />)}
      </ul>  
      </>
    );

}

export default TodoList;