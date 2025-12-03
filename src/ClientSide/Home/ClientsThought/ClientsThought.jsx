import { useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const testimonials = [
	{
		name: "ENGR Alim",
		role: "UNICO HOSPITAL",
		image: "blank-dp.png",
		rating: "5/5",
		feedback:
			"Outstanding quality and service. Truly impressive! The team was highly professional and attentive to every detail. I couldn’t have asked for a better experience. Thank you for the incredible support!",
	},
	{
		name: "Arct Subrota Sikder",
		role: "ARCHDOERS",
		image: "blank-dp.png",
		rating: "5/5",
		feedback:
			"Exceptional work! I look forward to collaborating again. The project was handled with great expertise and efficiency. Truly a team of skilled professionals who go above and beyond. Highly recommend!",
	},
	{
		name: "Mr. Rajesh Chowdhury",
		role: "Shanta Holdings - Procurement",
		image: "blank-dp.png",
		rating: "5/5",
		feedback:
			"Professional and reliable service, highly recommended! The entire process was smooth, and the results exceeded expectations. Their dedication and attention to detail are remarkable. A true pleasure to work with!",
	},
	{
		name: "MR Sorwar Khan",
		role: "SIX Seasons Hotel - Procurement",
		image: "blank-dp.png",
		rating: "5/5",
		feedback:
			"Top-notch service that exceeded expectations! The quality of work was unmatched, and the team’s expertise was evident throughout. I’m incredibly pleased with the outcome and will definitely return for future needs.",
	},
	{
		name: "ENGR Mizan",
		role: "AMARI DHAKA",
		image: "blank-dp.png",
		rating: "5/5",
		feedback:
			"Impressive quality and service, a delightful experience! The team delivered exactly what was promised, and the entire process was stress-free. Their professionalism and creativity truly shine. Keep up the great work!",
	},
	{
		name: "Mostafiz",
		role: "MOS.ARCH",
		image: "blank-dp.png",
		rating: "5/5",
		feedback:
			"Remarkable work and outstanding support throughout! From start to finish, the team was responsive and detail-oriented. I’m extremely happy with the results and can’t wait to collaborate again. Thank you for an exceptional experience!",
	},
	{
		name: "MD. Sakimul Islam",
		role: "Executive Director - MGH",
		image: "blank-dp.png",
		rating: "5/5",
		feedback:
			"A fantastic experience with great results! The dedication and creativity of the team made all the difference. I’m thrilled with the final outcome and would confidently recommend their services to others.",
	},
	{
		name: "MD. Shahidul Islam",
		role: "Assistant Manager - SCM",
		image: "blank-dp.png",
		rating: "5/5",
		feedback:
			"Highly satisfied with the exceptional service! The attention to detail and timely delivery were beyond impressive. It’s clear that the team genuinely cares about their clients’ needs. I’ll definitely be back!",
	},
	{
		name: "MD. Foyzur Razzaque",
		role: "Sr. Civil Engineer",
		image: "blank-dp.png",
		rating: "5/5",
		feedback:
			"Outstanding experience, will definitely recommend! The team’s expertise and dedication stood out from the very beginning. The results were exceptional, and the entire process was seamless. Thank you for going the extra mile!",
	},

	// {
	// 	name: "John Doe",
	// 	role: "Civil Engineer",
	// 	image: "/client-3.png",
	// 	rating: "5/5",
	// 	feedback:
	// 		"Amazing experience! The quality exceeded my expectations, and the service was outstanding. I'll definitely be coming back!",
	// },
];

const Testimonials = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [visibleCards, setVisibleCards] = useState(1);

	const updateVisibleCards = () => {
		if (window.innerWidth >= 1024) setVisibleCards(3); // Large screens
		else if (window.innerWidth >= 768) setVisibleCards(2); // Medium screens
		else setVisibleCards(1); // Small screens
	};

	useEffect(() => {
		updateVisibleCards();
		window.addEventListener("resize", updateVisibleCards);
		return () => window.removeEventListener("resize", updateVisibleCards);
	}, []);

	const handlePrev = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
		);
	};

	const handleNext = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
		);
	};

	return (
		<div className="sectionGap">
			<div className="flex flex-col items-center justify-center mb-[76px] overflow-hidden">
				<h2 className="globalHead text-center">What customer&apos;s say</h2>
				<div className="flex items-center mt-[12px]">
					<div className="w-[280px] h-[1px] bg-gray-300"></div>
					<div className="w-[15px] h-[15px] bg-primaryColor rounded-full mx-2"></div>
					<div className="w-[280px] h-[1px] bg-gray-300"></div>
				</div>
			</div>

			{/* Slider Container */}
			<div className="relative w-full px-5 overflow-hidden">
				{/* Arrow Controls */}
				<button
					className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-100 text-gray-600 rounded-full p-3 shadow-md z-10"
					onClick={handlePrev}
				>
					<FiChevronLeft size={24} />
				</button>
				<button
					className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-100 text-gray-600 rounded-full p-3 shadow-md z-10"
					onClick={handleNext}
				>
					<FiChevronRight size={24} />
				</button>

				{/* Slider Content */}
				<div
					className="flex transition-transform duration-500 ease-in-out"
					style={{
						transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
					}}
				>
					{testimonials.map((testimonial, index) => (
						<div
							key={index}
							className={`w-full lg:w-1/3 md:w-1/2 px-2 shrink-0 transition-all duration-300 
				
			  `}
							style={{ flex: `0 0 ${100 / visibleCards}%` }}
						>
							<div className="bg-[#F1F1F4]/[.5] p-6 rounded-[8px]  text-center">
								<img
									src={testimonial.image}
									alt={testimonial.name}
									className="w-20 h-20 rounded-full mx-auto mb-4"
								/>
								<h3 className="testmonialName">{testimonial.name}</h3>
								<p className="testmonialRole">{testimonial.role}</p>
								<div className="flex justify-center items-center mt-2">
									<span className="text-primaryColor text-lg">★★★★★</span>
									<span className="ml-2 testmonialRole text-primaryColor">
										{testimonial.rating}
									</span>
								</div>
								<p className="testmonialFeedback mt-4">
									{testimonial.feedback}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Testimonials;
