import { create } from "zustand";

const useCartStore = create((set, get) => ({
  cart: [],
  addItem: (item) => {
    const cart = get().cart;
    const existingItem = cart.find((i) => i._id === item._id);

    if (existingItem) {
      set({
        cart: cart.map((i) =>
          i._id === item._id ? { ...i, quantity: i.quantity + 1 } : i
        ),
      });
    } else {
      set({ cart: [...cart, { ...item, quantity: 1 }] });
    }
  },
  removeItem: (id) => {
    const cart = get().cart;
    set({
      cart: cart.filter((item) => item._id !== id),
    });
  },
  updateItemQuantity: (id, quantity) => {
    if (quantity <= 0) {
      get().removeItem(id);
    } else {
      const cart = get().cart;
      set({
        cart: cart.map((item) =>
          item._id === id ? { ...item, quantity } : item
        ),
      });
    }
  },
  clearCart: () => set({ cart: [] }),
  setCart: (cart) => set({ cart }), 
}));

export default useCartStore; 