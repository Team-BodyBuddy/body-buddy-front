export type Trainer = {
    id: number;
    realName: string;
    age: number;
  };
  
  export type TrainerListResponse = {
    isSuccess: boolean;
    code: string;
    message: string;
    result: Trainer[];
  };
  