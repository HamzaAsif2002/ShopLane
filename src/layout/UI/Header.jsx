import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export const Header = () => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartCount(storedCart.length);

    // optional: keep it updated when localStorage changes
    window.addEventListener("storage", () => {
      const updatedCart = JSON.parse(localStorage.getItem("cart")) || [];
      setCartCount(updatedCart.length);
    });
  }, []);
  return (
    <div className="w-full shadow-2xl bg-white sticky top-0 z-50">
      <div className="w-[90%] flex flex-col md:flex-row justify-center md:justify-between items-center p-4 mx-auto gap-4 md:gap-0">
        {/* Left section */}
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-4 md:gap-10 text-gray-800">
          <NavLink to="/">
            <h1 className="text-3xl md:text-4xl">
              <span className="font-medium">SHOP</span>LANE
            </h1>
          </NavLink>

          <div className="flex gap-4 md:gap-8 font-bold text-sm md:text-base">
            <h1>CLOTHING</h1>
            <h1>ACCESSORIES</h1>
          </div>
        </div>

        {/* Middle section */}
        <div className="w-full md:w-1/3 bg-gray-200 rounded flex justify-center">
          <input
            type="text"
            placeholder="Search for Clothing and Accessories"
            className="w-11/12 md:w-full px-4 py-1 text-sm font-medium text-gray-800 focus:outline-none focus:ring-0"
          />
        </div>

        {/* Right section */}
        <NavLink to="/cart">
          <div className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
            <span>{cartCount}</span>
          </div>
        </NavLink>
      </div>
    </div>
  );
};
