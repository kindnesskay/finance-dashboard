import { useEffect } from "react";
import { useState } from "react";

export default function App() {
  const [equation, setEquation] = useState("0");
  const [total, setTotal] = useState("0");
  const buttons = [
    "=",
    "DEL",
    "0",
    ".",
    "+",
    "3",
    "2",
    "1",
    "-",
    "6",
    "5",
    "4",
    "X",
    "9",
    "8",
    "7",
    "/",
    "%",
    "M",
    "C",
  ];
  function removeOne() {
    const dup = equation.slice(0, equation.length - 1);
    setEquation(dup);
  }
  function removeAll() {
    setEquation("");
  }
  function handleClick(value) {
    value = value.trim();
    switch (value) {
      case "DEL":
        return removeOne();

      case "C":
        return removeAll();

      default:
        break;
    }
    setEquation(equation + value);
  }
  useEffect(() => {
    console.log(total);
    total[0] == "0" ? setTotal(total.slice(1, total.length)) : "";
    equation[0] == "0" ? setEquation(equation.slice(1, equation.length)) : "";

    const additionArray = equation.split("+");
    const AdditionTotal = additionArray.reduce(add);
    const subtarctionArray = equation.split("-");
    const subtractionTotal = subtarctionArray.reduce(subtract);
    function add(total, num) {
      total = Number(total);
      num = Number(num);
      return total + num;
    }
    function subtract(total, num) {
      total = Number(total);
      num = Number(num);
      return total - num;
    }
    console.log(
      additionArray.find((siqn) => {
        return siqn == "+";
      })
    );
    if (additionArray.find((siqn) => siqn == "-")) {
      console.log(subtarctionArray);
    }
    // setTotal(AdditionTotal);

    if (subtarctionArray.find((siqn) => siqn == "-")) {
      console.log(additionArray);
    }
    // setTotal(subtractionTotal);
  }, [equation]);
  return (
    <div className="text-white">
      <div className="bg-indigo-900 h-40 w-full flex flex-col p-4">
        <div className="h-1/2">
          <p>{equation}</p>
        </div>
        <div className="flex justify-between h-1/2 text-3xl font-bold">
          <p>=</p>
          <p className="text-3xl">{total}</p>
        </div>
      </div>
      <div className="w-full p-2 grid-cols-4 grid gap-1">
        {buttons.map((btn, index) => (
          <button
            onClick={() => handleClick(btn)}
            className="p-8 hover:shadow-2xl shadow-indigo-950 hover:border-indigo-950 border border-2 bg-white font-bold text-3xl text-black flex items-center justify-center"
            key={index}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}
