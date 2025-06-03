import React, { useEffect, useState } from 'react';
import { useWindowManager } from '../contexts/WindowManagerContext.jsx';
import { FiMenu } from 'react-icons/fi';

export default function Taskbar() {
  const { windows, bringToFront, closeWindow } = useWindowManager();
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString()
  );

  // Update clock every 30 seconds
  useEffect(() => {
    const id = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 30000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="absolute bottom-0 left-0 w-full flex items-center bg-gray-900 h-10 px-2">
      {/* Start button */}
      <button
        className="w-8 h-8 flex items-center justify-center text-white hover:bg-gray-700 rounded"
      >
        <FiMenu size={20} />
      </button>

      {/* Open window buttons */}
      <div className="flex-1 flex space-x-1 px-2">
        {windows.map((win) => (
          <button
            key={win.id}
            onClick={() => bringToFront(win.id)}
            className="bg-gray-800 text-white text-xs px-2 py-1 rounded hover:bg-gray-700 flex items-center"
          >
            {win.title}
            <span
              onClick={(e) => {
                e.stopPropagation();
                closeWindow(win.id);
              }}
              className="ml-1 hover:text-red-500"
            >
              ×
            </span>
          </button>
        ))}
      </div>

      {/* Clock */}
      <div className="text-white text-xs px-3">
        {currentTime}
      </div>
    </div>
  );
}