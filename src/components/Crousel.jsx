import { useEffect, useState } from "react";
import img1 from "/crousel/img1.png";
import img2 from "/crousel/img2.png";
import img3 from "/crousel/img3.png";
import img4 from "/crousel/img4.png";

export const Crousel = () => {
  const images = [img1, img2, img3, img4];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval); // cleanup
  }, [images.length]);
  return (
    <div className="w-[90%] flex justify-center items-center m-auto p-5 relative ">
      <img
        src={images[index]}
        alt=""
        className="transition-opacity duration-700 opacity-100 ease-in-out w-full h-auto"
      />

      {/* Dots */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-6">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)} // Clickable dot
            className={`w-1 h-1 rounded-full transition-all duration-300
              ${index === i ? "bg-black scale-125" : "bg-gray-400"}`}
          ></button>
        ))}
      </div>
    </div>
  );
};
