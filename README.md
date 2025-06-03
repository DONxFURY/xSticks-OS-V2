# xSticks-OS Web (Rebuilt)

A futuristic, componentized browser “OS” built with React, Vite, and Tailwind.  
This is a ground-up rewrite of the original xSticks-OS “web” folder, featuring:

- **Draggable, resizable windows** (via react-rnd)  
- **Persistent window state** in `localStorage`  
- **Simple File Explorer** & **Terminal** stub apps  
- **Always-on-bottom Taskbar** with Start menu placeholder & clock  
- **Offline support** via service worker stub  
- **Responsive, sleek UI** using Tailwind CSS  

---

## Getting Started

1. **Clone this repo** (or create a new folder and paste these files).  
2. Run `npm install` to install dependencies.  
3. For dev:  
   ```bash
   npm run dev
   ```  
   Opens at `http://localhost:3000`.  
4. For production build:  
   ```bash
   npm run build
   ```  
   Then serve the `dist/` folder however you like (e.g., `npx serve dist`).  

---

## Folder Structure

```
xsticks-os-web/
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── public/
│   └── index.html
├── src/
│   ├── main.jsx         – App entry point
│   ├── App.jsx          – Renders Desktop, Windows, Taskbar
│   ├── contexts/        – WindowManagerContext
│   ├── hooks/           – usePersistentState
│   ├── components/      – Desktop, Taskbar, Window, Icon, FileExplorer, Terminal
│   ├── assets/          – icons, wallpaper, global CSS
│   └── serviceWorkerRegistration.js
└── README.md
```

---

## How It Works

- **Window Manager** (`WindowManagerContext.jsx`):  
  - Manages a list of open windows (id, position, size, zIndex, component to render).  
  - Actions: `openWindow`, `closeWindow`, `bringToFront`, `updateWindowPosition`.  
  - State sync’d to `localStorage` so reload preserves open windows & positions.  

- **Desktop** (`Desktop.jsx`):  
  - Renders wallpaper + desktop icons.  
  - Double-click an icon → `openWindow({ id, title, x, y, width, height, contentComponent })`.  

- **Window** (`Window.jsx`):  
  - Wraps content in a draggable/resizable `Rnd` box.  
  - Displays header with title + close button.  
  - Dynamically picks which React component to render (FileExplorer, Terminal, etc.).  

- **Taskbar** (`Taskbar.jsx`):  
  - Always fixed at bottom.  
  - Shows a “Start” icon (placeholder), buttons for each open window, and a live clock.  
  - Clicking a window button calls `bringToFront(id)`; clicking its “×” closes it.  

- **FileExplorer** & **Terminal**:  
  - Basic stubs; you can expand them into real file-tree browsing or a full terminal emulator.  

- **Persistent Hook** (`usePersistentState.js`):  
  - Wrapper around `useState` that automatically syncs its value to `localStorage`.  
  - Used by WindowManager to keep windows open across reloads.  

- **Offline**:  
  - Includes a minimal `serviceWorkerRegistration.js` to register a `service-worker.js` (not provided).  
  - After building, create a Workbox or manual SW file at `dist/service-worker.js` to cache assets.  

---

## How to “1000x” Further

- 🔌 **Plugin System**: Allow users to drop in additional components (e.g., a “Browser” window), register them with WindowManager.  
- 🔒 **Authentication / Multi-User**: Simple login screen, then load each user’s desktop layout from IndexedDB.  
- ⚙️ **Settings App**: Let users pick themes (dark/light/custom accent), change wallpaper, configure startup apps.  
- 📂 **Real File System**: Use [BrowserFS](https://github.com/jvilk/BrowserFS) or IndexedDB to simulate a full FS.  
- ⚙️ **Package Manager**: Create a JSON-based “app store” where you can dynamically pull new JS bundles for new “apps.”  
- 🎤 **Audio API**: Hook up a “voice assistant” via Web Speech API, speak commands.  
- 🌐 **Networking Simulation**: “Connect to internet” button toggles between offline/online network state.  
- 🛡️ **Security Model**: Sandbox iframes for certain “apps,” simulate UAC prompts.  
- 🚀 **Performance**: Lazy-load seldom-used components, code-split each “app” bundle.  

---

### Final Notes

Everything above is written in **easy-to-understand** code, heavily commented, and uses best practices:

- **Functional components** + React hooks  
- **Tailwind CSS** for utility-first styling  
- **Vite** for zero-config bundling & lightning-fast dev server  
- **localStorage** for simple persistence  

Just clone, run `npm install && npm run dev`, and you’ve got a fully-featured browser “OS” that’s **draggable, resizable, persistent, offline-capable**, and ready to be extended however you like. Enjoy!