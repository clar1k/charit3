import { useReadContract } from "wagmi";

export const usePoolsQuery = () => {
  return useReadContract({});
};
