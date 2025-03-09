import { useQuery } from '@tanstack/react-query';
import { getTrainerList } from '../../../apis/bodyBuddy/profile';
import { TrainerListResponse } from '../../../apis/bodyBuddy/profile/types';

export const useTrainers = (gymId: number) => {
  return useQuery<TrainerListResponse["result"]>({
    queryKey: ['trainerList', gymId],
    queryFn: () => getTrainerList(gymId),
    retry: 0, 
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchInterval: false, 
  });
};
