"use client";
import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, Check } from 'lucide-react';

const MOTIVATIONAL_QUOTES = [
  "Surround yourself with positivity. What is holding you back right now?",
  "Deep breaths. Focus on the process, not the destination.",
  "Your potential is endless. Can you push through just 5 more minutes?",
  "Mistakes are proof that you are trying. Keep searching for answers.",
  "Make today count. What is the one thing you want to master in this session?",
  "Consistency beats intensity. Stay locked in!"
];

const COLOR_PALETTES = [
  "from-indigo-400 via-purple-400 to-pink-400",
  "from-emerald-400 via-teal-400 to-cyan-400",
  "from-amber-400 via-orange-400 to-red-400",
  "from-blue-400 via-violet-400 to-fuchsia-400"
];

const Hours = () => {
  // Core states
  const [hour, setHour] = useState(0);
  const [min, setMinute] = useState(45);
  const [second, setSecond] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  // Edit Mode states
  const [isEditing, setIsEditing] = useState(false);
  const [editHour, setEditHour] = useState("01");
  const [editMin, setEditMin] = useState("00");
  const [editSec, setEditSec] = useState("00");

  const [blinkSec, setBlinkSec] = useState(false);
  const [blinkMin, setBlinkMin] = useState(false);
  const [blinkHour, setBlinkHour] = useState(false);
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [colorIndex, setColorIndex] = useState(0);

  const prevMinRef = useRef(min);
  const prevHourRef = useRef(hour);
  
  // Refs to calculate accurate delta time
  const endTimeRef = useRef<number | null>(null);
  const timeLeftRef = useRef<number>(0);

  // Countdown Interval logic with high-accuracy timestamp calculation
  useEffect(() => {
    let timerInterval: NodeJS.Timeout;

    if (isRunning && !isEditing) {
      // Calculate total seconds remaining right now
      const totalSecondsLeft = hour * 3600 + min * 60 + second;
      
      // Calculate exactly when this session should hit 0
      endTimeRef.current = Date.now() + totalSecondsLeft * 1000;

      timerInterval = setInterval(() => {
        if (!endTimeRef.current) return;

        // Find how many milliseconds are genuinely left
        const msLeft = endTimeRef.current - Date.now();
        
        if (msLeft <= 0) {
          setHour(0);
          setMinute(0);
          setSecond(0);
          setIsRunning(false);
          clearInterval(timerInterval);
          return;
        }

        // Convert ms back to hours, minutes, and seconds
        const totalSecs = Math.ceil(msLeft / 1000);
        const h = Math.floor(totalSecs / 3600);
        const m = Math.floor((totalSecs % 3600) / 60);
        const s = totalSecs % 60;

        // Visual animation triggers
        setBlinkSec(true);
        setTimeout(() => setBlinkSec(false), 200);
        setColorIndex((prev) => (prev + 1) % COLOR_PALETTES.length);

        setHour(h);
        setMinute(m);
        setSecond(s);
      }, 1000);
    }

    return () => clearInterval(timerInterval);
  }, [isRunning, isEditing]);

  // Handle Minute change for Quotes and Blink
  useEffect(() => {
    if (min !== prevMinRef.current) {
      // Avoid triggering changes when resetting or moving backwards drastically
      if (isRunning) {
        setBlinkMin(true);
        setTimeout(() => setBlinkMin(false), 500);
        setQuoteIndex((prev) => (prev + 1) % MOTIVATIONAL_QUOTES.length);
      }
      prevMinRef.current = min;
    }
  }, [min, isRunning]);

  // Handle Hour Change Blink
  useEffect(() => {
    if (hour !== prevHourRef.current) {
      if (isRunning) {
        setBlinkHour(true);
        setTimeout(() => setBlinkHour(false), 500);
      }
      prevHourRef.current = hour;
    }
  }, [hour, isRunning]);

  // Save changes from Edit Mode
  const saveSessionTime = () => {
    const h = Math.max(0, parseInt(editHour) || 0);
    const m = Math.min(59, Math.max(0, parseInt(editMin) || 0));
    const s = Math.min(59, Math.max(0, parseInt(editSec) || 0));

    setHour(h);
    setMinute(m);
    setSecond(s);
    setIsEditing(false);
  };

  const openEditMode = () => {
    setIsRunning(false); 
    setEditHour(String(hour).padStart(2, '0'));
    setEditMin(String(min).padStart(2, '0'));
    setEditSec(String(second).padStart(2, '0'));
    setIsEditing(true);
  };

  const padTime = (num: number) => String(num).padStart(2, '0');

  return (
    <div className="w-full max-w-3xl text-center space-y-12 selection:bg-indigo-500/30 relative">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-85 h-85 bg-indigo-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 translate-y-1/2 w-85 h-85 bg-purple-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="relative z-10 space-y-10">
        {/* Dynamic Quotes */}
        <header className="space-y-4 max-w-xl mx-auto min-h-25 flex flex-col justify-center">
          <p className="text-sm font-semibold tracking-widest text-indigo-400 uppercase">MindFlow Session</p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-slate-100 via-slate-300 to-slate-100">
            "{MOTIVATIONAL_QUOTES[quoteIndex]}"
          </h2>
        </header>

        <main className="inline-block mx-auto backdrop-blur-md bg-slate-900/40 border border-slate-800/60 rounded-3xl p-8 sm:p-14 shadow-2xl shadow-indigo-950/20">
          
          {isEditing ? (
            /* --- EDIT MODE WORKSPACE --- */
            <div className="flex flex-col items-center space-y-6">
              <div className="flex items-center justify-center gap-3 font-black text-5xl sm:text-7xl text-slate-300">
                <div className="flex flex-col items-center">
                  <input
                    type="text"
                    maxLength={2}
                    value={editHour}
                    onChange={(e) => setEditHour(e.target.value.replace(/\D/g, ""))}
                    className="w-20 sm:w-28 bg-slate-950/80 border border-slate-700/80 rounded-2xl text-center p-2 text-white focus:outline-none focus:border-indigo-500"
                  />
                  <span className="text-xs uppercase font-bold tracking-widest text-slate-500 mt-2">hours</span>
                </div>
                <span className="text-slate-600 pb-6">:</span>
                <div className="flex flex-col items-center">
                  <input
                    type="text"
                    maxLength={2}
                    value={editMin}
                    onChange={(e) => setEditMin(e.target.value.replace(/\D/g, ""))}
                    className="w-20 sm:w-28 bg-slate-950/80 border border-slate-700/80 rounded-2xl text-center p-2 text-white focus:outline-none focus:border-indigo-500"
                  />
                  <span className="text-xs uppercase font-bold tracking-widest text-slate-500 mt-2">mins</span>
                </div>
                <span className="text-slate-600 pb-6">:</span>
                <div className="flex flex-col items-center">
                  <input
                    type="text"
                    maxLength={2}
                    value={editSec}
                    onChange={(e) => setEditSec(e.target.value.replace(/\D/g, ""))}
                    className="w-20 sm:w-28 bg-slate-950/80 border border-slate-700/80 rounded-2xl text-center p-2 text-white focus:outline-none focus:border-indigo-500"
                  />
                  <span className="text-xs uppercase font-bold tracking-widest text-slate-500 mt-2">secs</span>
                </div>
              </div>

              <button
                onClick={saveSessionTime}
                className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-xl px-6 py-2.5 shadow-lg shadow-emerald-500/20 transition duration-200 text-sm cursor-pointer"
              >
                <Check className="h-4 w-4" /> Save Session
              </button>
            </div>
          ) : (
           
            <div>
              <div 
                onClick={openEditMode}
                className="flex items-center justify-center gap-4 sm:gap-6 font-black text-6xl sm:text-7xl md:text-8xl tabular-nums tracking-tighter cursor-pointer group title-edit-trigger"
                title="Click numbers to edit time"
              >
                {/* Hours */}
                <div className={`flex flex-col items-center transition-all duration-200 group-hover:text-indigo-400 ${blinkHour ? "text-amber-400 scale-95 opacity-50 blur-xs" : "text-white"}`}>
                  <span>{padTime(hour)}</span>
                  <span className="text-xs uppercase font-bold tracking-widest text-slate-500 mt-2 group-hover:text-indigo-400/70">hours</span>
                </div>

                <span className="text-slate-600 pb-6">:</span>

                {/* Mins */}
                <div className={`flex flex-col items-center transition-all duration-200 group-hover:text-indigo-400 ${blinkMin ? "text-purple-400 scale-95 opacity-40 blur-xs" : "text-slate-200"}`}>
                  <span>{padTime(min)}</span>
                  <span className="text-xs uppercase font-bold tracking-widest text-slate-500 mt-2 group-hover:text-indigo-400/70">mins</span>
                </div>

                <span className="text-slate-600 pb-6">:</span>

                {/* Secs */}
                <div className={`flex flex-col items-center transition-all duration-150 group-hover:text-indigo-400 ${blinkSec ? "opacity-30 scale-102" : "opacity-100"}`}>
                  <span className={`text-transparent bg-clip-text bg-linear-to-b ${COLOR_PALETTES[colorIndex]}`}>
                    {padTime(second)}
                  </span>
                  <span className="text-xs uppercase font-bold tracking-widest text-slate-500 mt-2 group-hover:text-indigo-400/70">secs</span>
                </div>
              </div>

              <p className="text-xs font-medium text-indigo-400/60 mt-4 tracking-wide transition duration-200">
                💡 Tip: Click any number above to edit your session time.
              </p>

              <div className="flex items-center justify-center gap-4 mt-10">
                {isRunning ? (
                  /* Pause Button */
                  <button
                    onClick={() => setIsRunning(false)}
                    className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700/80 border border-slate-700/60 text-slate-100 font-semibold rounded-xl px-6 py-3 transition duration-200 shadow-md cursor-pointer text-sm"
                  >
                    <Pause className="h-4 w-4 text-amber-400 fill-amber-400" />
                    <span>Pause</span>
                  </button>
                ) : (
                  <button
                    onClick={() => setIsRunning(true)}
                    className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl px-6 py-3 transition duration-200 shadow-lg shadow-indigo-500/20 cursor-pointer text-sm"
                  >
                    <Play className="h-4 w-4 fill-white" />
                    <span>{hour === 0 && min === 0 && second === 0 ? "Start" : "Resume"}</span>
                  </button>
                )}

                <button
                  onClick={() => {
                    setIsRunning(false);
                    setHour(1);
                    setMinute(0);
                    setSecond(0);
                  }}
                  className="flex items-center gap-2 bg-slate-950/40 hover:bg-slate-900 border border-slate-800 text-slate-400 hover:text-white font-semibold rounded-xl px-5 py-3 transition duration-200 cursor-pointer text-sm"
                >
                  <RotateCcw className="h-4 w-4" />
                  <span>Reset</span>
                </button>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Hours;