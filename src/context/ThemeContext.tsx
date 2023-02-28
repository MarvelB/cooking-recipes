import { createContext, useReducer } from 'react';
import { ThemeContextModel } from 'types';

export enum ThemeActionKind {
    CHANGE_COLOR = 'CHANGE_COLOR',
};

interface ThemeAction {
    type: ThemeActionKind;
    payload: string;
}

const initialState: ThemeContextModel = {
    color: "blue"
}

const themeReducer = (state: ThemeContextModel, action: ThemeAction) => {
    let newState: ThemeContextModel = {...state};

    switch(action.type) {
        case ThemeActionKind.CHANGE_COLOR:
            newState = {...newState, color: action.payload}
    }

    return newState;
}

export const ThemeContext = createContext<{
    state: ThemeContextModel,
    dispatch: (color: string) => void
}>({state: initialState, dispatch: (color: string) => {}});

interface ThemeProviderProps {
    children: JSX.Element[] | JSX.Element;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {

    const [state, dispatch] = useReducer(themeReducer, initialState);

    const changeColor = (color: string) => {
        dispatch({ type: ThemeActionKind.CHANGE_COLOR, payload: color});
    }

    return (
        <ThemeContext.Provider value={{state: {...state}, dispatch: changeColor}}>
            {children}
        </ThemeContext.Provider>
    )
}