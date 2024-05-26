import { useState } from "react";
import BankCard from "./cards/BankCard";
const cardDatas = [
  {
    balance: 24000.0,
    card_type: "VISA",
    card_nunber: "*****88888",
    id: crypto.randomUUID(),
  },
  {
    balance: 24000.0,
    card_type: "AMEX",
    card_nunber: "*****88888",
    id: crypto.randomUUID(),
  },
];
export default function CardsContainer() {
  const [item, setitem] = useState(0);
  const number_of_items = 2;
  const handleLeft = () => {
    if (item <= 0) return setitem(number_of_items - 1);
    setitem(item - 1);
  };
  const handleRight = () => {
    if (item >= number_of_items - 1) return setitem(0);
    setitem(item + 1);
  };
  return (
    <div className="py-4 flex flex-col items-center w-full">
      <p className="text-gray-200 font-semibold p-4 my-2 text-xl w-full ">
        My Cards
      </p>
      <div className=" flex items-center justify-center relative  overflow-hidden  w-full max-w-[340px]">
        <div className="flex  h  overflow-hidden  gap-4">
          {cardDatas.map((card) => {
            let number = -105 * item + "%";
            return (
              <div
                style={{ transform: `translateX(${number})` }}
                key={card.id}
                className="transition-transform  w-fit h-fit "
              >
                <BankCard cardData={card} />
              </div>
            );
          })}
        </div>

        <button
          onClick={handleLeft}
          className="h-8 w-8 rounded-full hover:bg-blue-900 bg-slate-800 transition-colors p-1 absolute left-0"
        >
          <img src="/assets/back.png" alt="back" />
        </button>
        <button
          onClick={handleRight}
          className="h-8 w-8 rounded-full  hover:bg-blue-900 bg-slate-800 transition-colors p-1 absolute right-0"
        >
          <img src="/assets/forward.png" alt="back" />
        </button>
      </div>
    </div>
  );
}
