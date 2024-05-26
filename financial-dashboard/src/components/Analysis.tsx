import {  useState } from "react";
import { Expenses_data, Income_data } from "../constants/transaction_data";
import ChartContainer from "./ChartContainer";

export default function Analysis() {
  const [transactionType, setTransactionType] = useState("Income");
  const [data, setData] = useState(Income_data);

  const handleIncomeClick = () => {
    if (transactionType == "Income") return;
    setTransactionType("Income");
    setData(Income_data);
  };
  const handleExpensesClick = () => {
    if (transactionType == "Expenses") return;
    setTransactionType("Expenses");
    setData(Expenses_data);
  };
  return (
    <div className="text-gray-200 w-full px-4 flex-1 flex flex-col">
      <div className="flex justify-between my-2">
        <p className="text-xl font-semibold">Analysis</p>
        <button className="text-sm text-blue-500">Details</button>
      </div>
      <div
        className="w-full 
       flex justify-between gap-2 max-w-[230px] text-sm"
      >
        <button
          className={`rounded-lg  hover:bg-blue-500 p-2 h-12 w-28 transition-colors ${
            transactionType == "Income" ? "bg-blue-500" : "bg-slate-900"
          }`}
          onClick={handleIncomeClick}
        >
          Income
        </button>
        <button
          className={`rounded-lg  hover:bg-blue-500 p-2 h-12 w-28 transition-colors ${
            transactionType == "Expenses" ? "bg-blue-500" : "bg-slate-900"
          }`}
          onClick={handleExpensesClick}
        >
          Expenses
        </button>
      </div>
      <div className="flex gap-4">
        {data && (
          <ChartContainer
            title={transactionType}
            data={data}
            key={transactionType}
          />
        )}
      </div>
    </div>
  );
}
