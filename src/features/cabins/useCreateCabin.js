import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabin as createEditCabinAPI } from "../../services/apiCabins";

export const useCreateCabin = () => {
  const queryClient = useQueryClient();

  const { isLoading: isCreating, mutate: createCabin } = useMutation({
    mutationFn: createEditCabinAPI,

    onSuccess: () => {
      toast.success("New cabin was added!");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    onError: () => {
      toast.error("Could not add new Cabin");
    },
  });

  return { isCreating, createCabin };
};
