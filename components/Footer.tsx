import React from 'react';
import Link from 'next/link';
import { House, Hourglass, CheckSquare, Timer as TimerIcon } from 'lucide-react';


const Footer = () => {
  return (
    <footer className="fixed bottom-4 left-1/2 z-50 w-[90%] max-w-md -translate-x-1/2 rounded-2xl border border-white/10 bg-black/60 p-3 shadow-xl backdrop-blur-md">
      <ul className="flex items-center justify-around gap-2">
        {/* Todo Link */}
        <li>
          <Link href="/todo" className="flex flex-col items-center gap-1 text-xs font-medium text-zinc-400 transition-colors duration-200 hover:text-white">
            <CheckSquare className="h-5 w-5" />
            <span>Todo</span>
          </Link>
        </li>

        {/* Home Link */}
        <li>
          <Link href="/" className="flex flex-col items-center gap-1 text-xs font-medium text-zinc-400 transition-colors duration-200 hover:text-white">
            <House className="h-5 w-5" />
            <span>Home</span>
          </Link>
        </li>

        {/* History/Hourglass Link */}
        <li>
          <Link href="/hours" className="flex flex-col items-center gap-1 text-xs font-medium text-zinc-400 transition-colors duration-200 hover:text-white">
            <Hourglass className="h-5 w-5" />
            <span>Timer</span>
          </Link>
        </li>

        {/* Timer Link */}
        <li>
          <Link href="/timer" className="flex flex-col items-center gap-1 text-xs font-medium text-zinc-400 transition-colors duration-200 hover:text-white">
            <TimerIcon className="h-5 w-5" />
            <span>Focus</span>
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;