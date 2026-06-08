import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const Navbar = () => {
  return (
  
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-900/60 bg-slate-950/20 backdrop-blur-md">
    
      <div className="max-w-7xl mx-auto py-4 px-6 flex items-center justify-between w-full">
        
       
        <Link href="/" className="text-3xl font-extrabold tracking-tighter text-white hover:opacity-90 transition">
          MindFlow
        </Link>
      
        <Button 
          variant="outline" 
          className="font-bold text-base border-2 bg-blue-600 hover:bg-blue-500 text-white py-2 px-6 cursor-pointer rounded-xl transition duration-200"
        >
          Login
        </Button>

      </div>
    </nav>
  );
};

export default Navbar;