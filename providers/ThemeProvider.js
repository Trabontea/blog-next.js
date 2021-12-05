import {ThemeContext, themes} from "../context/ThemeContext";
import React, {useState, useContext, useMemo} from 'react';

const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useState(themes.light);

  const toggleTheme = () => {
    setTheme(theme === themes.dark ? themes.light : themes.dark);
  }

  // a simple object that keep value that is passed to the context
  const themeAPI = useMemo(() =>{
    return {
      theme, toggleTheme
    }
  }, [ theme, toggleTheme])

  return (
      <ThemeContext.Provider value={themeAPI}>
        {children}
      </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext);

export default ThemeProvider;