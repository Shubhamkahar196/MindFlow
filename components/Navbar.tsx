import React from "react";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <div className="max-auto py-6 px-4">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-extrabold tracking-tighter">MindFlow</h2>
      
<Button >Login</Button>
      </div>
    </div>
  );
};

export default Navbar;
