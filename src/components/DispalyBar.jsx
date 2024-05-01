import { useStocks } from "../hooks/useStocks";
import Spinner from "./Spinner";
import StocksBar from "./StocksBar";

function DispalyBar({ isFormOpen, setIsFormOpen }) {
  const { stocks, isLoading } = useStocks();

  return (
    <div className=" mx-8">
      <p className="font-semibold text-lg ">Stock History</p>
      {isLoading && <Spinner />}
      {stocks?.map((stock) => (
        <StocksBar
          isFormOpen={isFormOpen}
          setIsFormOpen={setIsFormOpen}
          key={stock.id}
          stock={stock}
        />
      ))}
    </div>
  );
}

export default DispalyBar;
