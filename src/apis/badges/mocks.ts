import { TrainerBadgesResponse } from "./types";

export const MOCK_TRAINER_BADGES: TrainerBadgesResponse = {
  isSuccess: true,
  code: "MOCK_SUCCESS",
  message: "This is mock data",
  result: [
    {
      id: 1,
      badgeName: "전문가",
      badgeDescription: "Achieved expert level",
      iconUrl: "",
    },
    {
      id: 2,
      badgeName: "금메달",
      badgeDescription: "Won a gold medal",
      iconUrl: "",
    },
    {
        id: 3,
        badgeName: "숙련가",
        badgeDescription: "Skilled Badges",
        iconUrl: "",
      },
  ],
};
