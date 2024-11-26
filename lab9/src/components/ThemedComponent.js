import React, { useContext } from 'react';
import { ThemeContext } from './../ThemeContext';

const ThemedComponent = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const style = {
    backgroundColor: theme === 'light' ? '#fff' : '#333',
    color: theme === 'light' ? '#000' : '#fff',
    padding: '20px',
    textAlign: 'center',
    borderRadius: '8px',
    transition: 'background-color 0.3s, color 0.3s',
  };

  return (
    <div style={style}>
      <h2>Aktualny motyw: {theme}</h2>
      <button onClick={toggleTheme}>Zmień motyw</button>
    </div>
  );
};

export default ThemedComponent;
