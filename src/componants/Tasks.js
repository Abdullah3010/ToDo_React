import React from 'react'
import Task from './Task'
const Tasks = ({tasks,onDelete,onDoubleClick}) => {
  return (
    <>
        {
            tasks.length > 0 ?
            tasks.map((task, index) => <Task key={index} task = {task} onDelete={onDelete} onDoubleClick = {onDoubleClick}/> ):
            <p>No tasks to show!</p>
        }
    </>
  )
}

export default Tasks