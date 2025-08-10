import { useContext } from 'react';
import { ThemeContext } from '../pages/_app';

export default function Navbar() {
  const { brightness, setBrightness, theme, setTheme } = useContext(ThemeContext);

  return (
    <nav className="navbar">
      <div className="slider-container">
        <label htmlFor="brightness">Brightness:</label>
        <input
          type="range"
          id="brightness"
          min="0.3"
          max="1.5"
          step="0.01"
          value={brightness}
          onChange={(e) => setBrightness(e.target.value)}
        />
      </div>
      <div className="theme-toggle">
        <label>
          <input
            type="checkbox"
            checked={theme === 'glass'}
            onChange={() => setTheme(theme === 'neon' ? 'glass' : 'neon')}
          />
          Glass Theme
        </label>
      </div>
      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          right: 0;
          z-index: 20;
          display: flex;
          align-items: center;
          gap: 15px;
          padding: 10px 20px;
          background: rgba(0,0,0,0.3);
          backdrop-filter: blur(10px);
          border-radius: 0 0 0 12px;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          color: var(--neon-red);
          user-select: none;
        }
        .slider-container label {
          margin-right: 8px;
          font-weight: 700;
          font-size: 0.9rem;
        }
        input[type='range'] {
          cursor: pointer;
          width: 100px;
          accent-color: var(--neon-red);
          background: transparent;
        }
        .theme-toggle label {
          cursor: pointer;
          font-size: 0.9rem;
          user-select: none;
          display: flex;
          align-items: center;
          gap: 5px;
        }
      `}</style>
    </nav>
  );
}
