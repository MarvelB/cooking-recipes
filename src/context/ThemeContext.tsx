import { createContext, useReducer } from 'react';
import { ThemeContextModel, ThemeState } from 'types';

export enum ThemeActionKind {
    CHANGE_COLOR = 'CHANGE_COLOR',
    CHANGE_MODE = 'CHANGE_MODE',    
};

interface ThemeAction {
    type: ThemeActionKind;
    payload: string;
}

const initialState: ThemeState = {
    color: "#58249c",
    mode: "dark",
}

const initialContextState: ThemeContextModel =  {
    state: initialState,
    changeColor: (color: string) => {},
    changeTheme: (mode: string) => {},
}

const themeReducer = (state: ThemeContextModel, action: ThemeAction) => {
    let newState: ThemeContextModel = {...state};

    switch(action.type) {
        case ThemeActionKind.CHANGE_COLOR:
            newState.state = {...newState.state, color: action.payload};
            break;
        case ThemeActionKind.CHANGE_MODE:
            newState.state = {...newState.state, mode: action.payload};
            break;
    }

    return newState;
}

export const ThemeContext = createContext<ThemeContextModel>(initialContextState);

interface ThemeProviderProps {
    children: JSX.Element[] | JSX.Element;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {

    const [state, dispatch] = useReducer(themeReducer, initialContextState);

    const changeColor = (color: string) => {
        dispatch({ type: ThemeActionKind.CHANGE_COLOR, payload: color});
    }

    const changeTheme = (mode: string) => {
        dispatch({type: ThemeActionKind.CHANGE_MODE, payload: mode})
    }

    return (
        <ThemeContext.Provider value={{state: {...state.state}, changeColor, changeTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}