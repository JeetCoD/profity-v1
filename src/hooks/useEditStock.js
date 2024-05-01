import {
  QueryClient,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { editStockApi } from "../services/apiStocks";
import toast from "react-hot-toast";

export function useEditStock() {
  const QueryClient = useQueryClient();
  const { mutate: editStock, isLoading: isEditing } = useMutation({
    mutationFn: (stockData) => editStockApi(stockData),
    onSuccess: () => {
      toast.success("Stock edited successfully");
      QueryClient.invalidateQueries({ queryKey: ["stocks"] });
    },
    onError: (err) => {
      toast.error("There was problem editing stocks");
      console.log(err);
      throw new Error(err);
    },
  });

  return { editStock, isEditing };
}
