import React from "react";

const TaskItem = ({
  task,
  onDelete,
}: {
  task: {
    _id: string;
    title: string;
    description?: string;
    completed: boolean;
  };
  onDelete: () => void;
}) => {
  return (
    <div className="border p-3 rounded mt-2 flex justify-between items-center">
      <div>
        <h3 className="font-bold">{task.title}</h3>
        <p className="text-sm text-gray-500">{task.description}</p>
      </div>

      <button onClick={onDelete}>❌</button>
    </div>
  );
};

export default TaskItem;