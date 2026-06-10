import React from "react";
import { Trash2 } from "lucide-react";

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
    <div className="backdrop-blur-md bg-slate-900/20 border border-slate-800/40 rounded-xl p-4 flex justify-between items-center transition duration-200 hover:border-slate-800 hover:bg-slate-900/30">
      <div className="space-y-0.5">
        <h3 className="font-semibold text-slate-200 tracking-tight text-sm sm:text-base">
          {task.title}
        </h3>
        {task.description && (
          <p className="text-xs sm:text-sm text-slate-500 font-medium">
            {task.description}
          </p>
        )}
      </div>

      <button 
        onClick={onDelete}
        className="p-2 rounded-lg text-slate-500 hover:text-red-400 hover:bg-red-500/10 transition duration-200 group"
        aria-label="Delete task"
      >
        <Trash2 className="h-4 w-4 transition-transform group-hover:scale-105" />
      </button>
    </div>
  );
};

export default TaskItem;