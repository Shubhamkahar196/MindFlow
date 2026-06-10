"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";

const TaskInput = ({
  addTask,
}: {
  addTask: (title: string, description: string) => void;
}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAddTask = () => {
    if (!title.trim()) return;
    addTask(title, description);
    setTitle("");
    setDescription("");
  };

  return (
    <div className="backdrop-blur-md bg-slate-900/40 border border-slate-800/60 rounded-2xl p-5 shadow-2xl space-y-3">
      <input
        type="text"
        placeholder="What needs to be done?"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full bg-slate-950/50 border border-slate-800/80 rounded-xl px-4 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-indigo-500/50 transition duration-200"
      />

      <input
        type="text"
        placeholder="Description (optional)"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full bg-slate-950/50 border border-slate-800/80 rounded-xl px-4 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-indigo-500/50 transition duration-200"
      />

      <Button 
        onClick={handleAddTask}
        className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl py-2.5 flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/10 transition duration-200"
      >
        <Plus className="h-4 w-4" />
        Add Task
      </Button>
    </div>
  );
};

export default TaskInput;