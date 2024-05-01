
function StockDetails({ stock }) {
  console.log(stock);
  return (
    <div className="mt-6 text-xs flex flex-col text-gray-500 pr-8 gap-3">
      <div className="flex justify-between ">
        <div>
          <p>
            Avg. buy price:{" "}
            <span className="text-gray-700"> ₹{stock.avg_price}</span>
          </p>
        </div>
        <div>
          <p>
            Sell Price:{" "}
            <span className="text-gray-700">₹{stock.sell_price}</span>
          </p>
        </div>
      </div>
      <div>
        {" "}
        <div className="flex justify-between ">
          <div>
            <p>
              Buy Amount:{" "}
              <span className="text-gray-700"> ₹{stock.buy_amt}</span>
            </p>
          </div>
          <div>
            <p>
              Sell Amount:{" "}
              <span className="text-gray-700">₹{stock.sell_amt}</span>
            </p>
          </div>
        </div>
      </div>
      <div>
        {" "}
        <div className="flex justify-between ">
          <div>
            <p>
              Buy Date: <span className="text-gray-700"> {stock.buy_date}</span>
            </p>
          </div>
          <div>
            <p>
              Sell Date:{" "}
              <span className="text-gray-700">{stock.sell_date}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StockDetails;
