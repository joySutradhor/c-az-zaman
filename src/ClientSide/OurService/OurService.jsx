/* eslint-disable react/prop-types */
import { useState } from "react";
import { BiShower } from "react-icons/bi";
import { FiCrosshair } from "react-icons/fi";
import { GiTowel } from "react-icons/gi";
import { LuToilet } from "react-icons/lu";
import { IoCloseSharp } from "react-icons/io5";

import {
  MdOutlineCable,
  MdOutlineHomeWork,
  MdOutlineLightMode,
} from "react-icons/md";
import { PiOfficeChair } from "react-icons/pi";

const services = [
  {
    id: 1,
    title: "Shower Encloser",
    description:
      "We offer exceptional shower enclosure designs that flawlessly blends your style, durability, and practicality for your bathroom.",
    image: "./th/ShowerEncloser.jpg",
    icon: <BiShower size={30} />,
    modalDesc:
      "Transform your bathroom with our premium shower enclosures designed for elegance, durability, and practicality. Using 304-grade stainless steel and clear tempered glass, each enclosure ensures long-lasting performance, a sleek appearance, and easy maintenance, making your bathroom modern, functional, and visually appealing for years to come.",
    modalDesc2:
      "Our extensive range of shower enclosures accommodates compact, standard, and luxury bathroom layouts. Our expert team measures, analyzes, and customizes each design to maximize space, improve accessibility, and maintain a polished aesthetic, ensuring that every enclosure integrates perfectly with your interior while enhancing the overall bathroom functionality and appeal.",
    modalDesc3:
      "Every shower enclosure is engineered to combine style, safety, and durability. With precise installation techniques, sustainable materials, and superior finishes, our enclosures provide a luxurious bathroom upgrade. Customers can enjoy enhanced hygiene, aesthetic consistency, and effortless maintenance while adding value and long-term elegance to their residential or commercial bathrooms.",
  },
  {
    id: 2,
    title: "Toilet Partition",
    description:
      "Interior Concepts & Design Limited provides affordable bathroom partition boards all over Bangladesh. Our toilet partitions are made of quality materials so they last for long.",
    image: "./th/ToiletPartition.jpg",
    icon: <LuToilet size={30} />,
    modalDesc:
      "Interior Concepts & Design Limited provides high-quality, durable, and affordable toilet partitions throughout Bangladesh. Each partition combines functionality, longevity, and style, crafted from premium materials to withstand heavy daily use while maintaining a professional appearance in offices, schools, hospitals, and public facilities, ensuring reliability and elegance.",
    modalDesc2:
      "Our team visits your site to assess your unique layout, taking precise measurements and understanding your design preferences. We evaluate the space to recommend tailored partition solutions that maximize functionality, maintain aesthetics, and meet safety standards, ensuring that each installation fits seamlessly and complements the surrounding interior design.",
    modalDesc3:
      "We focus on providing low-maintenance, durable partitions that maintain hygiene, organization, and style. Designed for long-term use, our products enhance washroom efficiency, improve user experience, and contribute to professional and visually appealing environments, making them suitable for a wide range of commercial and institutional facilities across Bangladesh.",
  },
  {
    id: 3,
    title: "Lighting Solution",
    description:
      "Enjoy innovative lighting designs that combine beauty, energy efficiency, and perfect ambiance for any room.",
    image: "./th/LightingSolution.jpg",
    icon: <MdOutlineLightMode size={30} />,
    modalDesc:
      "We provide innovative, research-based lighting solutions that enhance spaces while being energy efficient. Inspired by nature and grounded in science, our designs improve aesthetics, functionality, and ambiance. Each solution is carefully crafted to create comfortable, visually appealing environments suitable for homes, offices, or commercial projects of any scale.",
    modalDesc2:
      "We educate our clients about emerging lighting technologies and sustainable practices, helping them integrate solutions that reduce energy consumption while optimizing functionality. By combining aesthetics with performance, our lighting solutions not only illuminate spaces effectively but also support long-term efficiency and adaptability for future requirements.",
    modalDesc3:
      "From initial concept to installation, every lighting solution is designed to harmonize with the existing interior. Our focus is on achieving visual comfort, improved energy efficiency, and overall enhancement of the environment, creating spaces that are functional, aesthetically pleasing, and sustainable, tailored to client-specific needs.",
  },
  {
    id: 4,
    title: "Office Furniture",
    description:
      "We design elegant office interiors and furniture that support productivity, comfort, and modern business needs.",
    image: "./th/OfficeFurniture.jpg",
    icon: <PiOfficeChair size={30} />,
    modalDesc:
      "Our office furniture solutions are research-based, designed to improve comfort, productivity, and workflow efficiency. Each piece is carefully crafted to balance aesthetics and ergonomics, providing long-term usability. By combining modern designs with functional considerations, we create workspaces that support employee well-being and enhance operational performance.",
    modalDesc2:
      "We optimize workspace communication, organization, and resource use to enhance functionality and efficiency. By analyzing workflows, layout requirements, and operational needs, we provide furniture and interiors that harmonize with the environment, ensuring employees have the ideal tools and spaces for productive, comfortable, and well-managed office operations.",
    modalDesc3:
      "Our furniture solutions focus on durability, style, and ergonomic comfort, integrating seamlessly into modern office interiors. We prioritize adaptability, long-term performance, and aesthetic cohesion, helping businesses maintain professional environments that motivate employees, improve work experience, and contribute to a visually appealing and functional workspace.",
  },
  {
    id: 5,
    title: "Interior work",
    description:
      "We create modern, sophisticated interiors that boost creativity, comfort, and productivity.",
    image: "./th/Interiorwork.png",
    icon: <MdOutlineHomeWork size={30} />,
    modalDesc:
      "At Interior Solutions, we specialize in creating functional and visually stunning interiors for offices, hotels, and homes. Each project is designed to reflect client vision, optimize space, and enhance aesthetic appeal, providing a harmonious and efficient environment tailored to your specific needs and brand identity.",
    modalDesc2:
      "We develop designs that align with your brand and goals, ensuring interiors support creativity, productivity, and overall satisfaction. Our team manages all aspects of the project, including layout planning, material selection, and implementation, to deliver spaces that are practical, elegant, and inspiring.",
    modalDesc3:
      "We prioritize long-term durability, efficiency, and beauty in every project. By carefully combining innovative design, functional optimization, and aesthetic value, we create interiors that are not only visually appealing but also enhance workflow, comfort, and client satisfaction across residential and commercial environments.",
  },
  {
    id: 6,
    title: "Assembly Works",
    description:
      "We provide precise and durable assembly services for furniture, wall coverings, flooring, and more.",
    image: "./th/AssemblyWorks.png",
    icon: <MdOutlineCable size={30} />,
    modalDesc:
      "Our assembly services ensure precise installation of wall and floor coverings, furniture, and decorative elements. We follow best practices to guarantee durability, proper alignment, and perfect finishes, covering a wide range of materials including wallpapers, textured paints, wooden floors, vinyl, and carpets.",
    modalDesc2:
      "We provide detailed guidelines for installation techniques to ensure optimal use of materials, long-lasting performance, and consistent quality across residential, commercial, and institutional environments. Each project is handled with precision to meet professional standards and client expectations.",
    modalDesc3:
      "Our skilled team uses high-quality tools and expertise to deliver flawless assembly results. Every installation is carefully managed to combine aesthetics, functionality, and durability, ensuring spaces remain attractive, safe, and long-lasting while maintaining structural integrity and optimal material performance.",
  },
  {
    id: 7,
    title: "Air diffuser",
    description:
      "Air diffusers distribute air evenly to improve comfort, ventilation, and temperature balance.",
    image: "./th/Air-d.png",
    icon: <FiCrosshair size={30} />,
    modalDesc:
      "Air diffusers efficiently distribute airflow across indoor spaces, maintaining consistent temperatures and improving ventilation. They help reduce hotspots, maintain comfort, and enhance air circulation, ensuring a healthy, pleasant environment for homes, offices, and commercial facilities, while minimizing noise and energy consumption.",
    modalDesc2:
      "Designed to integrate seamlessly with various interior styles, our air diffusers improve energy efficiency by allowing HVAC systems to operate optimally. They reduce operational costs while providing consistent climate control for occupants and contribute to a sustainable indoor environment.",
    modalDesc3:
      "Ideal for residential, commercial, and institutional applications, our diffusers combine aesthetics, functionality, and efficiency. They help maintain indoor comfort, enhance air quality, and contribute to modern, professional, and energy-conscious interiors suitable for a variety of spaces.",
  },
  {
    id: 8,
    title: "Towel heating rack",
    description:
      "A towel heating rack warms your towels, prevents dampness, and adds a touch of luxury to your bathroom.",
    image: "./th/Towelheatingrack.png",
    icon: <GiTowel size={30} />,
    modalDesc:
      "Our towel heating racks provide warmth, dryness, and comfort while preventing dampness and mildew. Designed for modern bathrooms, they combine convenience and style, creating a more hygienic and comfortable experience every time you step out of the shower or bath.",
    modalDesc2:
      "The sleek and elegant design integrates seamlessly into contemporary bathroom interiors, enhancing aesthetics and usability. They are engineered to provide consistent heating, energy efficiency, and reliable performance, ensuring that towels are always dry and warm for daily use.",
    modalDesc3:
      "Perfect for residential and commercial spaces, towel racks add a touch of luxury while promoting hygiene. They are durable, low-maintenance, and visually appealing, providing both functional benefits and a stylish accessory that complements your bathroom design.",
  },
  {
    id: 9,
    title: "Hospital Item",
    description:
      "Hospital-grade items designed for hygiene, durability, and reliable performance in clinical environments.",
    image: "./th/HospitalItem.jpg",
    icon: <GiTowel size={30} />,
    modalDesc:
      "Our hospital items meet strict medical standards for hygiene, safety, and durability. Each product is carefully selected to ensure effective performance in hospitals, clinics, and care centers, providing reliable, long-lasting solutions for healthcare operations and staff efficiency.",
    modalDesc2:
      "These items include storage solutions, fixtures, and specialized equipment, all designed to improve workflow and maintain organized, clean, and safe environments. Every product is tested to withstand frequent use in demanding medical settings without compromising quality.",
    modalDesc3:
      "From patient care areas to staff workspaces, our hospital-grade items ensure efficiency, reliability, and hygiene. They support healthcare professionals in creating functional, comfortable, and safe environments, enhancing overall operational performance while meeting strict regulatory standards.",
  },
  {
    id: 10,
    title: "Track Socket",
    description:
      "Track sockets offer flexible power solutions with multiple connection points in a sleek, modern design.",
    image: "./th/TrackSocket.jpeg.jpg",
    icon: <GiTowel size={30} />,
    modalDesc:
      "Track sockets provide a practical solution for safe and reliable power distribution in homes, offices, and commercial spaces. They allow multiple devices to connect along a single track while ensuring electrical safety, durability, and functional efficiency.",
    modalDesc2:
      "Our track sockets are easy to install and versatile, accommodating changing needs and layouts. They combine functionality and aesthetics, allowing users to manage power connections efficiently without cluttering the space with multiple outlets or cables.",
    modalDesc3:
      "Designed for modern interiors, they improve workflow, maintain a clean appearance, and provide convenience for dynamic living and working spaces. These sockets are reliable, durable, and visually integrated into the surrounding design for optimal usability.",
  },
  {
    id: 11,
    title: "Hotel Item",
    description:
      "Hotel-grade items designed for comfort, durability, and elegance in hospitality environments.",
    image: "./th/HotelItem.jpg",
    icon: <GiTowel size={30} />,
    modalDesc:
      "Our hotel items are carefully crafted to combine comfort, style, and durability. Each product is designed to withstand daily use while providing guests with a luxurious, practical, and visually appealing experience throughout their stay.",
    modalDesc2:
      "These items include furniture, fixtures, and bathroom essentials designed for aesthetic appeal, functionality, and operational efficiency. Each piece enhances interiors while supporting the high standards expected in hotels, resorts, and serviced apartments.",
    modalDesc3:
      "By combining durability, style, and comfort, our hotel products create welcoming, safe, and long-lasting environments. They enhance guest satisfaction, improve operational workflows, and contribute to a luxurious, elegant, and professional hospitality experience.",
  },
];

const Modal = ({ service, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white  rounded-lg py-8 px-4 md:px-8 lg:px-14 max-w-[90vw] lg:max-w-[75vw] max-h-[85vh] overflow-y-auto">
        <div></div>
        <div className="mb-[20px] flex justify-end group">
          <button
            className="text-gray-600 group-hover:text-primaryColor"
            onClick={onClose}
          >
            <div className="text-3xl border-2 border-gray-600 group-hover:border-primaryColor rounded-full w-10 h-10 flex items-center justify-center">
              <IoCloseSharp />
            </div>
          </button>
        </div>

        <div className="grid xl:grid-cols-[40%__60%] gap-[25px] lg:gap-[50px] justify-center  mb-5">
          <img
            src={service.image}
            alt={service.title}
            className="h-[50vh] w-full  object-cover rounded-[8px] border"
          />

          <div>
            <h3 className="text-[30px] md:text-[40px] font-semibold font-Inter">
              {service.title}
            </h3>
            <p className="heroPara text-[#131212]/[.75]">{service.modalDesc}</p>
            <p className="heroPara text-[#131212]/[.75] mt-2">
              {service.modalDesc2}
            </p>
            <p className="heroPara text-[#131212]/[.75] mt-2">
              {service.modalDesc3}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedService(null);
    setIsModalOpen(false);
  };

  return (
    <div className="sectionGap">
      <div className="flex flex-col items-center justify-center mb-[76px] overflow-hidden">
        <h2 className="globalHead text-center">Our services</h2>
        <div className="flex items-center mt-[12px]">
          <div className="w-[280px] h-[1px] bg-gray-300"></div>
          <div className="w-[15px] h-[15px] bg-primaryColor rounded-full mx-2"></div>
          <div className="w-[280px] h-[1px] bg-gray-300"></div>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.id}
            className="border rounded-lg overflow-hidden group hover:border-primaryColor bg-white duration-300 px-8 cursor-pointer"
            onClick={() => openModal(service)}
          >
            <div className="my-8">
              <div className="w-max h-max mb-5 p-2 border-primaryColor border-2 border-dashed rounded-full text-primaryColor group-hover:text-[#fff] group-hover:bg-primaryColor transition">
                {service.icon}
              </div>
            </div>
            <div className="">
              <h3 className="text-xl font-Inter font-semibold mb-4">
                {service.title}
              </h3>
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-[35vh] object-cover mb-4 rounded-xl"
              />
              <div className="flex flex-col justify-between">
                <p className="heroPara text-[#131212]/[.6] line-clamp-3">
                  {service.description}
                </p>
                <div className="flex justify-start">
                  <button className="w-10 h-10 flex flex-col items-center justify-center rounded-full border border-gray-600 group-hover:border-primaryColor text-gray-600 group-hover:text-primaryColor transition my-7 cursor-pointer z-[10] text-2xl lg:text-xl">
                    →
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      <Modal
        service={selectedService}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  );
};

export default ServicesSection;
