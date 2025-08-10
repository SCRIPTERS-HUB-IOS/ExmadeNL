import '../styles/globals.css';
import { useState, useEffect, createContext } from 'react';

export const ThemeContext = createContext();

export default function App({ Component, pageProps }) {
  const [brightness, setBrightness] = useState(1);
  const [theme, setTheme] = useState('neon'); // neon or glass

  useEffect(() => {
    document.documentElement.style.setProperty('--brightness', brightness);
    document.documentElement.setAttribute('data-theme', theme);
  }, [brightness, theme]);

  return (
    <ThemeContext.Provider value={{ brightness, setBrightness, theme, setTheme }}>
      <Component {...pageProps} />
    </ThemeContext.Provider>
  );
}
