import { useEffect, useState } from "react";
import { FaDownload } from "react-icons/fa";
import { GoArrowDown, GoArrowUp } from "react-icons/go";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";

// Sample Slide Data
const slides = [
  {
    id: 1,
    bgImage: "./trial-images/bgZaman1.jpg",
    title: "Transform Your Space with Style",
    description:
      "Explore our extensive range of high-quality products and services tailored just for you. Whether you're looking for interior design we’ve got everything you need to make your experience unforgettable. Start your journey now and discover what makes us stand out.",
    buttonText: "Contact us",
    buttonText2: "Company Profile",
  },
  {
    id: 2,
    bgImage: "./trial-images/bgZaman3.jpg",
    title: "Transform Your Space with Style",
    description:
      "Explore our extensive range of high-quality products and services tailored just for you. Whether you're looking for interior design we’ve got everything you need to make your experience unforgettable. Start your journey now and discover what makes us stand out.",
    buttonText: "Contact us",
    buttonText2: "Company Profile",
  },
  {
    id: 3,
    bgImage: "./trial-images/bgZaman4.jpg",
    title: "Transform Your Space with Style",
    description:
      "Explore our extensive range of high-quality products and services tailored just for you. Whether you're looking for interior design we’ve got everything you need to make your experience unforgettable. Start your journey now and discover what makes us stand out.",
    buttonText: "Contact us",
    buttonText2: "Company Profile",
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Handle Slide Change
  const handleSlideChange = (direction) => {
    if (direction === "up") {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    } else if (direction === "down") {
      setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    }
  };

  // Auto-slide functionality
  useEffect(() => {
    const autoSlide = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000); // Change slide every 5 seconds

    // Clear the interval when the component unmounts
    return () => clearInterval(autoSlide);
  }, []);

  const { bgImage, title, description, buttonText, buttonText2 } =
    slides[currentSlide];

  return (
    <div className="relative h-[75vh] lg:h-[100vh] overflow-hidden">
      {/* Background Image */}
      <div
        style={{
          backgroundImage: `url(${bgImage})`,
          filter: "brightness(0.55)",
        }}
        className="bg-no-repeat bg-center bg-cover w-full h-full transition-all duration-1000 ease-in-out"
      ></div>

      {/* Content Section */}
      <div
        className="absolute inset-0  md:text-left sectionGap md:sectionGap
      flex flex-col justify-center items-center  text-center"
      >
        <div className="hidden lg:block">
          <div className="flex items-center mt-[12px] ">
            <div className="w-[120px] h-[1px] "></div>
            <h1 className="text-[#FFFFFF] pb-[16px] heroHead  text-center mx-4">
              {title}
            </h1>
            <div className="w-[120px] h-[1px] "></div>
          </div>
        </div>

        <div className=" lg:hidden  block   text-[#FFFFFF] pb-[16px] heroHead  text-center">
          {title}
        </div>

        <p className="text-[#FFFFFF]/80 pb-[40px] heroPara text-center font-Inter max-w-[768px]">
          {description}
        </p>
        <div className="flex gap-5 items-center">
          <div className="globalBtnDiv  mx-auto ">
            <Link to="/contact">
              <button className="globalBtn ">
                {buttonText} <MdArrowOutward />
              </button>
            </Link>
          </div>
          <div className="globalBtnDiv mx-auto">
            <a href="/Authentic Zaman Company Profile.pdf" download>
              <button className="globalBtn text-nowrap">
                {buttonText2} <FaDownload />
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Arrows */}
      <div className=" hidden lg:block ">
        <div className="absolute right-10 top-[50vh] transform -translate-y-1/2 flex flex-col items-center gap-4 z-50">
          {/* Up Arrow */}
          <button
            onClick={() => handleSlideChange("up")}
            className="bg-transparent border border-[#FFFFFF] hover:border-primaryColor text-white p-3 rounded-full hover:bg-primaryColor transition duration-300"
          >
            <GoArrowUp className="w-6 h-6" />
          </button>

          {/* Down Arrow */}
          <button
            onClick={() => handleSlideChange("down")}
            className="bg-transparent border border-[#FFFFFF] hover:border-primaryColor text-white p-3 rounded-full hover:bg-primaryColor transition duration-300"
          >
            <GoArrowDown className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
