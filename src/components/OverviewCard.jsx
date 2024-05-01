import { useState } from "react";
import { useStocks } from "../hooks/useStocks";
import Modal from "./Modal";
import AddStocksForm from "./AddStocksForm";

function OverviewCard({ isFormOpen, setIsFormOpen }) {
  const { stocks } = useStocks();

  const totalGains = stocks
    ?.reduce((acc, stock) => acc + (stock.sell_amt - stock.buy_amt), 0)
    .toFixed(3);
  const sign = totalGains > 0 ? "+" : "-";
  return (
    <div className="grid grid-cols-2 p-4 border rounded-lg my-8 mx-8 space-x">
      <div className="flex flex-col flex-wrap border-r pr-6 justify-between">
        <p className="">Total Gains</p>
        <p
          className={`font-semibold text-2xl ${
            totalGains > 0 ? "text-emerald-600" : "text-red-600"
          }`}
        >
          {sign}₹{Math.abs(totalGains)}
        </p>
      </div>
      <div className="flex flex-col gap-2 pl-6">
        <input
          className="bg-slate-50 p-2 rounded-lg"
          type="text"
          placeholder="Search from Stock History"
        />
        <button
          className="bg-slate-800 text-slate-50 rounded-lg p-2 "
          onClick={() => setIsFormOpen(!isFormOpen)}
        >
          Add Stock
        </button>
        {isFormOpen && (
          <Modal>
            <AddStocksForm
              isFormOpen={isFormOpen}
              setIsFormOpen={setIsFormOpen}
              onClose={() => setIsFormOpen(!isFormOpen)}
            />
          </Modal>
        )}
      </div>
    </div>
  );
}

export default OverviewCard;
