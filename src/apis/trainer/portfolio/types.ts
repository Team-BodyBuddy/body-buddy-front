export type Portfolio = {
    title: string;
    description: string;
  };
  
export type UpdatePortfolioResponse = {
    isSuccess: boolean;
    code: string;
    message: string;
    result: {};
  };