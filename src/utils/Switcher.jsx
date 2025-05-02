import { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeProvider";
import { DarkModeSwitch } from "react-toggle-dark-mode";

const Switcher = () => {
  const { darkSide, toggleDarkMode } = useContext(DarkModeContext);
  return (
    <div className="flex items-center justify-center">
      <DarkModeSwitch checked={darkSide} onChange={toggleDarkMode} />
    </div>
  );
};

export default Switcher;
