import { useMutation, useQueryClient } from "@tanstack/react-query";

import { updateSetting as updateSettingAPI } from "../../services/apiSettings";
import toast from "react-hot-toast";

export const useUpdateSetting = () => {
  const queryClient = useQueryClient();

  const { isLoading: isUpdating, mutate: updateSetting } = useMutation({
    mutationFn: updateSettingAPI,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["settings"] });
      toast.success("Setting was uploaded!");
    },
    onError: () => toast.error("Could not update setting!"),
  });
  return { isUpdating, updateSetting };
};
