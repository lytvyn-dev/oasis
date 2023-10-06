import { deleteCabin as deleteCabinAPI } from "../../services/apiCabins";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useDeleteCabin = () => {
  // Це потібно для того щоб потім зробити re-fetching (invalidateQueries)
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteCabin } = useMutation({
    mutationFn: deleteCabinAPI,
    // це потрібно робити для того шоб зроьити re-fetch для cabins після того як ми видалили дані з db
    onSuccess: () => {
      toast.success("The cabin was deleted 💥");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { isDeleting, deleteCabin };
};
