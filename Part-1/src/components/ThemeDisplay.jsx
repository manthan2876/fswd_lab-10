import { useTheme } from "../context/ThemeContext";
import "./ThemeDisplay.css";

const ThemeDisplay = () => {
  const { isDark } = useTheme();

  return (
    <div className={`container ${isDark ? "dark" : "light"}`}>
      <h1>Theme Switcher App</h1>
      <p>Current theme: {isDark ? "Dark" : "Light"}</p>
    </div>
  );
};

export default ThemeDisplay;
