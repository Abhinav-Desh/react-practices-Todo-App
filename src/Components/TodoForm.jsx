import React,{useEffect, useState} from "react";
import  "../App";


const TodoForm = ({addTask, updateTask, currentTask, isEditing})=>{

    // for taking string as input task
    const [task, setTask] = useState('');
    // const [addTodo,setaddTodo] = useState([]);

    useEffect(()=>{
        if(isEditing && currentTask){
        
        }
    },[currentTask,isEditing])
    const addTodo = () =>{
      
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (task) {
            if (isEditing) {
                updateTask(task);
            } else {
                addTask(task);
            }
            setTask('');
        }
    };

    return(
        <>
        <form className="Todo-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter Your Task" value={task}
             onChange={(e) => setTask(e.target.value)} className="input-text" required minlength="0" maxlength="50" size="50"/>
            <button type="submit" className="addbutton">{isEditing ? 'Update Task' : 'Add Task'}</button>
        </form>
        </>
    );
}
export default TodoForm;