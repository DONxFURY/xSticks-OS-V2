import React from 'react';

export default function Icon({ title, src, onDoubleClick }) {
  return (
    <div
      className="w-16 flex flex-col items-center cursor-pointer select-none"
      onDoubleClick={onDoubleClick}
    >
      <img
        src={src}
        alt={title}
        className="w-12 h-12 mb-1 hover:scale-110 transition-transform"
      />
      <span className="text-xs text-white text-center break-words">
        {title}
      </span>
    </div>
  );
}