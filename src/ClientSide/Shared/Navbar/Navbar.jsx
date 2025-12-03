import { useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { MdClose } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const isActive = (path, location) => {
	if (path === "/portfolio") {
		return location.pathname.startsWith("/portfolio");
	}
	return location.pathname === path;
};

const Navbar = () => {
	const location = useLocation();

	const [open, setOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	const handleMenu = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const menuClose = () => {
		setOpen(false);
	};

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 0) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div className="">
			{/* Mobile Navbar */}
			<nav
				className={`lg:hidden absolute inset-0 z-50 fix ${
					scrolled ? "hidden" : ""
				}`}
			>
				<div className="navbarLeftRightSpace flex justify-between items-center  font-helvetica font-normal">
					<div className="headerLogo">
						<Link to="/">
							<img
								className="h-full w-full object-contain"
								src="/AuthenticBanner.png"
								alt="brand logo"
							/>
						</Link>
					</div>
					<div>
						<IoMenu
							className="text-primaryColor"
							onClick={handleMenu}
							size={30}
						></IoMenu>
					</div>
					{open && (
						<ul className="px-7 py-3 absolute top-0 right-0 bg-white w-[100%] z-50 transition-transform duration-1000 ease-in-out shadow-xl">
							<div className="pb-[30px] flex justify-between items-center border-b-2">
								<div className="headerLogo">
									<Link to="/">
										<img
											className="h-full w-full object-cover"
											src="/AuthenticBanner.png"
											alt="brand logo"
										/>
									</Link>
								</div>
								<div>
									<MdClose
										onClick={handleClose}
										className="text-primaryColor"
										size={30}
									/>
								</div>
							</div>

							<div className="mobileMenuParent23 mb-2 pb-4 flex flex-col justify-center items-center">
								<Link to="/" onClick={menuClose}>
									<li
										className={`mt-2 px-4 py-2 ${
											isActive("/", location)
												? "bg-primaryColor text-white font-bold rounded-md"
												: "text-black hover:text-primaryColor"
										}`}
									>
										Home
									</li>
								</Link>

								<Link to="/about" onClick={menuClose}>
									<li
										className={`mt-2 px-4 py-2 ${
											isActive("/about", location)
												? "bg-primaryColor text-white font-bold rounded-md"
												: "text-black hover:text-primaryColor"
										}`}
									>
										About Us
									</li>
								</Link>
								<Link to="/service" onClick={menuClose}>
									<li
										className={`mt-2 px-4 py-2 ${
											isActive("/service", location)
												? "bg-primaryColor text-white font-bold rounded-md"
												: "text-black hover:text-primaryColor"
										}`}
									>
										Services
									</li>
								</Link>
								<Link to="/portfolio" onClick={menuClose}>
									<li
										className={`mt-2 px-4 py-2 ${
											isActive("/portfolio", location)
												? "bg-primaryColor text-white font-bold rounded-md"
												: "text-black hover:text-primaryColor"
										}`}
									>
										Portfolio
									</li>
								</Link>
								<Link to="/products" onClick={menuClose}>
									<li
										className={`mt-2 px-4 py-2 ${
											isActive("/products", location)
												? "bg-primaryColor text-white font-bold rounded-md"
												: "text-black hover:text-primaryColor"
										}`}
									>
										Products
									</li>
								</Link>
								<Link to="/contact" onClick={menuClose}>
									<li
										className={`mt-2 px-4 py-2 ${
											isActive("/contact", location)
												? "bg-primaryColor text-white font-bold rounded-md"
												: "text-black hover:text-primaryColor"
										}`}
									>
										Contact Us
									</li>
								</Link>
							</div>
						</ul>
					)}
				</div>
			</nav>

			{/* large screen nav */}
			<nav className="hidden lg:block w-full lg:z-50 absolute inset-x-0">
				<div className="largeScreenMenu bg-[#FFFFFF] py-4 font-helvetica font-normal flex justify-between place-content-baseline">
					<div className="headerLogo">
						<Link to="/">
							<img
								className="h-full w-full object-cover"
								src="/AuthenticBanner.png"
								alt="brand logo"
							/>
						</Link>
					</div>

					<div>
						<div className="mobileMenuParent">
							<Link to="/" onClick={menuClose}>
								<li
									className={`px-3 py-1 ${
										isActive("/", location)
											? "text-[#fff] bg-primaryColor rounded-lg"
											: "text-[#000] hover:text-primaryColor"
									}`}
								>
									Home
								</li>
							</Link>

							<Link to="/about" onClick={menuClose}>
								<li
									className={`px-3 py-1 ${
										isActive("/about", location)
											? "text-[#fff] bg-primaryColor rounded-lg"
											: "text-[#000] hover:text-primaryColor"
									}`}
								>
									About Us
								</li>
							</Link>

							<Link to="/service" onClick={menuClose}>
								<li
									className={`px-3 py-1 ${
										isActive("/service", location)
											? "text-[#fff] bg-primaryColor rounded-lg"
											: "text-[#000] hover:text-primaryColor"
									}`}
								>
									Services
								</li>
							</Link>

							<Link to="/portfolio" onClick={menuClose}>
								<li
									className={`px-3 py-1 ${
										isActive("/portfolio", location)
											? "text-[#fff] bg-primaryColor rounded-lg"
											: "text-[#000] hover:text-primaryColor"
									}`}
								>
									Portfolio
								</li>
							</Link>
							<Link to="/products" onClick={menuClose}>
								<li
									className={`px-3 py-1 ${
										isActive("/products", location)
											? "text-[#fff] bg-primaryColor rounded-lg"
											: "text-[#000] hover:text-primaryColor"
									}`}
								>
									Products
								</li>
							</Link>

							<Link to="/contact" onClick={menuClose}>
								<li
									className={`px-3 py-1 ${
										isActive("/contact", location)
											? "text-[#fff] bg-primaryColor rounded-lg"
											: "text-[#000] hover:text-primaryColor"
									}`}
								>
									Contact Us
								</li>
							</Link>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
