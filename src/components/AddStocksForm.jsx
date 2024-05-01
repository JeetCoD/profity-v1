import StockDatePicker from "./StockDatePicker";
import { useState } from "react";
import { HiMiniXMark } from "react-icons/hi2";
import useAddStock from "../hooks/useAddStock";
import { useForm } from "react-hook-form";
import { useEditStock } from "../hooks/useEditStock";

function AddStocksForm({ onClose, setIsOpenModal, stock = {} }) {
  const { id: editId, ...editValues } = stock;

  const { addStock, isAdding } = useAddStock();
  const { editStock, isEditing } = useEditStock();
  const isEditSession = Boolean(editId);
  const { register, reset, handleSubmit } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });

  function handleSubmitForm(data) {
    const qty = Number(data.qty);
    const buy_price = Number(data.buy_price);
    const sell_price = Number(data.sell_price);

    const stockData = {
      ...data,
      buy_amt: qty * buy_price,
      sell_amt: qty * sell_price,
      avg_price: buy_price,
    };

    if (isEditSession) {
      if (!editId) {
        console.error("Error: ID is undefined.");
        return;
      }
      stockData.id = editId; // Include the id property from editId
      editStock(
        { newStock: stockData }, // Wrap stockData in an object
        {
          onSuccess: () => {
            reset();
            onClose?.();
          },
        }
      );
    } else {
      addStock(stockData);
      onClose();
    }
  }

  function onError(err) {
    console.log(err);
  }

  return (
    <div className=" flex flex-col w-[80%] bg-gray-100 p-4  rounded-lg shadow-sm relative">
      <div className="w-[90%]">
        <div className="flex justify-between mb-4">
          <p className="font-semibold text-lg">Add Stock</p>
          <HiMiniXMark
            className="text-xl text-gray-500 hover:text-gray-600 cursor-pointer absolute right-2 top-2"
            onClick={onClose}
          />
        </div>
        <form
          className="flex flex-col gap-4"
          onSubmit={handleSubmit(handleSubmitForm, onError)}
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm  ">
              Stock Name
            </label>
            <input
              disabled={isAdding}
              required
              id="stock_name"
              type="text"
              {...register("stock_name", {
                required: "This field is required",
              })}
              placeholder="Name of Stock"
              className="  p-2 rounded-md outline-none focus:ring-1 ring-gray-600"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="qty" className="text-sm  ">
              Quantity
            </label>
            <input
              min={1}
              disabled={isAdding}
              required
              id="qty"
              {...register("qty", {
                required: "This field is required",
              })}
              type="number"
              placeholder="Enter Quantity of Stocks"
              className="  p-2 rounded-md outline-none focus:ring-1 ring-gray-600"
            />
          </div>
          <div className="flex flex-row items-center gap-2">
            <label htmlFor="buy" className="text-sm   ">
              Buy Price
            </label>
            <input
              min={1}
              disabled={isAdding}
              required
              step="0.001"
              id="buy_price"
              {...register("buy_price", {
                required: "This field is required",
              })}
              type="number"
              className=" w-[60%] sm:w-[50%] p-2 mr-4 rounded-md outline-none focus:ring-1 ring-gray-600"
            />
            <label htmlFor="qty" className="text-sm  ">
              Buy Date
            </label>
            <input
              defaultValue={new Date().toISOString().split("T")[0]}
              type="date"
              className="w-full pl-2 pr-2 py-2 rounded-md outline-none focus:ring-1 ring-gray-600"
              {...register("buy_date", {
                required: "This field is required",
              })}
            />
          </div>
          <div className="flex flex-row items-center gap-2">
            <label htmlFor="buy" className="text-sm  ">
              Sell Price
            </label>
            <input
              disabled={isAdding}
              required
              min={1}
              step="0.001"
              id="sell_price"
              {...register("sell_price", {
                required: "This field is required",
              })}
              type="number"
              className="w-[60%] sm:w-[50%] p-2 mr-4 rounded-md outline-none focus:ring-1 ring-gray-600"
            />
            <label htmlFor="qty" className="text-sm  ">
              Sell Date
            </label>
            <input
              defaultValue={new Date().toISOString().split("T")[0]}
              type="date"
              className="w-full pl-2 pr-2 py-2 rounded-md outline-none focus:ring-1 ring-gray-600"
              {...register("sell_date", {
                required: "This field is required",
              })}
            />
          </div>

          <div className="flex mt-6 gap-4">
            <button
              type="submit"
              disabled={isAdding}
              className="text-white bg-gray-800 py-2 px-4 rounded-lg transition-all duration-300 hover:bg-gray-900"
            >
              Add Stock
            </button>
            <button
              disabled={isAdding}
              onClick={onClose}
              className="text-gray-800 bg-white transition-all duration-300 hover:bg-gray-50 py-2 px-4 rounded-lg"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddStocksForm;
