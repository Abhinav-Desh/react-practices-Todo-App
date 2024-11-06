import React, { useState } from 'react';
import Start from './Components/Start'
import TodoForm from './Components/TodoForm'
import TodoList from './Components/TodoList';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);// store the array of task
  const [currentTask, setCurrentTask] = useState(null);// add current task
  const [isEditing, setIsEditing] = useState(false);

  
 const addTask = (newTaskText)=>{
    setTasks([...tasks,{id:Date.now(), text:newTaskText}]);
    
 }
//  console.log(Date.now());
 const editTask = (task)=>{
  setIsEditing(true);
  setCurrentTask(task);
 };
 const updateTask =(updatedTaskText)=>{
  setTasks(tasks.map(task => task.id === currentTask.id ? { ...task, text: updatedTaskText } : task))
  setIsEditing(false);
  setCurrentTask(null);
 };
 const deleteTask = (id) => {
  setTasks(tasks.filter(task => task.id !== id));
};
// console.log("->>>",tasks);

  return (
    <div className="App">
      <Start/>
      <TodoForm 
      addTask ={addTask} 
      updateTask={updateTask}
      isEditing = {isEditing} 
      currentTask ={currentTask}
       />
       
      <TodoList tasks ={tasks} editTask={editTask} deleteTask={deleteTask} />
      
    </div>
  );
}

export default App;
