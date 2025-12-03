import { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { products } from "../../Shared/data/Data";

const OurPortfolio = () => {
	const [hoveredCard, setHoveredCard] = useState(null);

	const sliderSettings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		responsive: [
			{ breakpoint: 1024, settings: { slidesToShow: 2 } },
			{ breakpoint: 768, settings: { slidesToShow: 1 } },
		],
	};

	return (
		<div className="sectionGap">
			<div className="flex flex-col items-center justify-center mb-[76px] overflow-hidden">
				<h2 className="globalHead text-center">Our Portfolio</h2>
				<div className="flex items-center mt-[12px]">
					<div className="w-[280px] h-[1px] bg-gray-300"></div>
					<div className="w-[15px] h-[15px] bg-primaryColor rounded-full mx-2"></div>
					<div className="w-[280px] h-[1px] bg-gray-300"></div>
				</div>
			</div>

			{/* Product Slider */}
			<Slider {...sliderSettings}>
				{products.map((item) => (
					<div key={item.id} className="px-3">
						<Link to={`/portfolio/${item.id}`}>
							<div
								className={`relative p-5 bg-no-repeat bg-center bg-cover h-[466px] bg-white rounded-[8px] transition-all duration-300 cursor-pointer group`}
								style={{
									backgroundImage: `url(${item.image})`,
								}}
								onMouseEnter={() => setHoveredCard(item.id)}
								onMouseLeave={() => setHoveredCard(null)}
							>
								{/* Hover Effect */}
								<div
									className={`absolute inset-0 bg-black bg-opacity-75 rounded-[8px] transition-all duration-300 h-[467px]
                  ${
										hoveredCard === item.id
											? "opacity-100 pointer-events-auto"
											: "opacity-0 pointer-events-none"
									}`}
								>
									<div className="flex flex-col justify-between gap-72">
										<div className="flex justify-end m-[30px]">
											<div className="text-white p-2 rounded-full cursor-pointer bg-primaryColor transition">
												<FiArrowUpRight size={20} />
											</div>
										</div>
										<div className="flex ml-[10%]">
											<p className="portfolioHoverText font-Inter text-white">
												{item.name}
											</p>
										</div>
									</div>
									{/* <div className="absolute bottom-6 md:bottom-[-10px] right-4">
                  <button
                    onClick={(e) => e.stopPropagation()}
                    className="border border-gray-300 p-2 rounded-full cursor-pointer hover:bg-gray-100 transition"
                  >
                    <IoCloseOutline size={20} />
                  </button>
                </div> */}
								</div>
							</div>
						</Link>
					</div>
				))}
			</Slider>

			<div className="flex justify-center items-center hover:text-primaryColor">
				<Link to="/portfolio" className="mt-[50px] globalBtnDiv">
					<div className="globalBtn">
						<div
							to="/portfolio"
							className="flex gap-2 justify-center items-center"
						>
							View All
							<MdArrowOutward />
						</div>
					</div>
				</Link>
			</div>
		</div>
	);
};

export default OurPortfolio;
