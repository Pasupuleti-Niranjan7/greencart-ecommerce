import { useEffect } from "react";
import useOrderStore from "../store/orderStore";
import useAuthStore from "../store/authStore";
import { Helmet } from 'react-helmet-async';

function Orders() {
  const { user } = useAuthStore();
  const { orders, fetchOrders, loading, error } = useOrderStore();

  useEffect(() => {
    if (user) {
      fetchOrders(user.uid);
    }
  }, [user, fetchOrders]);

  if (loading) return (
    <div className="h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-lime-500"></div>
    </div>
  );

  if (error) return <div className="text-center text-red-500 py-10">Error: {error}</div>;

  return (
    <>
      <Helmet>
        <title>My Orders | GreenCart</title>
        <meta name="description" content="View your recent order history and purchase details." />
      </Helmet>
      <div className="max-w-[1280px] mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-center">My Recent Orders</h1>
        
        {!user ? (
          <p className="text-center text-gray-500">Please login to view your orders.</p>
        ) : orders.length === 0 ? (
          <p className="text-center text-gray-500">You haven't placed any orders yet.</p>
        ) : (
          <div className="space-y-6">
            {orders.map((order) => (
              <div key={order.id} className="bg-white shadow-md rounded-lg p-6 border border-gray-100">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 border-b pb-4">
                  <div>
                    <p className="text-sm text-gray-500">Order ID: <span className="font-mono text-xs">{order.id}</span></p>
                    <p className="text-sm text-gray-500">Date: {order.createdAt?.toDate ? new Date(order.createdAt.toDate()).toLocaleDateString() : 'N/A'}</p>
                  </div>
                  <div className="mt-2 sm:mt-0">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      order.status === 'pending' ? 'bg-blue-100 text-blue-800' : 
                      'bg-green-100 text-green-800'
                    }`}>
                      {/* Delivery Logic: Price > 2000 AND Items > 3 -> 2-3 days, else 7 days */}
                      {order.total > 2000 && order.items.reduce((acc, item) => acc + (item.quantity || 1), 0) > 3 
                        ? "Delivered in 2-3 days" 
                        : "Delivered within 7 days"
                      }
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  {order.items.map((item, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <img src={item.img} alt={item.name} className="w-16 h-16 object-cover rounded-md" />
                      <div className="flex-1">
                        <h4 className="font-medium">{item.name}</h4>
                        <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                      </div>
                      <p className="font-medium">₹{item.price}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-4 border-t flex justify-end">
                  <p className="text-lg font-bold">Total: ₹{order.total.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Orders;
