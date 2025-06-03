import React, { useState, useRef, useEffect } from 'react';

export default function Terminal() {
  const [history, setHistory] = useState([]);
  const [input, setInput] = useState('');
  const bottomRef = useRef();

  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      setHistory((h) => [...h, { cmd: input, out: `You typed: ${input}` }]);
      setInput('');
    }
  };

  // Scroll to bottom on new output
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  return (
    <div className="h-full flex flex-col font-mono text-sm bg-black text-white p-2 rounded">
      <div className="flex-1 overflow-auto">
        {history.map((item, idx) => (
          <div key={idx}>
            <div>
              <span className="text-green-400">user@xsticks:~$</span> {item.cmd}
            </div>
            <div>{item.out}</div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>
      <div className="mt-2">
        <span className="text-green-400">user@xsticks:~$</span>{' '}
        <input
          className="bg-transparent focus:outline-none w-3/4"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleEnter}
          autoFocus
        />
      </div>
    </div>
  );
}