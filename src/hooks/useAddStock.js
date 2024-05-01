import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addStockApi } from "../services/apiStocks";
import toast from "react-hot-toast";

export default function useAddStock() {
  const queryClient = useQueryClient();
  const {
    mutate: addStock,
    isLoading: isAdding,
    error,
  } = useMutation({
    mutationFn: addStockApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["stocks"] }),
        toast.success("Stock added successfully!");
    },
    onError: () => {
      toast.error("There was problem adding stock.");
      console.log(error);
    },
  });
  console.log(error);
  return { addStock, isAdding };
}
