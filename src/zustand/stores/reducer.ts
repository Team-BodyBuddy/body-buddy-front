import { initialState, StateType } from "./initialState";
import { Action, ActionTypes } from "./actions";

export const reducer = (state: StateType = initialState, action: Action): StateType => {
  switch (action.type) {
    case ActionTypes.INCREMENT_PROGRESS: {
      const newProgress = state.progress + action.payload;
      if (newProgress >= 100) {
        return {
          ...state,
          level: state.level + 1,
          progress: newProgress - 100,
        };
      }
      return { ...state, progress: newProgress };
    }
    case ActionTypes.SET_LEVEL:
      return { ...state, level: action.payload };
    case ActionTypes.UPDATE_METABOLIC_RATE: {
      const newHistory = [...state.metabolicRate.history, parseFloat(action.payload.value)];
      return {
        ...state,
        metabolicRate: {
          ...state.metabolicRate,
          value: action.payload.value,
          trend: action.payload.trend,
          history: newHistory.slice(-10),
        },
      };
    }
    case ActionTypes.UPDATE_WEIGHT: {
      const newHistory = [...state.weight.history, parseFloat(action.payload.value)];
      return {
        ...state,
        weight: {
          ...state.weight,
          value: action.payload.value,
          trend: action.payload.trend,
          history: newHistory.slice(-10),
        },
      };
    }
    default:
      return state;
  }
};
