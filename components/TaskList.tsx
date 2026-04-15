"use client";
import React, { useEffect, useState } from "react";
import TaskInput from "./TaskInput";
import TaskItem from "./TaskItem";
import axios from "axios";

type Task = {
  _id: string;
  title: string;
  description?: string;
  completed: boolean;
};

const TaskList = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("/api/tasks");
      setTasks(res.data);
    };
    fetchData();
  }, []);

  const addTask = async (title: string, description: string) => {
    const res = await axios.post("/api/tasks", {
      title,
      description,
    });

    setTasks((prev) => [...prev, res.data]);
  };

  const deleteTask = (id: string) => {
    const updated = tasks.filter((task) => task._id !== id);
    setTasks(updated);
  };

  return (
    <div className="mt-6">
      <TaskInput addTask={addTask} />

      {tasks.map((task) => (
        <TaskItem
          key={task._id}
          task={task}
          onDelete={() => deleteTask(task._id)}
        />
      ))}
    </div>
  );
};

export default TaskList;