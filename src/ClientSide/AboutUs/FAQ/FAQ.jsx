import { useState } from "react";

const FAQ = () => {
	const [activeIndex, setActiveIndex] = useState(0); // Initialize with 0 for the first FAQ

	const toggleFAQ = (index) => {
		setActiveIndex(activeIndex === index ? null : index);
	};

	const accordion1 = [
		{
			question: "Who are we, and what makes Authentic Zaman Traders stand out?",
			answer:
				"We are a vibrant, young, and talented interior design firm based in Dhaka, Bangladesh. What sets us apart is our focus on sustainable, cost-effective designs that are both functional and personalized, making every project truly unique.",
		},
		{
			question:
				"How long has Authentic Zaman Traders been in the interior design industry?",
			answer:
				"Since 2022, we have been delivering innovative and tailored interior design solutions for families and businesses, ensuring every space reflects our clients' needs and aspirations.",
		},
		{
			question: "What areas do Authentic Zaman Traders serve in Dhaka?",
			answer:
				"Our team has successfully completed projects in key locations such as Gulshan, Baridhara, Banani, Bashundhara, Dhanmondi, Khulshi, Mirpur DOHS and many more. No matter where you are, we bring our expertise to you!",
		},
		{
			question: "What type of clients do we work with?",
			answer:
				"We collaborate with families and businesses alike, offering stress-free design experiences that turn houses into homes and workplaces into inspiring environments.",
		},
		{
			question: "What is our design philosophy at Authentic Zaman Traders?",
			answer:
				"Our philosophy revolves around creating sustainable, functional, and cost-effective designs that not only look great but also enhance the way you live or work.",
		},
		{
			question:
				"Why choose Authentic Zaman Traders for your interior design needs?",
			answer:
				"We listen, plan, and execute designs that match your lifestyle while ensuring the process is smooth and enjoyable from start to finish.",
		},
	];

	return (
		<div className="grid grid-cols-1 gap-[50px] sectionGap w-full h-auto font-Inter">
			<div>
				<div
					id="assistance"
					className="grid grid-cols-1 gap-[50px] justify-center items-center"
				>
					{/* Text and Accordion */}
					<div className="rounded-lg">
						<h2 className="text-black text-center mb-[50px] globalHead">
							Frequently Asked Question
						</h2>
						{/* <p className="mx-auto text-center  max-w-[772px] text-[#FFFFFF]/[.80] mb-[20px] font-normal bodyText">
              Unlock the power of digital marketing to attract more customers.
              Our tailored strategies focus on increasing your online presence,
              engaging your target audience, and driving conversions to help
              your business grow.
            </p> */}
						<div className="space-y-4">
							<div className="space-y-5">
								{accordion1.map((item, index) => (
									<div key={index} className="rounded-[8px]">
										<button
											className={`w-full border border-[#CBD5E1] flex justify-between rounded-[8px] items-center p-4 ${
												activeIndex === index
													? "bg-[#FF8C00] text-white border-none rounded-b-none"
													: "bg-transparent text-[#000]"
											}`}
											onClick={() => toggleFAQ(index)}
										>
											<span className="font-normal bodyText text-left">
												{item.question}
											</span>
											<div className="flex-shrink-0 w-5 h-5">
												{" "}
												{/* Fixed size container */}
												<svg
													className={`transform ${
														activeIndex === index ? "rotate-180" : "text-[#000]"
													}`}
													xmlns="http://www.w3.org/2000/svg"
													fill="none"
													viewBox="0 0 24 24"
													stroke="currentColor"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={2}
														d="M19 9l-7 7-7-7"
													/>
												</svg>
											</div>
										</button>
										{activeIndex === index && (
											<div className="p-4 text-[#0E0D0D]/[.8] rounded-[8px] rounded-t-none bg-[#F9F9F9] font-normal">
												{item.answer}
											</div>
										)}
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FAQ;
