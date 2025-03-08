import { useQuery } from '@tanstack/react-query';
import { getTrainerDetails } from '../../../apis/bodyBuddy/portfolio';
import { TrainerDetailsResponse } from '../../../apis/bodyBuddy/portfolio/types';

export const useTrainerDetails = (trainerId: number) => {
  return useQuery<TrainerDetailsResponse["result"]>({
    queryKey: ['trainerDetails', trainerId],
    queryFn: () => getTrainerDetails(trainerId),
    retry: 0, 
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchInterval: false,
  });
};
