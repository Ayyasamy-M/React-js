import React, { useState } from 'react'

export const Todoform = () => {
  const[value,setvalue]=useState("")
  const handlesubmit=e=>{
    e.preventDefault();
    console.log(value);
  }
  return (<>
    <form className='todoform' onSubmit={handlesubmit}>
      <input type='text' className='todo-input' placeholder='what is the task today?' 
      onChange={(e)=>setvalue(e.target.value)}/>
      <button type='submit' className='todo-btn'>Add Task</button>
      </form></>
  )
}
