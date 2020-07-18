import React, { useContext } from 'react'
import { DarkModeContext } from "./DarkModeContext";
import $ from 'jquery'



export default function Navbar() {

    const [isDarkMode, setMode] = useContext(DarkModeContext)

     const toogleMode = () => {
       $(".sw").toggleClass("swOn");
       setMode(!isDarkMode);

       localStorage.setItem("isDarkMode", !isDarkMode);
     };

     const addDarkMode = () => {
       $(".sw").addClass("swOn");
       setMode(true);
       localStorage.setItem("isDarkMode", true);
     };

     const addLightMode = () => {
       $(".sw").removeClass("swOn");
       setMode(false);
       localStorage.setItem("isDarkMode", false);
     };
    
    return (
      <div className={isDarkMode ? "navbarDark navbar" : "navbar"}>
        <h1>React App</h1>

        <div className="btnMode">
          <span role="img" onClick={addLightMode}>
            🌞
          </span>
          <div className="switch_toggle" onClick={toogleMode}>
            <div id="sw" className={isDarkMode ? "swOn  sw" : "sw"}></div>
          </div>
          <span role="img" onClick={addDarkMode}>
            🌚
          </span>
        </div>
      </div>
    );
}