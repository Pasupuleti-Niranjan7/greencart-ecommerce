import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useCartStore = create(
  persist(
    (set, get) => ({
      cart: [],

      addToCart: (product) => {
        const { cart } = get();
        const isAlreadyInCart = cart.some((item) => item.id === product.id);

        if (!isAlreadyInCart) {
          set({ cart: [...cart, { ...product, quantity: 1 }] });
          return { success: true, message: `${product.name} added to cart!` };
        } else {
          return { success: false, message: `${product.name} is already in your cart!` };
        }
      },

      removeFromCart: (productId) => {
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== productId),
        }));
      },

      clearCart: () => {
        set({ cart: [] });
      },

      // Optional: if we want to move quantity management to global store
      updateQuantity: (productId, quantity) => {
        set((state) => ({
          cart: state.cart.map((item) => 
            item.id === productId ? { ...item, quantity } : item
          )
        }));
      }
    }),
    {
      name: 'cart-storage', // unique name for localStorage
    }
  )
);

export default useCartStore;
