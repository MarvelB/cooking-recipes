import { ThemeContext } from "context/ThemeContext";
import { useContext } from "react";
import { ThemeContextModel } from "types";

const useTheme = () => {

    const context = useContext<{
        state: ThemeContextModel,
        dispatch: (color: string) => void
    }>(ThemeContext);

    if (context === null) {
        throw new Error("useTheme() must be used inside a ThemeProvider");
    }

    return context;
}

export default useTheme;