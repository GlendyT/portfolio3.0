import { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeProvider";
import { DarkModeSwitch } from "react-toggle-dark-mode";

const Switcher = () => {
  const { darkSide, toggleDarkMode } = useContext(DarkModeContext);
  return (
    <div className="flex items-center justify-center max-sm:w-4 w-4">
      <DarkModeSwitch checked={darkSide} onChange={toggleDarkMode} />
    </div>
  );
};

export default Switcher;

