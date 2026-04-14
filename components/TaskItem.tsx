import React from 'react'
import { Button } from './ui/button';

const TaskItem = ({task,onDelete}: {
  task: string;
  onDelete : ()=> void;

}) =>{
  return (
    <div>
      <span>{task}</span>
      <Button onClick={onDelete}>Delete</Button>
    </div>
  )
}
export default TaskItem