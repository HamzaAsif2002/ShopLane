// export const Cart = () => {
//   return (
//     <div className="w-[100%] flex flex-col justify-center items-center  ">
//       <div className="w-[90%] flex flex-col my-7 pl-4 gap-3 ">
//         <h1 className="text-4xl font-medium">Checkout</h1>
//         <h3 className="font-medium text-xl">
//           Total Items: <span>0</span>
//         </h3>
//       </div>
//       <div className="p-5 flex gap-7">
//         <div className="shadow rounded-xl hover:rounded-2xl ">
//           <p>Lorem ipsum dolor sit amet c</p>
//           <h1>Amount: RS14999</h1>
//         </div>
//         <div className="flex flex-col gap-3">
//           <h1>Total Amount</h1>
//           <h1>Amount:RS 74995</h1>
//           <div>
//             <button>Place Order</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
import { useEffect, useState } from "react";

export const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  return (
    <div className="w-[90%] max-w-4xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty 🛒</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 border rounded-lg shadow"
            >
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
                </div>
              </div>
              <button
                className="text-sm bg-red-500 text-white px-3 py-1 rounded"
                onClick={() => {
                  // remove item
                  const updatedCart = cartItems.filter((_, i) => i !== index);
                  setCartItems(updatedCart);
                  localStorage.setItem("cart", JSON.stringify(updatedCart));
                }}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
