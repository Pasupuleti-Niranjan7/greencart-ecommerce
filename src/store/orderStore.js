import { create } from 'zustand';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp, query, orderBy, limit, getDocs } from 'firebase/firestore';

const useOrderStore = create((set) => ({
  orders: [],
  loading: false,
  error: null,

  addOrder: async (userId, orderDetails) => {
    set({ loading: true, error: null });
    try {
      const ordersRef = collection(db, "users", userId, "orders");
      await addDoc(ordersRef, {
        ...orderDetails,
        createdAt: serverTimestamp()
      });
      set({ loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
      throw error;
    }
  },

  fetchOrders: async (userId) => {
    set({ loading: true, error: null });
    try {
      const ordersRef = collection(db, "users", userId, "orders");
      const q = query(ordersRef, orderBy("createdAt", "desc"), limit(5));
      const querySnapshot = await getDocs(q);
      const orders = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      set({ orders, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  }
}));

export default useOrderStore;
