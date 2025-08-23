import { useParams } from "react-router-dom";
import clothsData from "../services/Cloths.json";
import accesData from "../services/Accessories.json";
import { useState } from "react";

export const ProductDetails = () => {
  const { id } = useParams();

  const productId = parseInt(id, 10);

  const product =
    clothsData.find((item) => item.id === productId) ||
    accesData.find((item) => item.id === productId);

  if (!product) {
    return <h1>Product not found</h1>;
  }

  const [mainImage, setMainImage] = useState(product.img);

  const handleImageChanging = (img) => {
    setMainImage(img);
  };

  //Add to Cart.
  const handleCartItem = (product) => {
    // Get existing cart from localStorage (or empty array if none)
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Add the new product
    cart.push(product);

    // Save back to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    alert(`${product.title} added to cart ✅`);
  };

  return (
    <div className="w-[90%] max-w-7xl mx-auto flex flex-col md:flex-col lg:flex-row gap-8 md:gap-10  items-center h-screen">
      {/* Left: Main Product Image */}
      <div className="flex-shrink-0 w-full max-w-[400px] aspect-[4/5] rounded-lg shadow-lg overflow-hidden border-2 border-transparent hover:border-teal-500 transition-all duration-300">
        <img
          src={mainImage}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right: Product Details */}
      <div className="flex-1 mt-6 md:mt-0 ">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">{product.title}</h1>
        <h5 className="text-teal-600 font-semibold mb-4">{product.name}</h5>
        <span className="block text-lg sm:text-xl font-semibold text-green-600 mb-4">
          {product.price}
        </span>

        {/* Description */}
        <h3 className="text-lg sm:text-xl font-semibold mb-1">Description</h3>
        <p className="text-gray-700 mb-6">{product.description}</p>

        {/* Product Preview Thumbnails */}
        <h3 className="text-lg sm:text-xl font-semibold mb-2">
          Product Preview
        </h3>
        <div className="flex flex-wrap gap-3 mb-6">
          {product.images.map((thumb, index) => (
            <div
              key={index}
              className="w-16 sm:w-20 h-16 sm:h-20 rounded-md overflow-hidden shadow-lg cursor-pointer "
              onClick={() => handleImageChanging(thumb)}
            >
              <img
                src={thumb}
                alt="preview"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Add to Cart Button */}
        <button
          className="px-4 sm:px-6 py-2 sm:py-3 bg-teal-600 text-white font-semibold rounded-md shadow-md hover:bg-teal-700 transition"
          onClick={() => handleCartItem(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};
