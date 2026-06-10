"use client";
import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { formatTimer } from "@/lib/formatTimer";

const Timer = () => {
  const [time, setTime] = useState(1500); // 25 mins default
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isRunning) {
      interval = setInterval(() => {
        setTime((prev) => {
          if (prev <= 0) {
            clearInterval(interval);
            setIsRunning(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  return (
    <div className="relative w-full max-w-2xl text-center space-y-12">
    
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 translate-y-1/2 w-80 h-80 bg-purple-500/10 blur-[120px] rounded-full pointer-events-none" />

      <header className="space-y-3 relative z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-slate-200 via-slate-400 to-slate-200">
          Stay focused,
        </h1>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-indigo-400 via-purple-400 to-pink-400">
          flow with intent
        </h2>
      </header>

      {/* Dynamic Glassmorphic Timer Card matching Clock */}
      <main className="relative z-10 inline-block mx-auto backdrop-blur-md bg-slate-900/40 border border-slate-800/60 rounded-3xl p-8 sm:p-12 shadow-2xl shadow-indigo-950/20 transform transition hover:scale-[1.01] duration-300 w-full max-w-md">
        <h3 className="text-6xl sm:text-7xl md:text-8xl font-black tracking-widest text-transparent bg-clip-text bg-linear-to-b from-white to-slate-400 drop-shadow-[0_4px_20px_rgba(255,255,255,0.1)] tabular-nums">
          {formatTimer(time)}
        </h3>

      
        <div className="flex justify-center gap-4 mt-8">
          <Button 
            onClick={() => setIsRunning(true)}
            className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl px-6 py-2 transition shadow-lg shadow-indigo-500/20"
          >
            Start
          </Button>
          <Button 
            onClick={() => setIsRunning(false)}
            className="bg-slate-800/80 hover:bg-slate-700/80 text-slate-200 border border-slate-700/50 font-semibold rounded-xl px-6 py-2 transition"
          >
            Pause
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Timer;