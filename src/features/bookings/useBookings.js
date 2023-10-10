import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import toast from "react-hot-toast";

export const useBookings = () => {
  const { data: bookings, isLoading } = useQuery({
    queryKey: ["bookings"],
    queryFn: getBookings,
    onError: () => toast.error("Could not get booking!"),
  });

  return { bookings, isLoading };
};
