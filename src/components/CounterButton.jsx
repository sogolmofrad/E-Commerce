<<<<<<< HEAD
function CounterButton({ itemsNumber, onSetItemsNumber }) {
  function handleIncrease() {
    onSetItemsNumber(itemsNumber + 1); 
=======
import { useState } from "react";

function CounterButton({ onShowCountButton }) {
  const [itemsNumber, setItemsNumber] = useState(1);
  function handleIncrease() {
    console.log(itemsNumber);
    setItemsNumber((curr) => curr + 1);
>>>>>>> f1569a7 (fix the issue with add buttons)
  }

  function handleDecrease() {
    if (itemsNumber > 1) {
      onSetItemsNumber(itemsNumber - 1); 
    } else {
<<<<<<< HEAD
      onSetItemsNumber(0);
=======
      setItemsNumber((curr) => curr - 1);
>>>>>>> f1569a7 (fix the issue with add buttons)
    }
  }

  return (
    <div className="btn rounded-none bg-slate-100 py-1 px-4 w-[160px] h-[50px] flex justify-between">
      <button className="text-cyan-900" onClick={handleDecrease}>
        -
      </button>
      <span>{itemsNumber}</span>
      <button className="text-cyan-900" onClick={handleIncrease}>
        +
      </button>
    </div>
  );
}

export default CounterButton;
