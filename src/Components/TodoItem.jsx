import React,{useState} from "react";

const TodoItem = ({task, keyX})=>{
    
    console.log(task.id+"-->"+task.text, "===>", keyX);
    return(
       <div key={keyX}>
        <li className="items">
          <div><input type="checkbox" /></div> 
          <div className="data">{task.text}</div>
            <button className="edit">edit</button>
            <button className="delete">delete</button>
        </li>
       </div>
    );
}

export default TodoItem;