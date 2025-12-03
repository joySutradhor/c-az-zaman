import { useEffect } from "react";
import Testimonials from "../Home/ClientsThought/ClientsThought";
import Marquee from "../Marquee/Marquee";
import Marcury from "../Marquery/Marquery";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import Video from "../Video/Video";
import AboutUsBanner from "./AboutUsBanner/AboutUsBanner";
import Choose from "./Choose/Choose";
import FAQ from "./FAQ/FAQ";
import OurTeam from "./OurTeam/OurTeam";
import Welcome from "./Welcome/WelcomeSection";

const AboutUs = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div>
			<Navbar />
			<AboutUsBanner></AboutUsBanner>
			<Welcome></Welcome>
			<Choose></Choose>
			<OurTeam />
			<FAQ />
			<Marquee />
			<Video></Video>
			<Testimonials />
			<Marcury></Marcury>
			<Footer></Footer>
		</div>
	);
};

export default AboutUs;
