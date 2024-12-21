// 상태 초기값 타입 정의
export const initialState = {
  level: 4, // 현재 레벨
  progress: 50, // 현재 경험치 게이지 퍼센트
  points: 12765, // 포인트
  metabolicRate: {
      label: "기초대사량",
      value: "1153 kcal",
      trend: "up",
      history: [1130, 1120, 1140, 1153],
  },
  weight: {
      label: "몸무게",
      value: "52kg",
      trend: "down", 
      history: [52.0, 54.0, 53.0, 52.0]
  },
};

// 상태 타입 정의
export type StateType = typeof initialState;

// 액션 타입 정의
export const ActionTypes = {
  INCREMENT_PROGRESS: "INCREMENT_PROGRESS",
  SET_LEVEL: "SET_LEVEL",
  UPDATE_METABOLIC_RATE: "UPDATE_METABOLIC_RATE",
  UPDATE_WEIGHT: "UPDATE_WEIGHT",
  ADD_METABOLIC_RATE_POINT: "ADD_METABOLIC_RATE_POINT", // 새로운 그래프 데이터
  ADD_WEIGHT_POINT: "ADD_WEIGHT_POINT", // 새로운 그래프 데이터
} as const;

export type Action =
  | { type: typeof ActionTypes.INCREMENT_PROGRESS; payload: number }
  | { type: typeof ActionTypes.SET_LEVEL; payload: number }
  | {
        type: typeof ActionTypes.UPDATE_METABOLIC_RATE;
        payload: { value: string; trend: "up" | "down" };
    }
  | {
        type: typeof ActionTypes.UPDATE_WEIGHT;
        payload: { value: string; trend: "up" | "down" };
    }
  | {
        type: typeof ActionTypes.ADD_METABOLIC_RATE_POINT;
        payload: number; // 새 데이터 포인트
    }
  | {
        type: typeof ActionTypes.ADD_WEIGHT_POINT;
        payload: number; // 새 데이터 포인트
    };

// 액션 생성자
export const incrementProgress = (value: number): Action => ({
  type: ActionTypes.INCREMENT_PROGRESS,
  payload: value,
});

export const setLevel = (level: number): Action => ({
  type: ActionTypes.SET_LEVEL,
  payload: level,
});

export const updateMetabolicRate = (value: string, trend: "up" | "down"): Action => ({
  type: ActionTypes.UPDATE_METABOLIC_RATE,
  payload: { value, trend },
});

export const updateWeight = (value: string, trend: "up" | "down"): Action => ({
  type: ActionTypes.UPDATE_WEIGHT,
  payload: { value, trend },
});

export const addMetabolicRatePoint = (point: number): Action => ({
  type: ActionTypes.ADD_METABOLIC_RATE_POINT,
  payload: point,
});

export const addWeightPoint = (point: number): Action => ({
  type: ActionTypes.ADD_WEIGHT_POINT,
  payload: point,
});

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
      return {
        ...state,
        progress: newProgress,
      };
    }
    case ActionTypes.SET_LEVEL:
      return {
        ...state,
        level: action.payload,
      };
    case ActionTypes.UPDATE_METABOLIC_RATE: {
      const newHistory = [...state.metabolicRate.history, parseFloat(action.payload.value)];
      return {
        ...state,
        metabolicRate: {
          ...state.metabolicRate,
          value: action.payload.value,
          trend: action.payload.trend,
          history: newHistory.slice(-10), // 최근 10개 데이터만 유지
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
          history: newHistory.slice(-10), // 최근 10개 데이터만 유지
        },
      };
    }
    default:
      return state;
  }
};

