import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { HiCalendarDays } from "react-icons/hi2";

function StockDatePicker({ selectedDate, setSelectedDate }) {
  // console.log(startDate.toLocaleDateString());

  return (
    <div className="w-[50%] relative">
      <DatePicker
        closeOnScroll={true}
        dateFormat="dd/MM/yyyy"
        showIcon={false}
        className="w-full pl-10 pr-2 py-2 rounded-md outline-none focus:ring-1 ring-gray-600"
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date.toDateString())}
      />
      <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
        <HiCalendarDays className="text-lg text-gray-400" />
      </div>
    </div>
  );
}

export default StockDatePicker;
