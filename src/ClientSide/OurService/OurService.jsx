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

    // icon: "/service-icon.svg",
    icon: <BiShower size={30} />,
    modalDesc:
      "Transform your bathroom into a modern, stylish, and functional space with premium shower enclosures from A Z Traders. Designed with both aesthetics and durability in mind, our enclosures are crafted using high-quality stainless steel of 304 grade and clear tempered glass. This combination not only enhances the elegance and contemporary appeal of your bathroom but also guarantees long-lasting performance. The tempered glass used in our products is 100% sustainable and non-toxic, ensuring a safe and environmentally friendly choice for your home.",
    modalDesc2:
      "At A Z Traders, we understand that every bathroom has its unique layout and design requirements. That’s why we offer a wide range of shower enclosure designs to suit all types of spaces, whether compact, standard, or luxurious. Our team of expert engineers and designers carefully analyze your bathroom setup to provide a tailored solution that maximizes space utilization while maintaining a sleek and modern appearance. Every enclosure is designed to seamlessly integrate into your bathroom, creating a visually appealing and highly functional environment.",
  },
  {
    id: 2,
    title: "Toilet Partition",
    description:
      "Interior Concepts & Design Limited provides affordable bathroom partition boards all over Bangladesh. Our toilet partitions are made of quality materials so they last for long. Our experts will visit your site and analyze your toilet partition requirements. Then we will come up with partition boards tailored to meet your specific requirements.",
    image: "./th/ToiletPartition.jpg",

    // icon: "/service-icon.svg",
    icon: <LuToilet size={30} />,
    modalDesc:
      "Interior Concepts & Design Limited is a leading provider of high-quality and affordable bathroom partition boards throughout Bangladesh. We specialize in designing and supplying durable toilet partitions that combine functionality, style, and longevity. Our partition boards are made from premium materials to ensure they withstand everyday use while maintaining a sleek and professional appearance.",
    modalDesc2:
      "At Interior Concepts & Design Limited, we understand that every space is unique. That’s why our team of experienced experts visits your site to carefully assess your toilet partition requirements. We take precise measurements, consider your design preferences, and evaluate the layout of your facility to ensure our solutions are perfectly tailored to your needs.",
  },
  {
    id: 3,
    title: "Lighting Solution",
    description:
      "Enjoy innovative lighting designs that combine beauty, energy efficiency, and the perfect ambiance for any room with us.",
    // image: "./trial-images/service-img-4.jpg",
    image: "./th/LightingSolution.jpg",

    // icon: "/service-icon.svg",
    icon: <MdOutlineLightMode size={30} />,
    modalDesc:
      "We provide research based solutions grounded in science and inspired by nature. We extend our services beyond problem-solving. Creating culturally and contextually appropriate responses. Transforming client's story and their vision for built environment into a reality. While educating our clients with new technologies and utilize them as appropriate.",

    modalDesc2:
      "In addition to delivering impactful results, we focus on educating our clients about emerging technologies and innovative practices. We guide them on how to effectively integrate these advancements, ensuring that each project not only meets current standards but also embraces sustainable and forward-thinking approaches. Our mission is to empower clients with knowledge while bringing their aspirations to life through thoughtful and well-researched design solutions.",
  },
  {
    id: 4,
    title: "Office Furniture",
    description:
      "We design elegant home interiors and decorations that reflect your personal taste and enhance your living environment.",
    image: "./th/OfficeFurniture.jpg",

    // icon: "/service-icon.svg",
    icon: <PiOfficeChair size={30} />,
    modalDesc:
      "We provide research based solutions grounded in science and inspired by nature. While extending our services beyond problem-solving. We'll create an ambience that belongs to its place, time and people. Optimize efficiencies in all system resources and communications.",
    modalDesc2:
      "In addition, we prioritize optimizing efficiencies across all systems and resources, including communication, energy, and operational processes. By carefully integrating these efficiencies into every project, we ensure that our designs are not only visually compelling but also practical, sustainable, and functional. Our goal is to deliver solutions that balance innovation, performance, and a sense of belonging for all who experience them.",
  },
  {
    id: 5,
    title: "Interior work",
    description:
      "We have expertise in creating modern, sophisticated office interiors that boosts productivity and inspiration  in the workplace.",
    image: "./th/Interiorwork.png",

    // icon: "/service-icon.svg",
    icon: <MdOutlineHomeWork size={30} />,
    modalDesc:
      "At Interior Solutions, our services represent our investment in excellence. We pledge to get knee-deep in your interior design, office furniture, hotel furniture & home furniture install or storage systems project and help you create beautifully functional workspaces and specialized work environments. We'll design to your specifications, build to your brand, cater to your success, and ignite your culture and growth.",
    modalDesc2:
      "We design to your exact specifications, build in alignment with your brand identity, and focus on solutions that support your success. Our approach goes beyond aesthetics; we aim to foster a culture of innovation and growth within your spaces. With Interior Solutions, you gain a partner dedicated to transforming your ideas into inspiring, practical, and dynamic environments that leave a lasting impact.",
  },
  {
    id: 6,
    title: "Assembly Works",
    description:
      "We provide precise and durable assembly services for everything from furniture to complex installations.",
    // image: "./trial-images/service-img-6.jpg",
    image: "./th/AssemblyWorks.png",

    // icon: "/service-icon.svg",
    icon: <MdOutlineCable size={30} />,
    modalDesc:
      "Materials and systems to install resilient wall and floor coverings correctly. The aim of this Technical Notebook is to offer useful guidelines to assist in the correct installation of resilient wall and floor coverings. Wall covering- Wall paper, Top create / texture paint, Flooring -Wooden Floor, Decking wood, Carpet & Vinyl",
    modalDesc2:
      "The guidance includes detailed information for various types of wall and floor coverings, including wallpapers, textured or topcoat paints, wooden flooring, decking, carpets, and vinyl. By addressing the specific requirements of each material, this notebook helps ensure proper installation techniques, long-lasting results, and optimal use of resources. Whether for residential, commercial, or specialized environments, these instructions are designed to support successful and professional installations every time.",
  },
  {
    id: 7,
    title: "Air diffuser",
    description:
      "An air diffuser evenly distributes air within a room, enhancing ventilation and maintaining a consistent temperature. Commonly used in HVAC systems, it improves air circulation, reduces noise, and boosts energy efficiency. Suitable for homes and commercial spaces, air diffusers help create a comfortable indoor environment while blending seamlessly with interior designs.",
    // image: "./trial-images/service-img-6.jpg",
    image: "./th/Air-d.png",

    // icon: "/service-icon.svg",
    icon: <FiCrosshair size={30} />,
    modalDesc:
      "An air diffuser evenly distributes air within a room, enhancing ventilation and maintaining a consistent temperature. Commonly used in HVAC systems, it improves air circulation, reduces noise, and boosts energy efficiency. Suitable for homes and commercial spaces, air diffusers help create a comfortable indoor environment while blending seamlessly with interior designs.",
    modalDesc2:
      "In addition to functional benefits, air diffusers help reduce noise levels and improve energy efficiency by allowing HVAC systems to operate more effectively. Designed to blend seamlessly with various interior styles, they provide a discreet yet essential solution for maintaining a pleasant indoor atmosphere. Whether in homes, offices, or commercial facilities, air diffusers are key components in creating spaces that are both comfortable and efficient.",
  },
  {
    id: 8,
    title: "Towel heating rack",
    description:
      "A towel heating rack is a stylish and functional addition to any bathroom, designed to warm and dry towels efficiently. It adds comfort, prevents dampness, and helps reduce mildew. Ideal for modern homes, it also enhances bathroom aesthetics while providing a touch of luxury.",
    // image: "./trial-images/service-img-6.jpg",
    image: "./th/Towelheatingrack.png",

    // icon: "/service-icon.svg",
    icon: <GiTowel size={30} />,
    modalDesc:
      "A towel heating rack is a stylish and functional addition to any bathroom, designed to warm and dry towels efficiently. It adds comfort, prevents dampness, and helps reduce mildew. Ideal for modern homes, it also enhances bathroom aesthetics while providing a touch of luxury.",
    modalDesc2:
      "Beyond its functional benefits, a towel heating rack adds a touch of modern elegance to your space. Its sleek design complements contemporary bathroom interiors, creating a luxurious and inviting atmosphere. Ideal for modern homes, it combines practicality with style, offering both convenience and aesthetic appeal in one sophisticated solution.",
  },
  {
    id: 9,
    title: "Hospital Item",
    description:
      "Hospital-grade items are designed to ensure hygiene, durability, and functionality in medical environments. They help maintain clean and safe spaces while providing practical solutions for healthcare facilities. Ideal for hospitals, clinics, and care centers, these items support efficiency and reliability in daily operations.",
    image: "./th/HospitalItem.jpg",
    icon: <GiTowel size={30} />,
    modalDesc:
      "Our hospital items are carefully selected to meet strict medical standards, ensuring safety, durability, and easy maintenance. Each product is designed to withstand rigorous daily use while supporting a hygienic and functional environment.",
    modalDesc2:
      "From fixtures and storage solutions to specialized equipment, these hospital items provide both practicality and comfort. They are tailored to create safe, efficient, and organized spaces that enhance healthcare operations and staff performance.",
  },
  {
    id: 10,
    title: "Track Socket",
    description:
      "Track sockets provide a flexible and efficient solution for electrical connections in homes, offices, and commercial spaces. They allow multiple devices to be connected safely along a single track, improving convenience and energy efficiency. Ideal for modern interiors, they combine practicality with sleek design.",
    image: "./th/TrackSocket.jpeg.jpg",
    icon: <GiTowel size={30} />,
    modalDesc:
      "Our track sockets are designed for safe and reliable power distribution. Easy to install and versatile, they allow multiple devices to be connected along one track, making them ideal for dynamic living and working spaces.",
    modalDesc2:
      "By combining functionality, safety, and aesthetics, track sockets enhance interior layouts without compromising design. They provide a practical solution for managing power needs in homes, offices, and commercial environments efficiently.",
  },
  {
    id: 11,
    title: "Hotel Item",
    description:
      "Hotel-grade furniture and fixtures are designed to provide comfort, durability, and style in hospitality environments. They enhance guest experience while maintaining functionality and long-lasting performance. Ideal for hotels, resorts, and serviced apartments, these items support a luxurious and efficient stay.",
    image: "./th/HotelItem.jpg",
    icon: <GiTowel size={30} />,
    modalDesc:
      "Our hotel items are carefully crafted to combine elegance and practicality. Each piece is designed to withstand frequent use while providing guests with a comfortable and visually appealing experience.",
    modalDesc2:
      "From furniture to bathroom fixtures, these hotel items enhance interior aesthetics and operational efficiency. They are tailored to create a welcoming, durable, and luxurious environment that meets the high standards of the hospitality industry.",
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

        <div className="grid grid-cols-[40%__60%] gap-[25px] lg:gap-[50px] justify-center  mb-5">
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
