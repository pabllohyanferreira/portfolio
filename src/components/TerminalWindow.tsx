import React from 'react';
import './TerminalWindow.css';

const TerminalWindow: React.FC = () => {
  return (
    <div className="terminal-window">
      <div className="terminal-header">
        <div className="terminal-buttons">
          <div className="terminal-button close"></div>
          <div className="terminal-button minimize"></div>
          <div className="terminal-button maximize"></div>
        </div>
        <div className="terminal-title">terminal</div>
      </div>
      <div className="terminal-body">
        <div className="terminal-line">
          <span className="terminal-prompt">$</span>
          <span className="terminal-command">npm run dev</span>
        </div>
        <div className="terminal-line">
          <span className="terminal-output">Server running on port 3000</span>
        </div>
        <div className="terminal-line">
          <span className="terminal-prompt">$</span>
          <span className="terminal-cursor">_</span>
        </div>
      </div>
    </div>
  );
};

export default TerminalWindow;
