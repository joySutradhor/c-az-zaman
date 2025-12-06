import PropTypes from "prop-types";

const ShowMembers = ({ members }) => {
	return (
		<div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10 ">
			{members.map((member) => (
				<div key={member.id} className=" w-full">
					<div className="h-full flex flex-col items-center text-center">
						<img
							alt={member.name}
							className="flex-shrink-0 rounded-lg w-56 h-64 xl:w-64 xl:h-72 2xl:w-full 2xl:h-auto object-cover object-center mb-4"
							src={member.image}
						/>
						<div className="w-full">
							<h2 className="font-bold font-Barlow text-lg text-gray-900">
								{member.name}
							</h2>
							<h3 className="text-gray-500 mb-3">{member.designation}</h3>

							{/* no need of descriptions right now */}
							{/* <p className="mb-4 homePara text-[#1E1E1E]/[0.5]">
								{member.description}
							</p> */}
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

ShowMembers.propTypes = {
	members: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			image: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			designation: PropTypes.string.isRequired,
			description: PropTypes.string.isRequired,
			facebookLink: PropTypes.string,
			twitterLink: PropTypes.string,
			whatsappLink: PropTypes.string,
		})
	).isRequired,
};

export default ShowMembers;
