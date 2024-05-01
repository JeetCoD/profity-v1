import { useState } from "react";
import { HiPencilSquare } from "react-icons/hi2";
import { HiMiniListBullet } from "react-icons/hi2";
import { HiMiniTrash } from "react-icons/hi2";
import StockDetails from "./StockDetails";
import useDeleteCabin from "../hooks/useDeleteStock";
import Modal from "./Modal";
import AddStocksForm from "./AddStocksForm";

function StocksBar({ stock, isFormOpen, setIsFormOpen }) {
  const { deleteCabin } = useDeleteCabin();
  const [isBarOpen, setisBarOpen] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const returns = ((stock.sell_amt - stock.buy_amt) / stock.buy_amt) * 100;
  const gains = stock.sell_amt - stock.buy_amt;

  function handleDelete() {
    deleteCabin(stock.id);
    setShowDeleteModal(!showDeleteModal);
  }
  return (
    <div className="bg-slate-50 my-4 py-2 px-2 rounded-md  ">
      <div className="flex justify-between relative">
        <div className="flex flex-col gap-1">
          <p className="text-sm">{stock.stock_name}</p>
          <p className="text-sm text-gray-500">Avg. ₹{stock.avg_price}</p>
        </div>
        <div className="flex flex-col gap-1 items-center">
          <p className="text-sm">Qty.</p>
          <p className="text-sm text-gray-500">{stock.qty}</p>
        </div>
        <div className="flex flex-col gap-1 items-center">
          <p className="text-sm">Returns</p>
          <p
            className={`text-sm ${
              returns > 0 ? "text-emerald-600" : "text-red-600"
            }`}
          >
            {returns.toFixed(1)}%
          </p>
        </div>
        <div className="flex flex-col gap-1 items-center">
          <p className="text-sm">Gains</p>
          <p
            className={`text-sm ${
              gains > 0 ? "text-emerald-600" : "text-red-600"
            }`}
          >
            {gains > 0
              ? `+₹${Math.abs(gains.toFixed(1))}`
              : `-₹${Math.abs(gains.toFixed(1))}`}
          </p>
        </div>
        <div className="flex  gap-2 items-center flex-col sm:flex-row">
          <HiMiniListBullet
            className="text-gray-400 hover:text-gray-600 transition-all ease-linear text-md sm:text-sm cursor-pointer "
            onClick={() => setisBarOpen(!isBarOpen)}
          />
          <HiPencilSquare
            className="text-gray-400 hover:text-gray-600 transition-all ease-linear text-md sm:text-sm cursor-pointer "
            onClick={() => setShowEditForm(!showEditForm)}
          />

          <HiMiniTrash
            className="text-gray-400 hover:text-red-600 transition-all ease-linear  text-md sm:text-sm cursor-pointer "
            onClick={() => setShowDeleteModal(!showDeleteModal)}
          />
        </div>
        {showDeleteModal && (
          <Modal onClick={() => setShowDeleteModal(!showDeleteModal)}>
            <div className="flex shadow-sm rounded-lg bg-white p-4 flex-col items-center gap-3 w-[60%] sm:w-[40%]">
              <p className="font-semibold text-lg">Are you sure?</p>
              <p className="text-gray-400 font-light text-center text-sm sm:text-lg">
                Are you sure you want to delete the Stock? This action cannot be
                undone.
              </p>
              <div className="flex gap-2">
                <button
                  className="bg-gray-200 py-1 px-3 rounded-lg text-gray-600 ring-1 ring-gray-600 cursor-pointer"
                  onClick={() => setShowDeleteModal(!showDeleteModal)}
                >
                  Cancel
                </button>
                <button
                  className="bg-red-600 py-1 px-3 rounded-lg text-white ring-1 ring-red-600 cursor-pointer "
                  onClick={handleDelete}
                >
                  Delete
                </button>
              </div>
            </div>
          </Modal>
        )}

        {showEditForm && (
          <Modal>
            <AddStocksForm
              stock={stock}
              onClose={() => setShowEditForm(false)}
            />
          </Modal>
        )}
      </div>
      {isBarOpen ? <StockDetails stock={stock} /> : null}
    </div>
  );
}

export default StocksBar;
