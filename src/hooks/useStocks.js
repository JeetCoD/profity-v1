import { useQuery } from "@tanstack/react-query";
import { getStocks } from "../services/apiStocks";


export function useStocks() {
  const {
    data: stocks,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["stocks"],
    queryFn: getStocks,
  });

  return { isLoading, error, stocks };
}
