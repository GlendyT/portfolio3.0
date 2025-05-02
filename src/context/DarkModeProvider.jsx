import { createContext, useEffect, useState } from "react";

export const DarkModeContext = createContext(null);

const DarkModeProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.theme);
  const colorTheme = theme === "dark" ? "light" : "dark";
  const [darkSide, setDarkSide] = useState(
    colorTheme === "light" ? true : "false"
  );

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);

    localStorage.setItem("theme", theme);
  }, [theme, colorTheme]);

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };

  return (
    <DarkModeContext.Provider
      value={{ theme, setTheme, colorTheme, darkSide, toggleDarkMode }}
    >
      {children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeProvider;
