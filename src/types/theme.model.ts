import ThemeOptions from "./theme.enum";

export interface ThemeContextModel {
    state: ThemeState;
    changeColor: (color: string) => void;
    changeTheme: (mode: ThemeOptions) => void;
}

export interface ThemeState {
    color: string;
    mode: ThemeOptions;
}