import CartDesktop from "../components/CartDesktop";
import CartMobile from "../components/CartMobile";
import Header from "../components/Header";

const Cart = ({ cartItems, onRemove, onDecrease, onIncrease, onReset }) => {
  // Function to calculate the total cost of the cart
  const totalPrice = cartItems
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2);

  // Logic for Checkout the cart
  const handleCheckout = () => {
    alert("Proceed to checkout");
  };

  return (
    <div className="bg-white min-h-screen">
      <Header />
      <main className="container mx-auto">
        <div className="overflow-x-auto">
          <h1 className="font-semibold uppercase mt-8 text-center">
            Shopping Cart
          </h1>

          {cartItems.length === 0 ? (
            <div>
              <span className="block text-center text-4xl mt-10">🛒</span>
              <p className="text-center py-4">Your cart is empty</p>
            </div>
          ) : (
            <>
            {/* Render the cart components if there are products */}
              <CartDesktop
                cartItems={cartItems}
                onRemove={onRemove}
                onDecrease={onDecrease}
                onIncrease={onIncrease}
                onReset={onReset}
                onCheckout={handleCheckout}
                totalPrice={totalPrice}
              />
              <CartMobile
                cartItems={cartItems}
                onRemove={onRemove}
                onDecrease={onDecrease}
                onIncrease={onIncrease}
                onReset={onReset}
                onCheckout={handleCheckout}
                totalPrice={totalPrice}
              />
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default Cart;