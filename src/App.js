import React,{useState} from 'react';
import './App.css';

function App() {
  const[todo,setTodo]=useState([]);
  const[newTask,setNewTask]=useState("");
  const addTask=()=>{
    const task={
      id:todo.length===0?1:todo[todo.length-1].id+1,
      taskName:newTask,
      completed:false
    }
    setTodo([...todo,task])
  }
  const completetask=(id)=>{
    setTodo(
      todo.map(task=>{
        if(task.id===id){
          return {...task,completed:true}
        }
        else{
          return task
        }
      })
    )

  }
  return (
    <div className="App">
      <div className="addTask">
       <input value={newTask} onChange={(event)=>{setNewTask(event.target.value)}} />
       <button onClick={addTask}>Add Task</button>
      </div>
      <div className="List">
        {todo.map(task=>
          {
            return(
              <div className="display">
                <div className={task.completed?"colour":"nilcolour"}>
                  <h1>{task.taskName}</h1>
                  <button onClick={()=>completetask(task.id)}>Completed</button>
                  <button onClick={()=>setTodo(todo.filter((id)=>task.id!==id.id))}>X</button>
                </div>
              </div>
            )
          }
        )}
      </div>
    </div>   
  );
}

export default App;
