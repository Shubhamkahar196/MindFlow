"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";

const TaskInput = ({ addTask }: { addTask: (task: string) => void }) => {
  const [input, setInput] = useState("");

  const handleAddTask = () => {
    if (!input.trim()) return;
    addTask(input);
    setInput("");
  };

  return (
    <div className="flex gap-2 mt-6">
      <input
        type="text"
        placeholder="Add task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border px-3 py-2 rounded w-full"
      />

      <Button onClick={handleAddTask}>Add Task</Button>
    </div>
  );
};

export default TaskInput;