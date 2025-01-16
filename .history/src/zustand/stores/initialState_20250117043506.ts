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