export type transactionCardDataType = {
  icon: string;
  item: string;
  date: string;
  value: number;
  incomming: boolean;
};

interface transactionCardData {
  transactionCardData: transactionCardDataType;
}

export default function TransactionCard({
  transactionCardData,
}: transactionCardData) {
  const { icon, item, date, value, incomming } = transactionCardData;
  const sign = incomming ? "+" : "-";
  return (
    <div className="flex p-4 w-full h-16 gap-2 items-center bg-slate-900 hover:bg-slate-800 transition-colors rounded-lg cursor-pointer">
      <div className="w-10 h-10 rounded-full bg-zinc-900 p-2 ">
        <img src={icon} alt={item} />
      </div>
      <div className="flex-1 flex justify-between items-center px-2">
        <div className="flex flex-col justify-between gap-1">
          <p>{item}</p>
          <p className="text-xs font-light">{date}</p>
        </div>
        <p>
          <span>{sign}</span>${value}
        </p>
      </div>
    </div>
  );
}
