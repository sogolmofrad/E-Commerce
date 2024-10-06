import { useState } from "react";
import CounterButton from "./CounterButton";

const AddToCartButton = ({ product }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : {};
  });

  const currentQuantity = cart[product.id]?.quantity || 0;

  // update the cart in local storage
  const updateLocalStorage = (updatedCart) => {
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCart(updatedCart);
  };

  // add item to cart or update quantity
  const addToCart = () => {
    const updatedCart = {
      ...cart,
      [product.id]: {
        ...product,
        quantity: (cart[product.id]?.quantity || 0) + 1,
      },
    };
    updateLocalStorage(updatedCart);
  };

  // remove item from cart or reduce quantity
  const removeFromCart = () => {
    if (currentQuantity > 0) {
      const updatedCart = {
        ...cart,
        [product.id]: {
          ...product,
          quantity: currentQuantity - 1,
        },
      };
      if (updatedCart[product.id].quantity === 0) {
        delete updatedCart[product.id]; // delete product when at 0
      }
      updateLocalStorage(updatedCart);
    }
  };

  return (
    <div>
      {currentQuantity > 0 ? (
        <CounterButton
          itemsNumber={currentQuantity}
          onSetItemsNumber={(value) => {
            if (value > currentQuantity) addToCart();
            else removeFromCart();
          }}
          onShowCountButton={() => {}}
        />
      ) : (
        <button onClick={addToCart} className="btn bg-cyan-600 text-white">
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default AddToCartButton;
