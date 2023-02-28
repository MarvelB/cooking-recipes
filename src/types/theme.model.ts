export interface ThemeContextModel {
    state: ThemeState;
    changeColor: (color: string) => void;
    changeTheme: (mode: string) => void;
}

export interface ThemeState {
    color: string;
    mode: string;
}