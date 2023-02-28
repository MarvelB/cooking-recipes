import { ThemeContext } from "context/ThemeContext";
import { useContext } from "react";
import { ThemeContextModel } from "types";

const useTheme = () => {

    const context = useContext<ThemeContextModel | null>(ThemeContext) as ThemeContextModel;

    if (context === null) {
        throw new Error("useTheme() must be used inside a ThemeProvider");
    }

    return context;
}

export default useTheme;