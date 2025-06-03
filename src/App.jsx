import React from 'react';
import Desktop from './components/Desktop.jsx';
import Taskbar from './components/Taskbar.jsx';
import { useWindowManager } from './contexts/WindowManagerContext.jsx';

export default function App() {
  const { windows } = useWindowManager();

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Desktop background + icons */}
      <Desktop />

      {/* Render all open windows */}
      {windows.map((win) => (
        <Window key={win.id} {...win} />
      ))}

      {/* Always-on-bottom taskbar */}
      <Taskbar />
    </div>
  );
}