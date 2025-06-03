import React from 'react';

const MOCK_FILES = [
  { name: 'Documents', type: 'folder' },
  { name: 'Pictures', type: 'folder' },
  { name: 'Notes.txt', type: 'file' },
  { name: 'Thanks.md', type: 'file' }
];

export default function FileExplorer() {
  return (
    <div className="text-gray-900">
      <h2 className="font-semibold mb-2">File Explorer</h2>
      <ul className="space-y-1">
        {MOCK_FILES.map((f, idx) => (
          <li key={idx} className="flex items-center p-1 rounded hover:bg-gray-100">
            {f.type === 'folder' ? '📁' : '📄'}
            <span className="ml-2">{f.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}