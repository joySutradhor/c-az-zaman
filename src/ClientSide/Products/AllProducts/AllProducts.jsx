import { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { ProductsDataArray } from "../../Shared/data/ProdcutsDataArray";
import { AiOutlineClose } from "react-icons/ai";

const AllProducts = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState(null); // For modal

  const categories = [
    "All",
    "Shower Enclosure",
    "Toilet Partition",
    "Track Socket",
    "Lighting Solution",
    "Hotel Item",
    "Hospital Item",
    "Interior Work",
    "Office Furniture",
    "Chair Item",
    "Towel Heating Rack",
    "Air diffuser",

    // "Assembly Work",
  ];

  const filteredProducts =
    activeCategory === "All"
      ? ProductsDataArray
      : ProductsDataArray.filter((product) => product.name === activeCategory);

  return (
    <div className="sectionGap">
      {/* Section Title */}
      <h2 className="globalHead text-center mb-[35px]">Our Products</h2>

      {/* Category Filter Buttons */}
      <div className="flex flex-wrap gap-2 md:gap-4 mb-8 font-Inter">
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
      <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-10 mt-[50px]">
        {filteredProducts.map((item, i) => (
          <div
            key={i}
            className="bg-gray-100 p-5 rounded-xl cursor-pointer"
            onClick={() => setSelectedProduct(item)} 
          >
            <img
              src={item?.image}
              className="h-[40vh] w-full rounded-md object-cover"
              alt={item.name}
            />
            <div className="flex justify-between pt-5">
              <p className="portfolioHoverText font-Inter text-black/75">
                {item.title}
              </p>
              <div className="text-black/75 p-2 rounded-full bg-primaryColor transition">
                <FiArrowUpRight size={20} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 bg-black/50 flex justify-center items-center z-50"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="bg-white p-5 lg:p-8 rounded-xl max-w-4xl w-full relative mx-5 lg:mx-0"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-3 text-xl font-bold"
              onClick={() => setSelectedProduct(null)}
            >
              <AiOutlineClose className="text-red-500 cursor-pointer" />
            </button>

            <div className="grid md:grid-cols-2 gap-5 mt-5 lg:mt-0 ">
              <div>
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-[40vh] object-cover rounded-md mb-4"
                />
              </div>
              <div>
                <h3 className="portfolioHoverText font-Barlow font-bold text-black/80 mb-2">
                  {selectedProduct.title}
                </h3>
                <p className="mb-2 text-gray-700 font-Inter">
                  {selectedProduct.description}
                </p>
                <p className="mb-1 font-Inter">
                  <strong>Size:</strong> {selectedProduct.size}
                </p>
                <p>
                  <strong>Colors:</strong> {selectedProduct.color.join(", ")}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllProducts;
