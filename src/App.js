
import logo from './logo.svg';
import './App.css';
import { useState} from "react";

function App() {
  const [currentTask,setcurrentTask]=useState('')
  const[list,setlist]=useState([])

  let onchange=((e)=>{
    setcurrentTask(e.target.value)
  })

  let addTask=()=>{
    setlist([...list,{id:list.length+1,name:currentTask,isDone:true}])
  }
  let markDone=(id)=>{
    let itemIndex=list.findIndex(obj=>obj.id===id)
    // list[itemIndex].isDone=true;
    if (list[itemIndex].isDone === false) {
      list[itemIndex].isDone = true;
    } else if (list[itemIndex].isDone === true) {
      list[itemIndex].isDone = false;
    }
    setlist([...list])
  };
  let deletetask = (id) => {
    let removetask = list.findIndex((obj) => obj.id === id);
    list.splice(removetask, 1);
    setlist([...list]);
  };
 
  return (
    <div className='container'>
      <input type='text' className='text-box' placeholder='enter task...' onChange={onchange}></input>
      <button className='search-button' onClick={addTask}>Add Task</button>
      <ul>
        {
          list.map((item)=>{
            return <li className={item.isDone ? '':'mark-done'}>{item.name}-
            <button onClick={()=>markDone(item.id)}>Done</button>-
            <button onClick={() => deletetask(item.id)}>Delete</button></li>
          })
        }
      </ul>
    </div>
  );
}

export default App;

