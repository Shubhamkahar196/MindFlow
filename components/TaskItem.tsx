import React, { useMemo } from "react";
import { Trash2, CheckCircle2, Circle, Sparkles } from "lucide-react";

// Professional small cheerful feedback messages
const CHEERFUL_QUOTES = [
  "Incredible work! Proud of you ✨",
  "Boom! Another goal crushed 🌟",
  "You are absolutely on fire today! Rocket speed 🚀",
  "One step closer to mastering your routine! 🧠",
  "Phenomenal focus! Keep pushing forward 💎"
];

const TaskItem = ({
  task,
  onToggleComplete,
  onDelete,
}: {
  task: {
    _id: string;
    title: string;
    description?: string;
    completed: boolean;
  };
  onToggleComplete: () => void;
  onDelete: () => void;
}) => {
  // Use useMemo so that a single random text quote stays constant for a single item render
  const randomCelebration = useMemo(() => {
    return CHEERFUL_QUOTES[Math.floor(Math.random() * CHEERFUL_QUOTES.length)];
  }, []);

  return (
    <div 
      className={`backdrop-blur-md border rounded-xl p-4 flex justify-between items-center transition-all duration-300 ${
        task.completed 
          ? "bg-emerald-950/20 border-emerald-500/30 shadow-lg shadow-emerald-950/10" 
          : "bg-slate-900/20 border-slate-800/40 hover:border-slate-800 hover:bg-slate-900/30"
      }`}
    >
      <div className="flex items-start gap-3.5 flex-1 pr-2">
        {/* Modern Interactive Checking Button Node */}
        <button
          onClick={onToggleComplete}
          className="mt-0.5 text-slate-500 hover:text-indigo-400 transition duration-200 cursor-pointer group"
          aria-label={task.completed ? "Mark as incomplete" : "Mark as complete"}
        >
          {task.completed ? (
            <CheckCircle2 className="h-5 w-5 text-emerald-400 fill-emerald-500/10 scale-105 transition-transform" />
          ) : (
            <Circle className="h-5 w-5 text-slate-600 group-hover:text-indigo-400 group-hover:scale-105 transition-transform" />
          )}
        </button>

        <div className="space-y-1 flex-1">
          {/* Main Title Heading with Strike-through Animation */}
          <h3 
            className={`font-semibold tracking-tight text-sm sm:text-base transition-all duration-300 ${
              task.completed 
                ? "text-slate-500 line-through decoration-emerald-500/40 opacity-80" 
                : "text-slate-200"
            }`}
          >
            {task.title}
          </h3>

          {/* Conditional Description Text Render block */}
          {task.description && !task.completed && (
            <p className="text-xs sm:text-sm text-slate-500 font-medium">
              {task.description}
            </p>
          )}

          {/* --- MODERN CHEERFUL CELEBRATION BADGE (Shows only on completed tasks) --- */}
          {task.completed && (
            <div className="flex items-center gap-1.5 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-lg px-2.5 py-1 w-fit text-[11px] font-bold tracking-wide animate-fade-in mt-2">
              <Sparkles className="h-3 w-3 text-emerald-400 fill-emerald-400/20" />
              <span>{randomCelebration}</span>
            </div>
          )}
        </div>
      </div>

      {/* Delete Operations Trigger button */}
      <button 
        onClick={onDelete}
        className="p-2 rounded-lg text-slate-500 hover:text-red-400 hover:bg-red-500/10 transition duration-200 group cursor-pointer"
        aria-label="Delete task"
      >
        <Trash2 className="h-4 w-4 transition-transform group-hover:scale-105" />
      </button>
    </div>
  );
};

export default TaskItem;