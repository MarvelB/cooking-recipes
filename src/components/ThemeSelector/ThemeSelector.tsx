import useTheme from "hooks/useTheme";
import "./ThemeSelector.css";
 // @ts-ignore: Cannot find module
import modeIcon from "assets/mode-icon.svg";

interface ThemeSelectorProps {}

const themeColors = ["#58249c", "#249c6b", "#b70233"];

const ThemeSelector = ({ }: ThemeSelectorProps) => {

  const { changeColor, changeTheme, state } = useTheme();

  const handleToggleTheme = () => {
    changeTheme(state.mode === "dark" ? "light" : "dark");
  }

  return (
    <div className="theme-selector">

      <div className="theme-toggle">
        <img
          src={modeIcon}
          onClick={handleToggleTheme}
          alt="dark/light theme toggle icon"
          style={{ filter: state.mode === "dark" ? "invert(100%)" : "invert(20%)"}}
        />
      </div>

      <div className="theme-buttons">
        {themeColors.map(theme => (
          <div
            key={theme}
            onClick={() => changeColor(theme)}
            style={{background: theme}}
          />
        ))}
      </div>
    </div>
  );
}

export default ThemeSelector;
