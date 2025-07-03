import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

/**
 * PUBLIC_INTERFACE
 * App component for Notes Frontend. Implements glassmorphism, theme toggle, and an accessible Add Note button.
 */
function App() {
  const [theme, setTheme] = useState('light');

  // Effect to apply theme to document element for both themes
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // PUBLIC_INTERFACE
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // PUBLIC_INTERFACE
  const handleAddNote = () => {
    // Stub: Function for adding a note (to be implemented with actual note logic)
    alert('Add new note action!');
  };

  return (
    <div className="App">
      <header className="App-header glassy">
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
        </button>
        <div className="logo-glass-container">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <p className="subtitle">Create, edit, and manage your notes in style.</p>
        <button
          className="add-note-btn"
          onClick={handleAddNote}
          aria-label="Add new note"
        >
          <span className="add-icon" aria-hidden="true">+</span>
          <span className="btn-label">Add New Note</span>
        </button>
        <p className="theme-indicator">
          Current theme: <strong>{theme}</strong>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
