import React, { useRef } from 'react';
import { Rnd } from 'react-rnd';
import { useWindowManager } from '../contexts/WindowManagerContext.jsx';
import FileExplorer from './FileExplorer.jsx';
import Terminal from './Terminal.jsx';

const COMPONENT_MAP = {
  FileExplorer,
  Terminal
};

export default function Window({
  id,
  title,
  x,
  y,
  width,
  height,
  zIndex,
  contentComponent
}) {
  const { bringToFront, closeWindow, updateWindowPosition } =
    useWindowManager();
  const nodeRef = useRef();

  const onDragStop = (e, d) => {
    updateWindowPosition(id, { x: d.x, y: d.y });
  };

  const onResizeStop = (_e, _dir, ref, _delta, position) => {
    updateWindowPosition(id, {
      width: parseInt(ref.style.width, 10),
      height: parseInt(ref.style.height, 10),
      x: position.x,
      y: position.y
    });
  };

  const ContentComponent = COMPONENT_MAP[contentComponent] || null;

  return (
    <Rnd
      nodeRef={nodeRef}
      size={{ width, height }}
      position={{ x, y }}
      bounds="parent"
      style={{
        zIndex,
        boxShadow: '0 8px 16px rgba(0,0,0,0.4)'
      }}
      onDragStart={() => bringToFront(id)}
      onDragStop={onDragStop}
      onResizeStart={() => bringToFront(id)}
      onResizeStop={onResizeStop}
    >
      <div
        ref={nodeRef}
        className="flex flex-col bg-os-window border border-gray-700 rounded"
      >
        {/* Window header */}
        <div
          className="flex justify-between items-center bg-gray-800 text-white px-2 py-1 cursor-move select-none"
          onMouseDown={() => bringToFront(id)}
        >
          <span className="text-sm">{title}</span>
          <button
            onClick={() => closeWindow(id)}
            className="w-5 h-5 flex items-center justify-center hover:bg-red-600 rounded"
          >
            ×
          </button>
        </div>

        {/* Window content area */}
        <div className="flex-1 bg-white overflow-auto p-2">
          {ContentComponent && <ContentComponent />}
        </div>
      </div>
    </Rnd>
  );
}