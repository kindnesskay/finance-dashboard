export type cardDataType = {
  balance: number;
  card_type: string;
  card_nunber: string;
};
interface BankCard {
  cardData: cardDataType;
}

export default function BankCard({ cardData }: BankCard) {
  const { balance, card_nunber, card_type } = cardData;
  return (
    <div
      className="h h-40 max-w-full hover:scale-95 scale-90 transition-transform rounded-2xl text-white flex flex-col justify-between p-4 cursor-pointer hover:border-white"
      style={{ backgroundImage: "url('/bg.jpg')" }}
    >
      <div className="flex justify-between">
        <p className="font-bold text-lg">${balance.toFixed(2)}</p>
        <div className=" rotate-90 text-2xl flex justify-center">
          <span>.</span>
          <span>.</span>
          <span>.</span>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <p className="text-lg font-bold">{card_type.toUpperCase()}</p>
        <p className="font-semibold text-sm">{card_nunber}</p>
      </div>
    </div>
  );
}
