// import { useCart } from "../../CartContext";

// export const Cart = () => {
//   const { cart, setCart } = useCart();

//   // ✅ remove by index
//   const placeOrder = (index) => {
//     const updatedCart = [];
//     setCart(updatedCart);
//   };

//   return (
//     <div className="w-[90%] max-w-6xl mx-auto py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
//       {/* Left: Cart Items (span 2 columns on desktop) */}
//       <div className="md:col-span-2">
//         <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

//         {cart.length === 0 ? (
//           <p className="text-gray-600">Your cart is empty 🛒</p>
//         ) : (
//           <div className="space-y-4">
//             {cart.map((item, index) => (
//               <div
//                 key={index}
//                 className="flex items-center justify-between p-4 border rounded-lg shadow"
//               >
//                 {/* Product Info */}
//                 <div className="flex items-center gap-4">
//                   <img
//                     src={item.img}
//                     alt={item.title}
//                     className="w-20 h-20 object-cover rounded"
//                   />
//                   <div>
//                     <h2 className="font-bold">{item.title}</h2>
//                     <p className="text-gray-600">{item.name}</p>
//                     <p className="text-red-500 font-bold">{item.price}</p>
//                     <p className="text-gray-700">Quantity: {item.quantity}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>

//       {/* Right: Place Order Section */}
//       <div className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col gap-4 h-fit">
//         <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
//         <p className="text-gray-700">
//           Total Items: <span className="font-semibold">{cart.length}</span>
//         </p>
//         <p className="text-gray-700">
//           Total Price:{" "}
//           <span className="font-semibold text-red-500">
//             {cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}
//           </span>
//         </p>
//         <button
//           className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
//           onClick={placeOrder}
//         >
//           Place Order
//         </button>
//       </div>
//     </div>
//   );
// };
import { useState } from "react";
import { useCart } from "../../CartContext";

export const Cart = () => {
  const { cart, setCart } = useCart();
  const [orderPlaced, setOrderPlaced] = useState(false);

  const placeOrder = () => {
    // Clear cart
    setCart([]);
    localStorage.removeItem("cart"); // clear from localStorage if you store it there

    // Show success message
    setOrderPlaced(true);
  };

  return (
    <div className="w-[90%] max-w-6xl mx-auto py-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
      {/* Left: Cart Items */}
      <div className="md:col-span-2">
        <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

        {orderPlaced && (
          <p className="text-green-600 font-semibold mb-4">
            Your order has been placed successfully. You will be notified
            through email 📧
          </p>
        )}

        {cart.length === 0 && !orderPlaced ? (
          <p className="text-gray-600">Your cart is empty 🛒</p>
        ) : (
          <div className="space-y-4">
            {cart.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 border rounded-lg shadow"
              >
                {/* Product Info */}
                <div className="flex items-center gap-4">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div>
                    <h2 className="font-bold">{item.title}</h2>
                    <p className="text-gray-600">{item.name}</p>
                    <p className="text-red-500 font-bold">{item.price}</p>
                    <p className="text-gray-700">Quantity: {item.quantity}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Right: Place Order Section */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col gap-4 h-fit">
        <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
        <p className="text-gray-700">
          Total Items: <span className="font-semibold">{cart.length}</span>
        </p>
        <p className="text-gray-700">
          Total Price:{" "}
          <span className="font-semibold text-red-500">
            {cart.reduce((acc, item) => {
              // Remove non-digit characters from price
              const price = Number(
                item.price.toString().replace(/[^0-9.-]+/g, "")
              );
              const quantity = Number(item.quantity) || 0;
              return acc + price * quantity;
            }, 0)}
          </span>
        </p>
        <button
          className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
          onClick={placeOrder}
          disabled={cart.length === 0} // disable button if cart empty
        >
          Place Order
        </button>
      </div>
    </div>
  );
};
