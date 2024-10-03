import { useState } from "react";
import CounterButton from "./CounterButton";

function SingleItem({ src, title, price }) {
  const [showCountButton, setShowCountButton] = useState(false);
  console.log(showCountButton);
  const [itemsNumber, setItemsNumber] = useState(1);

  return (
    <div className=" card bg-base-100 h-[29rem] shadow-xl rounded-none">
      <figure className="px-10 pt-10">
        <img src={src} alt={title} className=" h-[14rem] object-fill" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="font-bold text-cyan-900">{title}</h2>
        <p className="text-orange-600 font-bold">{price} €</p>
        <div className="card-actions">
          {!showCountButton && (
            <button
              onClick={() => setShowCountButton(true)}
              className="btn rounded-none bg-cyan-600 text-white hover:bg-cyan-700"
            >
              Add to Cart
            </button>
          )}
          {showCountButton && (
            <CounterButton
              itemsNumber={itemsNumber}
              onSetItemsNumber={setItemsNumber}
              onShowCountButton={setShowCountButton}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default SingleItem;
