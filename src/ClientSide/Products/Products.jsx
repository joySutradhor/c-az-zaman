import { useEffect } from "react";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";

import ProductsBanner from "./ProductsBanner/ProductsBanner";
import AllProducts from "./AllProducts/AllProducts";

const Products = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div>
			<Navbar></Navbar>
			<ProductsBanner/>
			<AllProducts/>
			{/* <PortfolioBanner></PortfolioBanner>
			<AllPortfolio></AllPortfolio> */}
			{/* <Marcury />
			<Marquee /> */}
			<Footer></Footer>
		</div>
	);
};

export default Products;
