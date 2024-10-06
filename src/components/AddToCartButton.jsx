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
    setCart(updatedCart); // Update state with the new cart
  };

  // dd item to cart or update quantity
  const addToCart = () => {
    const savedCart = localStorage.getItem("cart");
    const currentCart = savedCart ? JSON.parse(savedCart) : {};

    const updatedCart = {
      ...currentCart,
      [product.id]: {
        ...product,
        quantity: (currentCart[product.id]?.quantity || 0) + 1, // increment quantity if product exists
      },
    };

    updateLocalStorage(updatedCart);
  };

  
  const removeFromCart = () => {
    const savedCart = localStorage.getItem("cart");
    const currentCart = savedCart ? JSON.parse(savedCart) : {};

    if (currentQuantity > 0) {
      const updatedCart = {
        ...currentCart,
        [product.id]: {
          ...product,
          quantity: currentQuantity - 1,
        },
      };

      
      if (updatedCart[product.id].quantity === 0) {
        delete updatedCart[product.id];
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
            if (value > currentQuantity) {
              addToCart(); 
            } else if (value === 0) {
              removeFromCart(); 
            } else {
              removeFromCart(); 
            }
          }}
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
