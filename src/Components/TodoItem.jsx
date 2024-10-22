import React,{useState} from "react";

const TodoItem = ({item})=>{
    
    console.log(item.id+"-->"+item.item);
    return(
       <div>
        <li className="items">
          <div><input type="checkbox" /></div> 
          <div className="data">{item.item}</div>
            <button className="edit">edit</button>
            <button className="delete">delete</button>
        </li>
       </div>
    );
}

export default TodoItem;