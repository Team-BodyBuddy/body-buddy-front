import { TrainerListResponse } from './types';

export const mockTrainerList: TrainerListResponse = {
  isSuccess: false,
  code: "MOCK_DATA",
  message: "Failed to fetch trainers, returning mock data.",
  result: [
    {
      id: 1,
      realName: "김민수",
      age: 30,
    },
    {
      id: 2,
      realName: "박지훈",
      age: 35,
    },
    {
      id: 3,
      realName: "이준호",
      age: 28,
    },
    {
      id: 4,
      realName: "최성민",
      age: 40,
    },
    {
      id: 5,
      realName: "정우성",
      age: 32,
    },
    {
      id: 6,
      realName: "강민호",
      age: 29,
    },
    {
      id: 7,
      realName: "조현우",
      age: 45,
    },
    {
      id: 8,
      realName: "윤태민",
      age: 33,
    },
    {
      id: 9,
      realName: "오상혁",
      age: 38,
    },
    {
      id: 10,
      realName: "배경호",
      age: 27,
    },
  ],
};
