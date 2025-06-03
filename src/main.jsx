import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './assets/styles/globals.css';
import { WindowManagerProvider } from './contexts/WindowManagerContext.jsx';
import * as serviceWorkerRegistration from './serviceWorkerRegistration.js';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <WindowManagerProvider>
      <App />
    </WindowManagerProvider>
  </React.StrictMode>
);

// Register service worker for offline support
serviceWorkerRegistration.register();