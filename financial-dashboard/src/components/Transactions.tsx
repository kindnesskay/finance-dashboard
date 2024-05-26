import transaction_data from "../constants/transaction_data";
import TransactionCard from "./cards/TransactionCard";

export default function Transactions() {
  return (
    <div>
      <div className="flex justify-between">
        <p className="text-lg">Transactions</p>
        <button className="text-xs font-thin text-blue-400">see more</button>
      </div>
      <div>
        <p className="text-gray-400 text-sm mb-2">Today</p>
        <div className="flex flex-col gap-2">
          {transaction_data.map((data, index) => (
            <TransactionCard transactionCardData={data} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
