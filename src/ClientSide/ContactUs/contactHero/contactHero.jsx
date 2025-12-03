const ContactBanner = () => {
	return (
		<div className="relative  overflow-hidden">
			{/* Background Image */}
			<div
				style={{
					backgroundImage: `url("./contactBanner.jpg")`,
				}}
				className="bg-no-repeat  bg-center bg-cover w-full h-[236px] md:h-[472px] transition-all duration-500 ease-in-out"
			>
				<div
					style={{
						backgroundColor: "rgba(0, 0, 0, 0.6)", // Black with 60% opacity
					}}
					className="absolute inset-0"
				></div>
			</div>

			{/* Content Section */}
			<div
				className="absolute inset-0  md:text-left sectionGap md:sectionGap
  flex flex-col justify-center items-center  "
			>
				<div className="hidden lg:block">
					<div className="flex items-center mt-[12px] ">
						<div className="w-[120px] h-[1px] bg-gray-300"></div>
						<h1 className="text-[#FFFFFF] pb-[16px] heroHead  text-center mx-4">
							Contact
						</h1>
						<div className="w-[120px] h-[1px] bg-gray-300"></div>
					</div>
				</div>

				<div className=" lg:hidden  block   text-[#FFFFFF] pb-[16px] heroHead  text-center">
					Contact
				</div>

				<p className="text-[#FFFFFF]/80 pb-[40px] heroPara text-center font-Inter max-w-[768px]">
					Home {">"} Contact
				</p>
			</div>
		</div>
	);
};

export default ContactBanner;
