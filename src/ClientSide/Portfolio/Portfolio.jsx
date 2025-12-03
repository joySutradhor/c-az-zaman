import { useEffect } from "react";
import Marquee from "../Marquee/Marquee";
import Marcury from "../Marquery/Marquery";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import AllPortfolio from "./AllPortfolio/AllPortfolio";
import PortfolioBanner from "./PortfolioBanner/PortfolioBanner";

const Portfolio = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div>
			<Navbar></Navbar>
			<PortfolioBanner></PortfolioBanner>
			<AllPortfolio></AllPortfolio>
			<Marcury />
			<Marquee />
			<Footer></Footer>
		</div>
	);
};

export default Portfolio;
