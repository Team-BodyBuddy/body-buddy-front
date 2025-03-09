import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updatePortfolio } from "../../../apis/trainer/portfolio";
import { Portfolio } from "../../../apis/trainer/portfolio/types";

type UpdatePortfolioParams = {
  trainerId: number;
  portfolioId: number;
  data: Portfolio;
};

export const useUpdatePortfolio = () => {
  const queryClient = useQueryClient(); 

  return useMutation({
    mutationKey: ["updatePortfolio"], 
    mutationFn: async ({ trainerId, portfolioId, data }: UpdatePortfolioParams) => 
      updatePortfolio(trainerId, portfolioId, data), 

    onSuccess: (data) => {
      console.log(data);
      queryClient.invalidateQueries({ queryKey: ["portfolio"] }); 
    },
    
    onError: (error) => {
      console.error(error);
    },
  });
};
