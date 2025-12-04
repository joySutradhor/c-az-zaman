import { useEffect, useState } from "react";
import { FaDownload } from "react-icons/fa";
import { GoArrowDown, GoArrowUp } from "react-icons/go";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";

const slides = [
  { id: 1, bgImage: "./trial-images/bgZaman1.jpg" },
  { id: 2, bgImage: "./trial-images/bgZaman3.jpg" },
  { id: 3, bgImage: "./trial-images/bgZaman4.jpg" },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (direction) => {
    if (direction === "up") {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    } else if (direction === "down") {
      setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    }
  };

  useEffect(() => {
    const autoSlide = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(autoSlide);
  }, []);

  return (
    <div className="relative h-[75vh] lg:h-[90vh] overflow-hidden">
      {/* Background Images Layer */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 bg-center bg-cover transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
            style={{
              backgroundImage: `url(${slide.bgImage})`,
              filter: "brightness(0.55)",
            }}
          ></div>
        ))}
      </div>

      {/* Fixed Text Layer */}
      <div className="relative z-20 flex flex-col justify-center items-center text-center sectionGap md:sectionGap h-full">
        <div className="hidden lg:flex items-center mt-[12px]">
          <div className="w-[120px] h-[1px] "></div>
          <h1 className="text-white pb-[16px] heroHead text-center mx-4">
            Transform Your Space with Style
          </h1>
          <div className="w-[120px] h-[1px] "></div>
        </div>

        <div className="lg:hidden block text-white pb-[16px] heroHead text-center">
          Transform Your Space with Style
        </div>

        <p className="text-white/80 pb-[40px] heroPara text-center font-Inter max-w-[768px]">
          Explore our extensive range of high-quality products and services
          tailored just for you. Whether you're looking for interior design
          we’ve got everything you need to make your experience unforgettable.
          Start your journey now and discover what makes us stand out.
        </p>

        <div className="flex gap-5 items-center">
          <div className="globalBtnDiv mx-auto">
            <Link to="/contact">
              <button className="globalBtn">
                Contact us <MdArrowOutward />
              </button>
            </Link>
          </div>
          <div className="globalBtnDiv mx-auto">
            <a href="/Authentic Zaman Company Profile.pdf" download>
              <button className="globalBtn text-nowrap">
                Company Profile <FaDownload />
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Arrows */}
      <div className="hidden lg:block">
        <div className="absolute right-10 top-[50vh] transform -translate-y-1/2 flex flex-col items-center gap-4 z-50">
          <button
            onClick={() => handleSlideChange("up")}
            className="bg-transparent border border-white hover:border-primaryColor text-white p-3 rounded-full hover:bg-primaryColor transition duration-300"
          >
            <GoArrowUp className="w-6 h-6" />
          </button>

          <button
            onClick={() => handleSlideChange("down")}
            className="bg-transparent border border-white hover:border-primaryColor text-white p-3 rounded-full hover:bg-primaryColor transition duration-300"
          >
            <GoArrowDown className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
