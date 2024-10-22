import React from "react";
import TodoItem from "./TodoItem"
import TodoForm from "./TodoForm";
const TodoList = () =>{
  const data = [
   { id:1,
   item:"this is first task"
  },
  {id:2,
    item:"this is second task"
  },
  {
    id:3,
    item:"this is third task"
  },
  {id:4,
    item:"this is fourth task"
  }
  ];

  // const items = data.map(task => task.item

    return (
      <ul className="lists">
      {data.map(items => <TodoItem key={items.id} item={items} />)}
      
      </ul>  
    );

}

export default TodoList;