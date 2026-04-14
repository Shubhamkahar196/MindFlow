"use client"
import React, { useEffect, useState } from 'react'
import TaskInput from './TaskInput'
import TaskItem from './TaskItem';

const TaskList = () => {
    const [task,setTasks] = useState<string[]>([]);

    // load from localstorage
    useEffect(()=>{
        const saved = localStorage.getItem("task");
        if(saved){
            setTasks(JSON.parse(saved));
        }
    },[]);

    // save to localStorage
    useEffect(()=>{
        localStorage.setItem("task",JSON.stringify(task));
    },[task]);

    const addTask = (task:string)=>{
        setTasks((prev)=> [...prev,task]);
    }

    const deleteTask = (index: number)=>{
        const updated = task.filter((_,i)=> i !==index);
   setTasks(updated);
    }
  return (
    <div className='mt-6'>
        <TaskInput addTask={addTask} />
        {task.map((task,index)=>(
            <TaskItem key={index} task={task} onDelete={()=> deleteTask(index)} />
        ))}
    </div>
  )
}

export default TaskList