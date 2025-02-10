import './Accessibility.css'
import { useEffect, useState } from 'react';


export const Accessibility = () => {
  const storedTheme = localStorage.getItem("selectedTheme") || "dark";
  const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem("selectedTheme") !== "light");
    
  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

    useEffect(() => {
      if (!isDarkMode) {
        document.body.classList.add("dark-mode");
        localStorage.setItem("selectedTheme", "dark");
      } else {
        document.body.classList.remove("dark-mode");
        localStorage.setItem("selectedTheme", "light");
      }
    }, [isDarkMode]);

    return (
        <div className="dark_mode">
        <input
          className="dark_mode_input"
          type="checkbox"
          id="darkmode-toggle"
          onChange={toggleTheme}
          checked={isDarkMode}
        />
  
        <label className="dark_mode_label" htmlFor="darkmode-toggle">
        </label>
      </div>
    )
}