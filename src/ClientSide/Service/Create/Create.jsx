const Create = () => {
	return (
		<div className="sectionGap">
			{/* <h1 className="globalHead text-center mb-[76px]">About us</h1> */}

			<div className="grid grid-cols-1 lg:grid-cols-2 gap-[76px] items-center">
				<div className="h-[424px] ">
					<img
						src="/serviceCreate.jpg"
						alt=""
						className="h-full w-full object-cover rounded-[8px]"
					/>
				</div>
				<div>
					<p className="heroPara text-primaryColor pb-[6px]">design studio</p>
					<h2 className="globalHead pb-[10px]">
						We create stunning home designs
					</h2>
					<p className="heroPara text-[#131212]/[.6] pb-[30px]">
						At Authentic Zaman, we&apos;re passionate about designing homes that
						make a lasting impression. We understand that your home is a
						reflection of your personality and lifestyle, so we craft spaces
						that are both beautiful and functional. Whether renovating or
						designing from scratch, our team is dedicated to bringing your
						vision to life and creating spaces where you&apos;ll love to live.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Create;
