import { useEffect } from "react";
import Marquee from "../Marquee/Marquee";
import Marcury from "../Marquery/Marquery";
import PortfolioBanner from "../Portfolio/PortfolioBanner/PortfolioBanner";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import PortfolioHero from "./PortfolioHero/portfolioHero";

const PortfolioDetails = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<Navbar />
			<PortfolioBanner />
			<PortfolioHero />
			<Marcury />
			<Marquee />
			<Footer />
		</>
	);
};

export default PortfolioDetails;
