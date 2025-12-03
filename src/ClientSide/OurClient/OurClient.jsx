import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const OurClient = () => {
  const logos = [
    { id: 11, name: "c1", image: "/c1.png" },
    { id: 2, name: "c1", image: "/c2.png" },
    { id: 3, name: "c1", image: "/c3.png" },
    { id: 4, name: "Nirman", image: "/i1.png" },
    { id: 5, name: "MGH", image: "/i2.png" },
    { id: 6, name: "ArchsDoers", image: "/i3.png" },
    { id: 7, name: "Shanta", image: "/i4.png" },
    { id: 8, name: "Six", image: "/i5.png" },
    { id: 9, name: "Unico's", image: "/i6.png" },
    { id: 10, name: "AmariDhaka", image: "/i7.png" },
    { id: 11, name: "Tamishna", image: "/i8.png" },
    { id: 12, name: "suvastu", image: "/suvastu.jpg" },
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
    <div className="sectionSliderGap overflow-hidden">
      {/* Title and Description */}
      <div className="flex flex-col items-center justify-center mb-[76px] overflow-hidden">
        <h2 className="globalHead text-center">Our Clients</h2>
        <div className="flex items-center mt-[12px]">
          <div className="w-[280px] h-[1px] bg-gray-300"></div>
          <div className="w-[15px] h-[15px] bg-primaryColor rounded-full mx-2"></div>
          <div className="w-[280px] h-[1px] bg-gray-300"></div>
        </div>
      </div>

      {/* Sliding Logos */}
      <div className="relative">
        <Slider {...settings}>
          {logos.concat(logos).map((logo, index) => (
            <div
              key={index}
              className="px-10" // Adds space between slides
            >
              <div className="border  border-[#000000]/[.10] rounded-[8px] bg-[#F1F1F4]/[.41] flex justify-center items-center w-[170px] h-[120px]">
                <div className="flex justify-center w-[80px] h-[100px] items-center py-[10px] ">
                  <img
                    src={logo.image}
                    alt={logo.name}
                    className="bg-cover bg-center w-auto h-auto"
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

export default OurClient;
