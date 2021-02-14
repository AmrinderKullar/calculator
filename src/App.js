import React, { useState } from 'react';
import './App.css';

import CalculatorPage from 'components/calculatorPage';

function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  const toggleTheme = _ => setDarkTheme(!darkTheme);
  return (
    <div className={`App ${darkTheme ? 'dark' : ''}`}>
      <div className={'theme-toggle-wrapper'}>
        <input type="checkbox" name='Dark theme' value={darkTheme} onChange={toggleTheme} />
        <label>Dark Theme</label>
      </div>
      <CalculatorPage />
    </div>
  );
}

export default App;
