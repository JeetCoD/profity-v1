import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteStockApi } from "../services/apiStocks";
import toast from "react-hot-toast";

export default function useDeleteCabin() {
  const queryClient = useQueryClient();
  const { mutate: deleteCabin, isLoading: isDeleting } = useMutation({
    mutationFn: deleteStockApi,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["stocks"],
      });
      toast.success("Stock Deleted Sucessfully!");
    },
    onError: () => {
      toast.error("Stock not deleted.");
    },
  });
  return { isDeleting, deleteCabin };
}
