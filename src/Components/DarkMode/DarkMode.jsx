import { useState, useEffect } from 'react';
import sunIcon from '../../assets/sun.svg';
import moonIcon from '../../assets/moon.svg';
import './DarkMode.css';

const DarkMode = () => {
  const [darkMode, setDarkMode] = useState(() => {
    // Retrieve the mode from local storage or default to false (light mode)
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : false;
  });

  // Update local storage when mode changes
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  // Apply dark mode class to body on mount if dark mode is enabled
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  return (
    <div>
      <input className="darkmode-toggle" type="checkbox" id="darkmode-toggle" checked={darkMode} onChange={toggleDarkMode} />
      <label className="darkmode-label" htmlFor="darkmode-toggle">
        <img src={sunIcon} alt="Sun" className="sun-icon" />
        <img src={moonIcon} alt="Moon" className="moon-icon" />
      </label>
    </div>
  );
};

export default DarkMode;
