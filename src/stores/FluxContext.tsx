import React, { createContext, useReducer, Dispatch, ReactNode } from "react";
import { initialState, reducer } from "./store";

// 상태 타입 정의
export type StateType = typeof initialState;

// 액션 타입 정의
export type ActionType =
    | { type: "INCREMENT_PROGRESS"; payload: number }
    | { type: "SET_LEVEL"; payload: number };

// Flux 컨텍스트 타입 정의
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
