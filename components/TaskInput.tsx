"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";

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
    <div className="flex flex-col gap-3 mt-6">
      <input
        type="text"
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border px-3 py-2 rounded w-full"
      />

      <input
        type="text"
        placeholder="Description (optional)"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border px-3 py-2 rounded w-full"
      />

      <Button onClick={handleAddTask}>Add Task</Button>
    </div>
  );
};

export default TaskInput;