import React, { createContext, useContext, useState, useCallback } from 'react';
import usePersistentState from '../hooks/usePersistentState';

const WindowManagerContext = createContext();

export function useWindowManager() {
  return useContext(WindowManagerContext);
}

export function WindowManagerProvider({ children }) {
  // Keep track of windows: { id, title, x, y, width, height, zIndex, contentComponent }
  const [windows, setWindows] = usePersistentState('xsticks-windows', []);

  // Global z-index counter
  const [zCounter, setZCounter] = useState(1);

  const openWindow = useCallback((windowObj) => {
    setWindows((prev) => [
      ...prev,
      { ...windowObj, zIndex: zCounter }
    ]);
    setZCounter((z) => z + 1);
  }, [zCounter, setWindows]);

  const closeWindow = useCallback((id) => {
    setWindows((prev) => prev.filter((w) => w.id !== id));
  }, [setWindows]);

  const bringToFront = useCallback((id) => {
    setWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, zIndex: zCounter } : w))
    );
    setZCounter((z) => z + 1);
  }, [zCounter, setWindows]);

  const updateWindowPosition = useCallback((id, newPos) => {
    setWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, ...newPos } : w))
    );
  }, [setWindows]);

  return (
    <WindowManagerContext.Provider
      value={{
        windows,
        openWindow,
        closeWindow,
        bringToFront,
        updateWindowPosition
      }}
    >
      {children}
    </WindowManagerContext.Provider>
  );
}