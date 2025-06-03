import React from 'react';
import Icon from './Icon.jsx';
import { useWindowManager } from '../contexts/WindowManagerContext.jsx';

// Sample list of icons (could come from JSON)
const ICONS = [
  {
    id: 'file-explorer',
    title: 'File Explorer',
    iconSrc: '/assets/icons/folder.svg',
    component: 'FileExplorer'
  },
  {
    id: 'terminal',
    title: 'Terminal',
    iconSrc: '/assets/icons/terminal.svg',
    component: 'Terminal'
  }
];

export default function Desktop() {
  const { openWindow } = useWindowManager();

  const handleOpen = (icon) => {
    openWindow({
      id: `${icon.id}-${Date.now()}`,
      title: icon.title,
      x: 100 + Math.random() * 200,
      y: 100 + Math.random() * 200,
      width: 600,
      height: 400,
      contentComponent: icon.component
    });
  };

  return (
    <div
      className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
      style={{
        backgroundImage: `url('/assets/styles/wallpaper.jpg')`
      }}
    >
      <div className="p-4 flex flex-wrap gap-6">
        {ICONS.map((icon) => (
          <Icon
            key={icon.id}
            title={icon.title}
            src={icon.iconSrc}
            onDoubleClick={() => handleOpen(icon)}
          />
        ))}
      </div>
    </div>
  );
}