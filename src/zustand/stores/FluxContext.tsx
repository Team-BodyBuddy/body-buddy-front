import React, { createContext, useReducer, Dispatch, ReactNode } from "react";
import { initialState } from "./initialState";
import { reducer } from "./reducer";

export type StateType = typeof initialState;

export type ActionType =
    | { type: "INCREMENT_PROGRESS"; payload: number }
    | { type: "SET_LEVEL"; payload: number };

interface FluxContextType {
    state: StateType;
    dispatch: Dispatch<ActionType>;
}

export const FluxContext = createContext<FluxContextType | null>(null);

interface FluxProviderProps {
    children: ReactNode;
}

export const FluxProvider: React.FC<FluxProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <FluxContext.Provider value={{ state, dispatch }}>
            {children}
        </FluxContext.Provider>
    );
};
