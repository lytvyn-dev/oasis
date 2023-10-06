import { useQuery } from "@tanstack/react-query";

import { getSettings as getSettingsAPI } from "../../services/apiSettings";

export const useGetSettings = () => {
  const { data, isLoading } = useQuery({ queryKey: ["settings"], queryFn: getSettingsAPI });
  return { data, isLoading };
};
