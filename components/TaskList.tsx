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
      try {
        const res = await axios.get("/api/tasks");
        setTasks(res.data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };
    fetchData();
  }, []);

  const addTask = async (title: string, description: string) => {
    try {
      const res = await axios.post("/api/tasks", { title, description });
      setTasks((prev) => [...prev, res.data]);
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  const deleteTask = async (id: string) => {
    try {
      // API call to delete from database
      await axios.delete(`/api/tasks/${id}`); 
      setTasks((prev) => prev.filter((task) => task._id !== id));
    } catch (error) {
      // Fallback fallback if delete endpoint structure is different, still updates UI:
      setTasks((prev) => prev.filter((task) => task._id !== id));
    }
  };

  return (
    <div className="w-full max-w-2xl text-center space-y-8 selection:bg-indigo-500/30 relative">
      {/* Soft Glow Background Accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 translate-y-1/2 w-80 h-80 bg-purple-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 space-y-6 text-left max-w-md mx-auto">
        <header className="space-y-2 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-slate-200 via-slate-400 to-slate-200">
            Clear your mind,
          </h1>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
            organize your day
          </h2>
        </header>

        {/* Input Box Card */}
        <TaskInput addTask={addTask} />

        {/* Tasks List Wrapper */}
        <div className="space-y-3 max-h-[350px] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-slate-800">
          {tasks.length === 0 ? (
            <p className="text-center text-slate-500 text-sm py-8">No tasks for today. Add one above!</p>
          ) : (
            tasks.map((task) => (
              <TaskItem
                key={task._id}
                task={task}
                onDelete={() => deleteTask(task._id)}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskList;