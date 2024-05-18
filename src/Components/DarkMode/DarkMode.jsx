
import { useState } from 'react';
import sunIcon from '../../assets/sun.svg';
import moonIcon from '../../assets/moon.svg';
import './DarkMode.css';

const DarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  };

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
