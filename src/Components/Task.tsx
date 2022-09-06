import React,{FC} from 'react'
import { ITask } from '../Interfaces'

interface Props{
    task : ITask
}

const Task=({task} :Props) =>{
  return (
    <div className='content'>
        {task.taskName}
        {task.deadline}
    </div>
    
  )
}

export default Task