import { useState } from "react";

function CounterButton({ onShowCountButton }) {
  const [itemsNumber, setItemsNumber] = useState(1);
  function handleIncrease() {
    console.log(itemsNumber);
    setItemsNumber((curr) => curr + 1);
  }

  function handleDecrease() {
    console.log(itemsNumber);
    if (itemsNumber < 2) {
      onShowCountButton(false);
    } else {
      setItemsNumber((curr) => curr - 1);
    }
  }
  return (
    <div className="btn rounded-none bg-slate-100 py-1 px-4 w-[160px] h-[50px] flex justify-between">
      <button className="text-cyan-900" onClick={handleIncrease}>
        +
      </button>
      <span>{itemsNumber}</span>
      <button className="text-cyan-900" onClick={handleDecrease}>
        -
      </button>
    </div>
  );
}

export default CounterButton;
