import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const Video = () => {
	const logos = [
		{
			id: 1,
			name: "Video-01",
			video: "https://player.vimeo.com/video/1049910297?",
		},
		{
			id: 2,
			name: "Video-02",
			video: "https://player.vimeo.com/video/1049910590?",
		},
		{
			id: 3,
			name: "Video-03",
			video: "https://player.vimeo.com/video/1049915486?h=374a448dae",
		},
	];

	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,

		responsive: [
			{
				breakpoint: 1535,
				settings: { slidesToShow: 2, slidesToScroll: 1 },
			},
			{
				breakpoint: 768,
				settings: { slidesToShow: 1, slidesToScroll: 1 },
			},
			{
				breakpoint: 480,
				settings: { slidesToShow: 1, slidesToScroll: 1 },
			},
		],
	};

	return (
		<div className="sectionTop px-5 overflow-hidden">
			{/* Title and Description */}
			<div className="flex flex-col items-center justify-center mb-[76px]">
				<h2 className="globalHead text-center">Visual Representation</h2>
				<div className="flex items-center mt-[12px]">
					<div className="w-[280px] h-[1px] bg-gray-300"></div>
					<div className="w-[15px] h-[15px] bg-primaryColor rounded-full mx-2"></div>
					<div className="w-[280px] h-[1px] bg-gray-300"></div>
				</div>
			</div>

			{/* Sliding Videos */}
			<div className="relative">
				<Slider {...settings}>
					{logos.concat(logos).map((logo, index) => (
						<div
							key={index}
							className="px-5" // Adds horizontal spacing between slides
						>
							<div className="flex justify-center items-center">
								<iframe
									title={logo.name}
									src={`${logo.video}&title=0&byline=0&portrait=0&badge=0&autoplay=1&controls=0&dnt=1&loop=1&muted=1`}
									className="aspect-video w-full rounded-lg md:rounded-xl lg:rounded-2xl"
									allowFullScreen
									allow="autoplay;"
								></iframe>
							</div>
						</div>
					))}
				</Slider>
			</div>
		</div>
	);
};

export default Video;
