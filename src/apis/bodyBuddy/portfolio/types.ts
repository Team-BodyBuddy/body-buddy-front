export type Badge = {
    id: number;
    badgeName: string;
    badgeDescription: string;
    iconUrl: string;
  };
  
  export type Portfolio = {
    id: number;
    title: string;
    description: string;
  };
  
  export type Member = {
    id: number;
    nickname: string;
  };
  
  export type TrainerDetails = {
    id: number;
    realName: string;
    age: number;
    gender: "MALE" | "FEMALE";
    height: number;
    weight: number;
    region: string;
    gymName: string;
    badges: Badge[];
    portfolios: Portfolio[];
    members: Member[];
  };
  
  export type TrainerDetailsResponse = {
    isSuccess: boolean;
    code: string;
    message: string;
    result: TrainerDetails;
  };
  