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
