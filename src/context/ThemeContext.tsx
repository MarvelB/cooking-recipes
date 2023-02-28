import { createContext } from 'react';
import { ThemeContextModel } from 'types';

export const ThemeContext = createContext<ThemeContextModel | null>(null);

interface ThemeProviderProps {
    children: JSX.Element[] | JSX.Element;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    return (
        <ThemeContext.Provider value={{color: "blue"}}>
            {children}
        </ThemeContext.Provider>
    )
}