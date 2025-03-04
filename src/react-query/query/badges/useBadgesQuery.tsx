import { useQuery } from "@tanstack/react-query";
import { getTrainerBadges } from "../../../apis/badges";

export const useTrainerBadges = () => {
  return useQuery({
    queryKey: ["trainerBadges"],
    queryFn: getTrainerBadges, 
    retry: 0, 
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchInterval: false,
  });
};
