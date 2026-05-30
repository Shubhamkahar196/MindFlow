import React from 'react'
import { House } from 'lucide-react';
import { Hourglass } from 'lucide-react';
import Image from 'next/image';
const Footer = () => {
  return (
    <div>
        
        <ul>
            <ol>
                <li>Todo</li>
                <li>
                    <House/>
                </li>
                <li>
                    <Hourglass/>
                </li>
                <li>Timer</li>

            </ol>
        </ul>
        
        </div>
  )
}

export default Footer