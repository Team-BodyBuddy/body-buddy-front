export type TrainerBadge = {
    id: number;
    badgeName: string;
    badgeDescription: string;
    iconUrl: string;
  };
  
  export type TrainerBadgesResponse = {
    isSuccess: boolean;
    code: string;
    message: string;
    result: TrainerBadge[];
  };
  