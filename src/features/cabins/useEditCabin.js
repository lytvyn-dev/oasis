import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabin as createEditCabinAPI } from "../../services/apiCabins";

export const useEditCabin = () => {
  const queryClient = useQueryClient();

  const { isLoading: isEditing, mutate: editCabin } = useMutation({
    mutationFn: ({ data, id }) => createEditCabinAPI(data, id),

    onSuccess: () => {
      toast.success("The cabin was edited!");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    onError: () => {
      toast.error("Could not edit the cabin!");
    },
  });

  return { isEditing, editCabin };
};
