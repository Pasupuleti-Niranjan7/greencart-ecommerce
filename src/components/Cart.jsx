import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import useCartStore from '../store/cartStore';
import useAuthStore from '../store/authStore';
import useOrderStore from '../store/orderStore';
import { Helmet } from 'react-helmet-async';

function Cart() {
  const { cart, removeFromCart, clearCart, updateQuantity } = useCartStore();
  const { user } = useAuthStore();
  const { addOrder } = useOrderStore();

  const handleIncrement = (product) => {
    updateQuantity(product.id, product.quantity + 1);
  };

  const handleDecrement = (product) => {
    if (product.quantity > 1) {
      updateQuantity(product.id, product.quantity - 1);
    }
  };

  const handleRemove = (product) => {
    removeFromCart(product.id);
  };

  const [subTotal, setSubTotal] = useState(0);
  const [total, setTotal] = useState(0.0);

  const shipping = 50.0;
  const tax = 0.0;

  useEffect(() => {
    const newSubTotal = cart.reduce((total, product) => {
      const qty = product.quantity || 1;
      return total + product.price * qty;
    }, 0);
    setSubTotal(newSubTotal);
  }, [cart]);

  useEffect(() => {
    const newTotal = cart.length > 0 ? subTotal + shipping + tax : 0;
    setTotal(newTotal);
  }, [subTotal, cart]);

  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleOrder = async () => {
    if (cart.length === 0) {
      toast.error("Your Cart is Empty, Please add the products!", {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }

    if (!user) {
      toast.error("Please login to place an order");
      return;
    }

    try {
      const orderDetails = {
        items: cart,
        subTotal,
        shipping,
        tax,
        total,
        status: 'pending' // You might want to add status
      };

      await addOrder(user.uid, orderDetails);

      setShowModal(true);
      clearCart();

    } catch (error) {
      toast.error("Failed to place order: " + error.message);
    }
  };

  return (
    <>
      <Helmet>
        <title>Your Cart | Niranjan Indoor Plants</title>
        <meta name="description" content="Review your selected items and proceed to checkout." />
      </Helmet>
      <main>
        <h1 className="text-4xl font-semibold text-center py-5 px-4">
          Your Cart
        </h1>

        <section className="max-w-[1280px] mx-auto px-4 flex flex-col lg:flex-row gap-4 relative">
          <section className="flex-1 max-h-[80vh] overflow-y-auto">
            <div className="flex flex-col gap-4 my-7">
              {cart.map((product) => {
                const qty = product.quantity || 1;
                return (
                  <div
                    className="flex flex-col md:flex-row justify-center items-center gap-1 w-full max-w-[700px] shadow-[0px_1px_2px_2px_#f0f0f0] h-[270px] rounded-md mx-auto"
                    key={product.id}
                  >
                    <img
                      src={product.img}
                      className="w-25 h-25 sm:h-30 sm:w-30 md:h-40 md:w-40 mx-4"
                    />
                    <div className="text-center flex-col gap-3">
                      <p className="text-base md:text-lg font-semibold text-center">
                        {product.name}
                      </p>
                      <p className="font-semibold text-base md:text-lg text-center">
                        {product.price}
                      </p>

                      <div className="flex gap-2 items-center justify-center rounded-sm mb-5 text-center">
                        <button
                          className="text-black bg-gray-700/50 px-3 py-0.5 rounded-full text-center text-lg font-bold"
                          onClick={() => handleDecrement(product)}
                        >
                          -
                        </button>
                        <input
                          className="rounded-md text-base font-semibold border-1 border-gray-400 py-1 size-y-15 text-center w-25"
                          value={qty}
                          readOnly
                        />
                        <button
                          className="text-black bg-gray-700/50 px-2.5 py-0.5 rounded-full text-center text-lg font-bold"
                          onClick={() => handleIncrement(product)}
                        >
                          +
                        </button>
                      </div>

                      <button
                        className="bg-lime-500/90 px-3 py-1.5 rounded-md"
                        onClick={() => handleRemove(product)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
          <section className="lg:sticky lg:top-4 lg:self-start flex flex-col shadow-[0px_1px_2px_2px_#f0f0f0] w-full lg:w-[400px] px-4 py-6 rounded-lg">
            <h3 className="text-xl font-semibold">Order Summary</h3>
            <div className="flex justify-between my-4">
              <p className="text-lg font-semibold">SubTotal:</p>
              <p className="text-lg font-semibold">
                <span className="text-xl">₹</span>
                {subTotal}
              </p>
            </div>
            <div className="flex justify-between my-4">
              <p className="text-lg font-semibold">Shipping:</p>
              <p className="text-lg font-semibold">
                <span className="text-xl">₹</span>
                {shipping}
              </p>
            </div>
            <div className="flex justify-between my-4">
              <p className="text-lg font-semibold">Tax:</p>
              <p className="text-lg font-semibold">
                <span className="text-xl">₹</span>
                {tax}
              </p>
            </div>
            <div className="flex justify-between my-4">
              <p className="text-xl font-bold lime-300">Total:</p>
              <p className="text-xl lime-300 font-bold">
                <span className="text-xl">₹</span>
                {total}
              </p>
            </div>
            <button
              className="bg-lime-300 py-2 rounded-md text-lg font-semibold text-black"
              onClick={handleOrder}
            >
              Order
            </button>
          </section>
        </section>
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
            <div className="bg-white p-8 rounded-lg shadow-xl text-center max-w-sm w-full mx-4">
              <div className="mb-4">
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                  <svg
                    className="h-6 w-6 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg leading-6 font-medium text-gray-900 mb-2">Order Placed Successfully!</h3>
              <p className="text-sm text-gray-500 mb-6">
                Thank you for your purchase. Your order has been received and is being processed.
              </p>
              <button
                onClick={() => {
                  setShowModal(false);
                  navigate('/');
                }}
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-lime-600 text-base font-medium text-white hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-500 sm:text-sm"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        )}
      </main>
    </>
  );
}

export default Cart;
