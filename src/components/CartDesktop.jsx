import React from 'react';
import CartItemDesktop from './CartItemDesktop';

const CartDesktop = ({ cartItems, onRemove, onDecrease, onIncrease, onReset, onCheckout, totalPrice }) => {
  return (
    <table className="min-w-full mt-10 border border-slate-200 hidden lg:table">
      <thead className="border-b border-slate-200">

        {/* Table Header */}
        <tr>
          <th className="px-4 py-3 text-left text-sm font-medium text-slate-500"></th>
          <th className="pr-24 py-3 text-left text-sm font-medium text-slate-500">Product</th>
          <th className="px-6 py-3 text-left text-sm font-medium text-slate-500">Description</th>
          <th className="pl-24 py-3 text-left text-sm font-medium text-slate-500">Amount</th>
          <th className="pl-24 py-3 text-left text-sm font-medium text-slate-500">Price</th>
        </tr>
      </thead>
      <tbody className="border-b border-slate-200">
        {cartItems.map((item, index) => (
          <CartItemDesktop
            key={index}
            item={item}
            onRemove={() => onRemove(index)}
            onDecrease={() => onDecrease(index)}
            onIncrease={() => onIncrease(index)}
          />
        ))}
      </tbody>
      <tfoot>

        {/* Total Sum */}
        <tr>
          <td></td>
          <td colSpan="2"></td>
          <td className="pl-24 py-4 font-normal text-xl text-left text-slate-800">TOTAL</td>
          <td className="pl-24 py-4 font-bold text-xl text-slate-800">{totalPrice} €</td>
        </tr>

        {/* Buttons */}
        <tr>
          <td></td>
          <td colSpan="2"></td>
          <td className="pl-24 py-4 text-left">
            <button 
              className='text-white px-12 py-2 rounded-sm bg-rose-600 hover:bg-red-600 hover:text-white'
              onClick={onReset}>Reset</button>
          </td>
          <td className="pl-24 py-4">
            <button 
              className='bg-cyan-600 text-white px-8 py-2 rounded-sm hover:bg-cyan-700'
              onClick={onCheckout}>Checkout</button>
          </td>
        </tr>
      </tfoot>
    </table>
  );
};

export default CartDesktop;