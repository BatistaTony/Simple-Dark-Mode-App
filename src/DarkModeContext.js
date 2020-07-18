import React, { createContext, useState, useEffect } from "react";
import $ from 'jquery'


export const DarkModeContext = createContext();

export const DarkModeProvider = (props) => {

  const [isDarkMode, setMode] = useState(false);

     useEffect(() => {
       const mode = JSON.parse(localStorage.getItem("isDarkMode"));

       setMode(mode);

       if (mode) {
         $(".sw").addClass("swOn");
       } else {
         $(".sw").removeClass("swOn");
       }
     }, [isDarkMode]);


  return (
    <DarkModeContext.Provider value={[isDarkMode, setMode]}>
      {props.children}
    </DarkModeContext.Provider>
  );
};
