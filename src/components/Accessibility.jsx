import './Accessibility.css'
import { useEffect } from 'react';


export const Accessibility = () => {
    const selectedTheme = localStorage.getItem("selectedTheme");
    
    const setDarkTheme = () => {
        document.querySelector("body").style.backgroundColor ="#1c1c3d";
        document.querySelectorAll("h1, h2, h3, h4, h5, h6, p, b, label").forEach(el => {
            if (!el.closest(".movieTimesTicket, .movieTimes, buyTicket p")) {
                el.style.color = "white";
            }
        });
        localStorage.setItem("selectedTheme", "dark");
      };
    const setLightTheme = () => {
        document.querySelector("body").style.backgroundColor ="white";
        document.querySelectorAll("h1, h2, h3, h4, h5, h6, p, b, label").forEach(el => {
            if (!el.closest(".movieTimesTicket, .movieTimes, buyTicket p")) {
                el.style.color = "black";
            }
        });
        localStorage.setItem("selectedTheme", "light");
    };

    useEffect(() => {
        if (selectedTheme === "light") {
            setLightTheme();
        } else {
            setDarkTheme();
        }
    }, []);

      const toggleTheme = (e) => {
        if (e.target.checked) {
          setDarkTheme();
        } else {
          setLightTheme();
        }
      };

    return (
        <div className="dark_mode">
        <input
          className="dark_mode_input"
          type="checkbox"
          id="darkmode-toggle"
          onChange={toggleTheme}
          defaultChecked={selectedTheme !== "light"}
        />
  
        <label className="dark_mode_label" htmlFor="darkmode-toggle">
        </label>
      </div>
    )
}