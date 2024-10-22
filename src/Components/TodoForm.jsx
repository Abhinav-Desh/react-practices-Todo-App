import React,{useState} from "react";
import App from "../App";


const TodoForm = ({props})=>{

    // for taking string as input task
    const [task, setTask] = useState('');


    const handleSubmit = (e)=>{
        e.preventDefault();
        if(task){
          //  addTodo(task);
            setTask('');
        }
    }


    return(
        
        <form className="Todo-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter Your Task" value={task}
             onChange={(e) => setTask(e.target.value)} className="input-text" required/>
            <button type="submit" className="addbutton">Add Task</button>
        </form>
    );
}
export default TodoForm;