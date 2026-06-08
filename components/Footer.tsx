import React from 'react';
import { House, Hourglass, CheckSquare, Timer } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="fixed bottom-4 left-1/2 z-50 w-[90%] max-w-md -translate-x-1/2 rounded-2xl border border-white/10 bg-black/60 p-3 shadow-xl backdrop-blur-md">
      <ul className="flex items-center justify-around gap-2">
        {/* Todo Item */}
        <li>
          <a href="#todo" className="flex flex-col items-center gap-1 text-xs font-medium text-zinc-400 transition-colors duration-200 hover:text-white">
            <CheckSquare className="h-5 w-5" />
            <span>Todo</span>
          </a>
        </li>

        {/* House Item */}
        <li>
          <a href="#home" className="flex flex-col items-center gap-1 text-xs font-medium text-zinc-400 transition-colors duration-200 hover:text-white">
            <House className="h-5 w-5" />
            <span>Home</span>
          </a>
        </li>

        {/* Hourglass Item */}
        <li>
          <a href="#history" className="flex flex-col items-center gap-1 text-xs font-medium text-zinc-400 transition-colors duration-200 hover:text-white">
            <Hourglass className="h-5 w-5" />
            <span>History</span>
          </a>
        </li>

        {/* Timer Item */}
        <li>
          <a href="#timer" className="flex flex-col items-center gap-1 text-xs font-medium text-zinc-400 transition-colors duration-200 hover:text-white">
            <Timer className="h-5 w-5" />
            <span>Timer</span>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;