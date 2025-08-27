import { NavLink } from "react-router-dom";

export const CardSection = ({ title, data }) => {
  return (
    <div className="w-11/12 mx-auto mt-10 p-5 flex flex-col gap-10">
      {/* Section Title */}
      <div className="text-3xl sm:text-4xl font-medium text-center md:text-left">
        {title}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {data.map((currelem) => {
          const { img, title, name, price, id } = currelem;
          return (
            <NavLink to={`/${id}`} key={id}>
              <div className="shadow-xl rounded-xl flex flex-col hover:shadow-2xl transition-shadow duration-300 h-full">
                {/* Image Section */}
                <div className="w-full aspect-[4/3]">
                  <img
                    src={img}
                    alt={name}
                    className="w-full h-full object-cover rounded-t-xl"
                  />
                </div>

                {/* Content Section */}
                <div className="flex flex-col px-2 py-3  flex-1 justify-between gap-5 h-fit">
                  <div className="font-bold text-sm sm:text-base">{title}</div>
                  <div className="text-gray-600 font-semibold text-xs sm:text-sm">
                    {name}
                  </div>
                  <div className="text-red-500 text-lg sm:text-xl font-bold">
                    {price}
                  </div>
                </div>
              </div>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};
