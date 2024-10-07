import React, { useEffect, useState } from 'react';
import Cart from '../pages/Cart';

const CartItemsFetcher = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    const parsedCart = savedCart ? JSON.parse(savedCart) : {};
    const cartArray = Object.keys(parsedCart).map(key => parsedCart[key]);

    setCartItems(cartArray);
  }, []);

  const handleRemove = (index) => {
    const newCartItems = [...cartItems];
    const removedItem = newCartItems.splice(index, 1)[0];

    // Remove the product from Local Storage
    const savedCart = JSON.parse(localStorage.getItem("cart") || "{}");
    delete savedCart[removedItem.id];
    localStorage.setItem("cart", JSON.stringify(savedCart));

    setCartItems(newCartItems);
  };

  const handleIncrease = (index) => {
    const newCartItems = [...cartItems];
    newCartItems[index].quantity += 1;

    // Update Local Storage
    const savedCart = JSON.parse(localStorage.getItem("cart") || "{}");
    savedCart[newCartItems[index].id].quantity += 1;
    localStorage.setItem("cart", JSON.stringify(savedCart));

    setCartItems(newCartItems);
  };

  const handleDecrease = (index) => {
    const newCartItems = [...cartItems];
    if (newCartItems[index].quantity > 1) {
      newCartItems[index].quantity -= 1;

      // Update Local Storage
      const savedCart = JSON.parse(localStorage.getItem("cart") || "{}");
      savedCart[newCartItems[index].id].quantity -= 1;
      localStorage.setItem("cart", JSON.stringify(savedCart));

      setCartItems(newCartItems);
    } else {
      handleRemove(index); // If the quantity of the product = 0, we delete it
    }
  };

  // Function to reset the cart
  const handleReset = () => {
    setCartItems([]); // Clear the cart state

    // Clear local storage
    localStorage.removeItem("cart");
  };

  return (
    <>
      <Cart
        cartItems={cartItems}
        onRemove={handleRemove}
        onIncrease={handleIncrease}
        onDecrease={handleDecrease}
        onReset={handleReset} // Pass reset handler
      />
    </>
  );
};

export default CartItemsFetcher;