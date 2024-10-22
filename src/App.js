import React, { useState } from 'react';
import Start from './Components/Start'
import TodoForm from './Components/TodoForm'
import TodoList from './Components/TodoList';
import './App.css';

function App() {
  const [tasks, setTasks]= useState([]);
  const [currentTask, setCurrentTask]=useState(null);
  const [isEditing, setIsEditing] = useState(false);
 const addTask = (newTaskText)=>{
    setTasks(...tasks,newTaskText)
 }

 const updateTask =()=>{

 }
 
  return (
    <div className="App">
      <Start/>
      <TodoForm 
      addTask ={addTask} 
      updateTask={updateTask}
      isEditing = {isEditing}
      currentTask ={currentTask}
       />
      <TodoList />
      
    </div>
  );
}

export default App;
