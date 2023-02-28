import useTheme from "hooks/useTheme";
import "./ThemeSelector.css";

interface ThemeSelectorProps {}

const themeColors = ["#58249c", "#249c6b", "#b70233"];

const ThemeSelector = ({ }: ThemeSelectorProps) => {

  const { dispatch } = useTheme();

  return (
    <div className="theme-selector">
      <div className="theme-buttons">
        {themeColors.map(theme => (
          <div
            key={theme}
            onClick={() => dispatch(theme)}
            style={{background: theme}}
          />
        ))}
      </div>
    </div>
  );
}

export default ThemeSelector;
