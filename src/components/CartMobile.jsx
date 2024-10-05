import React from 'react';

const CartMobile = ({ cartItems, onRemove, onDecrease, onIncrease, onReset, onCheckout, totalPrice }) => {
  return (
    <div className="lg:hidden flex flex-col justify-center items-center py-4 mt-6 space-y-6">
      {cartItems.map((item, index) => (
        <div key={index} className="flex flex-col border border-slate-200 py-2 w-64 h-96">

            {/* Delete button and pic */}
          <div className="relative flex justify-center mb-4 mt-2">
            <button className="absolute -top-4 right-2 text-slate-800 text-xl p-2" onClick={() => onRemove(index)}>&times;</button>
            <img src={item.image} alt={item.title} className="mt-8 w-24 h-24 object-contain" />
          </div>

          {/* Title and Description */}
          <div className="flex justify-center items-center mb-2 mt-4 px-4">
            <h3 className="text-base text-slate-800 font-medium text-center">{item.title}</h3>
          </div>

          {/* Price */}
          <div className="flex justify-center items-center mb-2">
            <p className="text-slate-800 font-extrabold">{item.price} €</p>
          </div>

          {/* Counter */}
          <div className="flex justify-center items-center mt-10">
            <div className="btn rounded-none bg-slate-200 w-[100px] h-[35px] flex justify-between">
              <button className="px-3 text-cyan-600 font-semibold" onClick={() => onDecrease(index)}>-</button>
              <span className="mx-2">{item.quantity}</span>
              <button className="px-3 text-cyan-600 font-semibold" onClick={() => onIncrease(index)}>+</button>
            </div>
          </div>
        </div>
      ))}

      {/* Total Sum and buttons for mobile screens */}
      <div className="flex flex-col justify-center items-center mt-4">
        <div className="space-y-4 w-64">
          <div className="flex justify-between w-full">
            <span className="font-bold text-xl">TOTAL</span>
            <span className="font-bold text-xl">{totalPrice} €</span>
          </div>
          <button 
            className="w-full bg-rose-600 text-white px-8 py-2 rounded-sm hover:bg-red-600"
            onClick={onReset}>Reset</button>
          <button 
            className="w-full bg-cyan-600 text-white px-8 py-2 rounded-sm hover:bg-cyan-700"
            onClick={onCheckout}>Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CartMobile;