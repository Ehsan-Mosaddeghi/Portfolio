import { HiMoon, HiSun } from "react-icons/hi2";
import { useDarkMode } from "../context/DarkModeContext";
import { useEffect } from "react";

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark-mode");
      document.documentElement.classList.remove("light-mode");
    } else {
      document.documentElement.classList.remove("dark-mode");
      document.documentElement.classList.add("light-mode");
    }
  }, [isDarkMode]);

  return (
    <button onClick={toggleDarkMode} className="text-xl">
      {isDarkMode ? (
        <HiSun className="hover:text-yellow-300" />
      ) : (
        <HiMoon className="hover:text-blue-600" />
      )}
    </button>
  );
}

export default DarkModeToggle;
