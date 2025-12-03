import { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import { products } from "../../Shared/data/Data";

const AllPortfolio = () => {
	const [hoveredCard, setHoveredCard] = useState(null);
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
		"Towel heating rack"
	];

	// Filter products based on active category
	const filteredProducts =
		activeCategory === "All"
			? products
			: products.filter((product) => product.name === activeCategory);

	return (
		<div className="sectionGap">
			{/* Section Title */}
			<h2 className="globalHead text-center mb-[35px]">Our Creative Works</h2>

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
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-[15px] mt-[50px]">
				{filteredProducts.map((item) => (
					<div key={item.id}>
						<Link to={`/portfolio/${item.id}`}>
							<div
								className={`relative p-5 bg-no-repeat bg-center bg-cover h-[466px] bg-white shadow-lg rounded-[8px] transition-all duration-300 cursor-pointer group`}
								style={{
									backgroundImage: `url(${item.image})`,
								}}
								onMouseEnter={() => setHoveredCard(item.id)}
								onMouseLeave={() => setHoveredCard(null)}
							>
								{/* Hover Effect */}
								<div
									className={`absolute inset-0 bg-black bg-opacity-75 rounded-[8px] transition-all duration-300 h-[467px] flex flex-col justify-between p-6 ${
										hoveredCard === item.id ? "opacity-100" : "opacity-0"
									}`}
								>
									<div className="flex flex-col justify-between gap-72">
										<div className="flex justify-end m-[30px]">
											<div className="text-white p-2 rounded-full cursor-pointer bg-primaryColor transition">
												<FiArrowUpRight size={20} />
											</div>
										</div>
										<div className="flex ml-[5%]">
											<p className="portfolioHoverText font-Inter text-white">
												{item.name}
											</p>
										</div>
									</div>
								</div>
							</div>
						</Link>
					</div>
				))}
			</div>
		</div>
	);
};

export default AllPortfolio;
