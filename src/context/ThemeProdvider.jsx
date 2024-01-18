import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({children}) => {
  const themeState = window.localStorage.getItem('theme');

  const [themeMode, setThemeMode] = useState(themeState ? themeState : 'light');

  useEffect(() => {
    window.localStorage.setItem('theme', themeMode);
  }, [themeMode]);

  return (
    <ThemeContext.Provider value={{ themeMode, setThemeMode}}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider;