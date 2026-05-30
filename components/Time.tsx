'use client';

import { useState, useEffect } from "react";

const Time = () => {
  const [time, setTime] = useState<Date>(new Date());

  useEffect(() => {
 
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formattedTime = time.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true 
  });

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 selection:bg-indigo-500/30">
      
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 translate-y-1/2 w-80 h-80 bg-purple-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 w-full max-w-2xl text-center space-y-12">
     
        <header className="space-y-3">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-slate-200 via-slate-400 to-slate-200">
            Surround yourself
          </h1>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-indigo-400 via-purple-400 to-pink-400">
            with positivity
          </h2>
        </header>

        {/* Dynamic Glassmorphic Clock Card */}
        <main className="inline-block mx-auto backdrop-blur-md bg-slate-900/40 border border-slate-800/60 rounded-3xl p-8 sm:p-12 shadow-2xl shadow-indigo-950/20 transform transition hover:scale-[1.01] duration-300">
          <h3 className="text-6xl sm:text-7xl md:text-8xl font-black tracking-widest text-transparent bg-clip-text bg-linear-to-b from-white to-slate-400 drop-shadow-[0_4px_20px_rgba(255,255,255,0.1)] tabular-nums">
            {formattedTime}
          </h3>
        </main>
      </div>
    </div>
  );
};

export default Time;