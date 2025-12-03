import { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import { products } from "../../Shared/data/Data";

const AllProducts = () => {
  // const [hoveredCard, setHoveredCard] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All"); // State for selected category

  // Define categories
  const categories = [
    "All",
    "Shower Enclosure",
    "Toilet Partition",
    "Lighting Solution",
    "Office Furniture",
    "Interior Work",
    "Assembly Work",
    "Air diffuser",
    "Towel heating rack",
  ];

  // Filter products based on active category
  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((product) => product.name === activeCategory);

  return (
    <div className="sectionGap">
      {/* Section Title */}
      <h2 className="globalHead text-center mb-[35px]">Our Products</h2>

      {/* Category Filter Buttons */}
      <div className="flex flex-wrap  gap-2 md:gap-4 mb-8 font-Inter">
        {categories.map((category) => (
          <button
            key={category}
            className={`p-2 md:px-4 md:py-2 rounded-md border text-[12px] md:text-[16px] 2xl:text-[24px] ${
              activeCategory === category
                ? "bg-primaryColor text-white"
                : "bg-gray-50 border-primaryColor text-gray-700"
            } hover:bg-primaryColor hover:text-white transition-all duration-200`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-10 mt-[50px]">
        {filteredProducts.map((item) => (
          <div key={item.id} className="bg-gray-100 p-5 rounded-xl ">
            <div className="">
              <img
                src={item?.image}
                className="h-[30vh] w-full rounded-md border"
              ></img>
            </div>
            <div className="flex justify-between pt-5">
              <div className=" ">
                <p className="portfolioHoverText font-Inter text-black/75">
                  {item.name}
                </p>
              </div>
              <div className="text-black/75 p-2 rounded-full cursor-pointer bg-primaryColor transition">
                <FiArrowUpRight size={20} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
