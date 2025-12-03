import ShowMembers from "./ShowMembers";
import { Members } from "./teamData";

const OurTeam = () => {
	return (
		<section className="font-Inter sectionGap">
			<div className="mx-auto">
				<div className="flex flex-col items-center justify-center mb-[76px] overflow-hidden">
					<h2 className="globalHead text-center">Our Team</h2>
					<div className="flex items-center mt-[12px]">
						<div className="w-[280px] h-[1px] bg-gray-300"></div>
						<div className="w-[15px] h-[15px] bg-primaryColor rounded-full mx-2"></div>
						<div className="w-[280px] h-[1px] bg-gray-300"></div>
					</div>
				</div>

				<div>
					<ShowMembers members={Members} />
				</div>
			</div>
		</section>
	);
};

export default OurTeam;
