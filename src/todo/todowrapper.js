import React, { useState } from 'react'
import { Todoform } from './todoform'
import {v4 as uuidv4} from 'uuid';


export const Todowrapper = () => {
  const [todos,settodos]=useState([])
  const addTodo=todo=>{
    // settodo([...todos,{id:uuidv4(),task:todo,completed:false,isEditing:false}])
  }
  return (    <>

    <div className='todowrapper'>
      <Todoform addTodo={addTodo}/>
      </div></>
  )
}
