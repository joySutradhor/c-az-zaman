import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const Marcury = () => {
  const logos = [
    { id: 1, name: "Partner1", image: "/Partners-1.png" },
    { id: 2, name: "Sturdo", image: "/partners-2.png" },
    { id: 3, name: "Futurlux", image: "/Partners-3.png" },
    { id: 4, name: "Aogao", image: "/Partners-4.png" },
    { id: 5, name: "Hafele", image: "/Partners-5.png" },
    { id: 6, name: "Coburn", image: "/Partners-6.png" },
    { id: 7, name: "Pinger", image: "/Partners-7.png" },
    { id: 8, name: "Partner8", image: "/Partners-8.png" },
    { id: 9, name: "Partner9", image: "/Partners-9.png" },
    { id: 10, name: "Partner10", image: "/Partners-10.png" },
    { id: 11, name: "Partner11", image: "/Partners-11.png" },
    { id: 12, name: "Partner12", image: "/Partners-12.png" },
    { id: 13, name: "Partner13", image: "/Partners-13.png" },
    { id: 14, name: "Sturdo", image: "/m1.png" },
    { id: 15, name: "Futurlux", image: "/m2.png" },
    { id: 16, name: "Aogao", image: "/m3.png" },
    { id: 17, name: "Hafele", image: "/m4.png" },
    { id: 18, name: "Coburn", image: "/m5.png" },
    { id: 19, name: "Pinger", image: "/pinger.png" },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3, slidesToScroll: 1 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <div className="sectionSliderGap overflow-hidden font-InstrumentSans">
      {/* Title and Description */}
      <div className="flex flex-col items-center justify-center mb-[76px] overflow-hidden">
        <h2 className="globalHead text-center">Our Partners</h2>
        <div className="flex items-center mt-[12px]">
          <div className="w-[280px] h-[1px] bg-gray-300"></div>
          <div className="w-[15px] h-[15px] bg-primaryColor rounded-full mx-2"></div>
          <div className="w-[280px] h-[1px] bg-gray-300"></div>
        </div>
      </div>

      {/* Sliding Logos */}
      <div className="relative border  border-t-[#000000]/[.20]  border-b-[#000000]/[.20]  bg-[#F1F1F4]/[.50]">
        <Slider {...settings}>
          {logos.concat(logos).map((logo, index) => (
            <div
              key={index}
              className="px-[10px]" // Adds space between slides
            >
              <div className=" flex justify-center items-center">
                <div className="flex justify-center w-[180px] h-[90px] items-center  py-[10px] ">
                  <img
                    src={logo.image}
                    alt={logo.name}
                    className="object-contain w-full h-full"
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Marcury;
