import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { LuLinkedin } from "react-icons/lu";
import { RiTwitterXFill } from "react-icons/ri";
import { SlSocialFacebook } from "react-icons/sl";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="sectionGap bg-[#131212]">
      <div className="text-white/[.8] grid xl:justify-between gap-6 md:gap-8 pb-8 pt-16 xl:grid-cols-[20%_10%_10%_18%_20%]">
        {/* Footer Logo and Social Links */}
        <div className="mb-5">
          <div className="bg-gray-300 w-full max-w-[60%] md:max-w-[40%] lg:max-w-[30%] xl:max-w-[75%] 2xl:max-w-[50%] h-auto rounded-lg border border-primaryColor mb-4">
            <Link to="/">
              <img
                className="h-full w-full object-cover py-2 px-4"
                src="/AuthenticBanner.png"
                alt="brand logo"
              />
            </Link>
          </div>
          <p className="footerHeaderLogoText mb-4 xl:mb-2 md:max-w-[60%] xl:max-w-full 2xl:max-w-[70%]">
            Authentic Zaman is where your vision comes alive with our thoughtful
            custom designs.
          </p>
          <div className="flex gap-2">
            <a
              href="https://www.facebook.com/AuthenticZamanTraders/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-primaryColor text-primaryColor p-2 rounded-full"
            >
              <SlSocialFacebook size={20} />
            </a>
            <a
              href="https://x.com/aztraders1985?s=11"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-primaryColor text-primaryColor p-2 rounded-full"
            >
              <RiTwitterXFill size={20} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-primaryColor text-primaryColor p-2 rounded-full"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/a-k-m-ashraf-uz-zaman-9833514b"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-primaryColor text-primaryColor p-2 rounded-full"
            >
              <LuLinkedin size={20} />
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=8801707509399&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-primaryColor text-primaryColor p-2 rounded-full"
            >
              <FaWhatsapp size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mb-5">
          <h2 className="footerMenuTextTitle">Quick Links</h2>
          <div className="space-y-2 flex xl:flex-col flex-wrap items-baseline gap-x-4 footerMenuText">
            <Link to="/about" className="hover:text-primaryColor">
              About Us
            </Link>
            <Link to="/service" className="hover:text-primaryColor">
              Services
            </Link>
            <Link to="/portfolio" className="hover:text-primaryColor">
              Portfolio
            </Link>
            <Link to="/contact" className="hover:text-primaryColor">
              Contact Us
            </Link>
          </div>
        </div>

        {/* Our Services */}
        <div className="mb-5">
          <h2 className="footerMenuTextTitle">Our Services</h2>
          <div className="space-y-2 flex xl:flex-col flex-wrap items-baseline gap-x-6 footerMenuText">
            <Link to="/portfolio/4" className="hover:text-primaryColor">
              Shower Enclosure
            </Link>
            <Link to="/portfolio/5" className="hover:text-primaryColor">
              Toilet Partition
            </Link>
            <Link to="/portfolio/9" className="hover:text-primaryColor">
              Lighting Solution
            </Link>
            <Link to="/portfolio/10" className="hover:text-primaryColor">
              Office Furniture
            </Link>
            <Link to="/portfolio/13" className="hover:text-primaryColor">
              Interior Work
            </Link>
            <Link to="/portfolio/14" className="hover:text-primaryColor">
              Assembly Works
            </Link>
          </div>
        </div>

        {/* Contact Us */}
        <div className="mb-5">
          <h2 className="footerMenuTextTitle">Contact Us</h2>
          <div className="space-y-2 flex xl:flex-col flex-wrap items-baseline gap-x-8 footerMenuText">
            <a href="tel:+8801817509399" className="hover:text-primaryColor">
              +8801817-509399
            </a>
            <a href="tel:+8801511509399" className="hover:text-primaryColor">
              +8801511-509399
            </a>
            <a
              href="mailto:ashraf@authenticzaman.com"
              className="hover:text-primaryColor"
            >
              ashraf@authenticzaman.com
            </a>
            <a
              href="https://www.google.com/maps?q=6/A/1,+Razia+Tower,+Kallayanpur,+Dhaka-1216"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primaryColor"
            >
              <span className="text-primaryColor">Dhaka Address: </span>Shyamoli Square (Level-8), Mirpur Road, Dhaka,
              Bangladesh
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primaryColor"
            >
              <span className="text-primaryColor">China Address: </span>Room H, 25th Floor, Development Building, 13
              Huayuan East Road, Chancheng District, Foshan City
            </a>
          </div>
        </div>

        {/* Download PDFs */}
        <div className="mb-2">
          <h2 className="footerMenuTextTitle">Download PDF&apos;s</h2>
          <div className="space-y-2 mt-2 xl:mt-0 flex flex-col md:flex-row md:flex-wrap md:items-baseline md:gap-x-8 footerMenuText">
            <a
              href="/pdfs/restroom-cubicles.pdf"
              download
              className="hover:text-primaryColor"
              target="_blank"
            >
              Restroom Cubicles and Locker Solution
            </a>
            <a
              href="/pdfs/shower-enclosure.pdf"
              download
              className="hover:text-primaryColor"
              target="_blank"
            >
              A Z Traders Shower Enclosure Presentation
            </a>
            <a
              href="/pdfs/hospitality-products.pdf"
              download
              className="hover:text-primaryColor"
              target="_blank"
            >
              A-Z Traders Hospitality Product List
            </a>
          </div>
        </div>
      </div>

      <hr className="border-t border-[#FFFFFF]/[.5] mb-4 absolute inset-x-0 w-full" />

      <div className="py-5 text-primaryColor text-center footerMenuText">
        <p>
          Copyright © 2025 Authentic Zaman Traders. All Rights Reserved. <br />
          Design & Developed by{" "}
          <a
            href="https://www.ethicalden.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primaryColor"
          >
            Ethical Den
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default Footer;
