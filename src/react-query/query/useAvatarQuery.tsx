import { useQuery } from "@tanstack/react-query";
import { getPoints, getAvatarInfo, getInBody, getWeightHistory } from "../../apis/avatar";

export const usePoints = (memberId: number) =>
    useQuery({
      queryKey: ["points", memberId],
      queryFn: async () => {
        const result = await getPoints(memberId);
        return result; 
      },
      retry: 0,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
    });

export const useAvatarInfo = (memberId: number) =>
  useQuery({
    queryKey: ["avatarInfo", memberId],
    queryFn: () => getAvatarInfo(memberId),
    retry: 0,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });

export const useInBody = (memberId: number) =>
  useQuery({
    queryKey: ["inBody", memberId],
    queryFn: () => getInBody(memberId),
    retry: 0,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });

export const useWeightHistory = (memberId: number) =>
  useQuery({
    queryKey: ["weightHistory", memberId],
    queryFn: () => getWeightHistory(memberId),
    retry: 0,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });
