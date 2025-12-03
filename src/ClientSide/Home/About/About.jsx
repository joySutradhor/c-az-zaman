import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";

const About = () => {
	return (
		<div className="sectionGap">
			<div className="flex flex-col items-center justify-center mb-[76px] overflow-hidden">
				<h2 className="globalHead text-center">About us</h2>
				<div className="flex items-center mt-[12px]">
					<div className="w-[280px] h-[1px] bg-gray-300"></div>
					<div className="w-[15px] h-[15px] bg-primaryColor rounded-full mx-2"></div>
					<div className="w-[280px] h-[1px] bg-gray-300"></div>
				</div>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-2 gap-[50px] items-center">
				<div className="h-[424px] ">
					<img
						src="/trial-images/p-11.jpg"
						alt=""
						className="h-full w-full object-cover rounded-[8px]"
					/>
				</div>
				<div>
					<p className="heroPara text-[#131212]/[.6]">
						Authentic Zaman Traders is a professional interior design firm
						located in Dhaka, Bangladesh, with a focus on creating sustainable,
						cost-effective, and functional designs. Since our founding in 2022
						till now, our team of young, energetic, and talented designers has
						had the privilege of working with clients across various areas,
						including Gulshan, Baridhara, Banani, Basundhara, Dhanmondi,
						Khulshi, and more. We take pride in collaborating closely with our
						clients to craft personalized design experiences that are both
						stress-free and fulfilling, whether we&apos;re helping families
						transform their homes or assisting businesses in creating inspiring
						workspaces.
					</p>
					<p className="heroPara text-[#131212]/[.6] mt-[30px]">
						Start your journey with us today and see how we go above and beyond
						to deliver the best for you. Let us show you why{" "}
						<strong>Authentic Zaman </strong>
						is where your search for excellence begins.
					</p>
					<div className="globalBtnDiv inline-block mt-[30px]">
						<Link to="/about">
							<button className="globalBtn">
								More details
								<MdArrowOutward />
							</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
