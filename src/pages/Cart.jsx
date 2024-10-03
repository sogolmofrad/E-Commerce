import Header from "../components/Header";
import React from 'react';

const Cart = ({ cartItems }) => {
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0); // Calculate the total amount

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className='bg-white'>
        <Header />
      </div>
      <main className="container mx-auto bg-slate-50">
        <div className="overflow-x-auto">
          <h1 className="text-2xl font-semibold uppercase mt-10 text-center">Shopping Cart</h1>

          {cartItems.length === 0 ? (
            // If cart is empty, show this message
            <div>
            <span className="block text-center text-4xl mt-10">🛒</span>
            <p className="text-center py-4">Your cart is empty</p>
            </div>
          ) : (
            // Show table only if there are items in the cart
            <table className="min-w-full mt-10 border border-slate-200 ">
              <thead className='border-b border-slate-200'>
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-medium text-slate-500"></th>
                  <th className="pr-24 py-3 text-left text-sm font-medium text-slate-500">Product</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-slate-500">Description</th>
                  <th className="pl-24 py-3 text-left text-sm font-medium text-slate-500">Amount</th>
                  <th className="pl-24 py-3 text-left text-sm font-medium text-slate-500">Price</th>
                </tr>
              </thead>
              <tbody className='border-b border-slate-200'>
                {cartItems.map((item, index) => (
                  <tr key={index} className="border-t border-slate-200">
                    <td className="px-6 py-4" width="5%">
                      <div className="flex justify-center">
                        <button className="text-slate-800 text-xl p-2">&times;</button>
                      </div>
                    </td>

                    {/* Product */}
                    <td className="pr-24 py-6" width="10%">
                      <div className="flex items-center w-full h-auto rounded-sm">
                        <img
                          src={item.image}
                          alt={item.title}
                          className='w-full h-full bg-white object-contain' />
                      </div>
                    </td>

                    {/* Description */}
                    <td className="px-6 ml-8 py-6 text-left" width="30%">
                      <div className="font-medium text-sm">{item.title}</div>
                      <div className='text-sm mt-2 line-clamp-3'>
                        {item.description || 'No description available.'}
                      </div>
                    </td>

                    {/* Amount */}
                    <td className="pl-24 py-6" width="10%">
                      <div className="flex items-center bg-slate-200 rounded-sm w-24">
                        <button className="px-3 py-1 text-cyan-600 font-semibold focus:outline-none">-</button>
                        <span className="mx-2">2</span>
                        <button className="px-3 py-1 text-cyan-600 font-semibold focus:outline-none">+</button>
                      </div>
                    </td>

                    {/* Price */}
                    <td className="pl-24 py-4 font-semibold text-base" width="10%">{item.price}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                {/* Total Sum */}
                <tr>
                  <td></td>
                  <td colSpan="2"></td>
                  <td className="pl-24 py-4 font-normal text-2xl text-left">TOTAL</td>
                  <td className="pl-24 py-4 font-bold text-2xl">{totalPrice} €</td>
                </tr>
                {/* Buttons */}
                <tr>
                  <td></td>
                  <td colSpan="2"></td>
                  <td className="pl-24 py-4 text-left">
                    <button className='text-white px-12 py-2 rounded-sm bg-rose-600 hover:bg-red-600 hover:text-white'>Reset</button>
                  </td>
                  <td className="pl-24 py-4">
                    <button className='bg-cyan-600 text-white px-8 py-2 rounded-sm hover:bg-cyan-700'>Checkout</button>
                  </td>
                </tr>
              </tfoot>
            </table>
          )}
        </div>
      </main>
    </div>
  );
}

export default Cart;
