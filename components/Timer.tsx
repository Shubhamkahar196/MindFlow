"use client";
import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { formatTimer } from "@/lib/formatTimer";

const Timer = () => {
  const [time, setTime] = useState(1500);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isRunning) {
      interval = setInterval(() => {
        setTime((prev) => {
          if (prev <= 0) {
            clearInterval(interval);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  return (
    <div className="mt-50 flex flex-col items-center">
      <p className="text-9xl font-bold">{formatTimer(time)}</p>

      <div className="flex gap-4 mt-4">
        <Button onClick={() => setIsRunning(true)}>Start</Button>
        <Button onClick={() => setIsRunning(false)}>Pause</Button>
      </div>
    </div>
  );
};

export default Timer;