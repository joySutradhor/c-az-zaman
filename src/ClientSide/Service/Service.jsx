import { useEffect } from "react";
import Marquee from "../Marquee/Marquee";
import Marcury from "../Marquery/Marquery";
import ServicesSection from "../OurService/OurService";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import Create from "./Create/Create";
import ServiceBanner from "./ServiceBanner/ServiceBanner";

const Service = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div>
			<Navbar></Navbar>
			<ServiceBanner></ServiceBanner>
			<Create></Create>
			<ServicesSection />
			<Marcury></Marcury>
			<Marquee></Marquee>
			<Footer></Footer>
		</div>
	);
};

export default Service;
