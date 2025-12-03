const Welcome = () => {
	return (
		<div className="sectionGap">
			{/* <h1 className="globalHead text-center mb-[76px]">About us</h1> */}

			<div className="grid grid-cols-1 lg:grid-cols-2 gap-[76px] items-center">
				<div className="h-[424px] ">
					<img
						src="/welcome.png"
						alt=""
						className="h-full w-full object-cover rounded-[8px]"
					/>
				</div>
				<div>
					<p className="heroPara text-primaryColor pb-[6px]">Welcome to</p>
					<h2 className="globalHead pb-[10px]">Authentic Zaman</h2>
					<p className="heroPara text-[#131212]/[.6] pb-[30px]">
						Welcome to Authentic Zaman, where your vision comes alive with
						thoughtful, custom design. Our professional team is committed to
						crafting singular, functional spaces reflective not only of your
						style but also of your needs. We pay attention to creativity,
						quality, and craftsmanship-be it for a home or business-to make your
						surroundings distinctively special. Let us help you create a space
						that inspires and feels uniquely yours.
					</p>

					<div className="flex flex-row items-start gap-[12px] mb-[25px]">
						<img
							src="/icons_plan.png"
							alt=""
							className="w-[24px] h-[24px] object-cover"
						/>
						<div>
							<h1 className="menuHead pb-[6px]">Qualified Planning</h1>
							<p className="heroPara text-[#131212]/[.6]">
								At Authentic Zaman, we deliver qualified planning to craft
								spaces that are both functional and visually stunning.
							</p>
						</div>
					</div>
					<div className="flex flex-row items-start gap-[12px]">
						<img
							src="/profession.png"
							alt=""
							className="w-[24px] h-[24px] object-cover"
						/>
						<div>
							<h1 className="menuHead pb-[6px]">Professional Design</h1>
							<p className="heroPara text-[#131212]/[.6]">
								We specialize in professional design to create spaces that are
								both practical and beautifully crafted.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Welcome;
