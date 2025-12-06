import { CiShoppingTag } from "react-icons/ci";
import { GrLocation } from "react-icons/gr";
import { IoCalendarOutline } from "react-icons/io5";
import { useParams } from "react-router-dom";

// Data for Products
const productDetails = {
  1: {
    name: "Shower Enclosure",
    description:
      "We are passionate, knowing that people live, work, play and inhabit the spaces and places we imagine and envision for our clients.",
    mainImage: "/p/az-38.jpg",
    sideMedia: [
      { type: "image", src: "/p/az-37.jpg" },
      { type: "image", src: "/p/az-39.jpg" },
    ],
    category: "Shower Enclosure",
    location: "Gulshan-1, Dhaka",
    startDate: "10th Dec, 2024",
    endDate: "on-going",
  },
  2: {
    name: "Shower Enclosure",
    description:
      "We are passionate, knowing that people live, work, play and inhabit the spaces and places we imagine and envision for our clients.",
    mainImage: "/p/az-42.jpg",
    sideMedia: [
      { type: "image", src: "/p/az-43.jpg" },
      { type: "image", src: "/p/az-44.jpg" },
    ],
    category: "Shower Enclosure",
    location: "Bashundhara, Dhaka",
    startDate: "20th Jan, 2025",
    endDate: "on-going",
  },
  3: {
    name: "Shower Enclosure",
    description:
      "We are passionate, knowing that people live, work, play and inhabit the spaces and places we imagine and envision for our clients.",
    mainImage: "/p/az-45.jpg",
    sideMedia: [
      { type: "image", src: "/p/az-46.jpg" },
      { type: "image", src: "/p/az-47.jpg" },
    ],
    category: "Shower Enclosure",
    location: "Purbachal, Dhaka",
    startDate: "07th Dec, 2024",
    endDate: "10th Dec, 2024",
  },
  4: {
    name: "Shower Enclosure",
    description:
      "We are passionate, knowing that people live, work, play and inhabit the spaces and places we imagine and envision for our clients.",
    mainImage: "/p/az-48.jpg",
    sideMedia: [
      { type: "image", src: "/p/az-49.jpg" },
      { type: "image", src: "/p/az-50.jpg" },
    ],
    category: "Shower Enclosure",
    location: "Niketon, Dhaka",
    startDate: "28th Jan, 2025",
    endDate: "on-going",
  },
  5: {
    name: "Toilet Partition",
    description:
      "We are passionate, knowing that people live, work, play and inhabit the spaces and places we imagine and envision for our clients.",
    mainImage: "/p/az-25.jpg",
    sideMedia: [
      { type: "video", src: "/p/t-p.mp4" },
      { type: "image", src: "/p/toilet-p.jpg" },
    ],
    category: "Toilet Partition",
    location: "Green Road, Dhaka",
    startDate: "05th Jan, 2025",
    endDate: "15th Jan, 2025",
  },
  6: {
    name: "Toilet Partition",
    description:
      "We are passionate, knowing that people live, work, play and inhabit the spaces and places we imagine and envision for our clients.",
    mainImage: "/p/az-30.jpg",
    sideMedia: [
      { type: "image", src: "/p/az-31.jpg" },
      { type: "image", src: "/p/az-32.jpg" },
    ],
    category: "Toilet Partition",
    location: "Tongi, Dhaka",
    startDate: "25th Dec, 2024",
    endDate: "15th Jan, 2025",
  },
  7: {
    name: "Lighting Solution",
    description:
      "We are passionate, knowing that people live, work, play and inhabit the spaces and places we imagine and envision for our clients.",
    mainImage: "/p/az-6.jpg",
    sideMedia: [
      { type: "image", src: "/p/az-8.jpg" },
      { type: "image", src: "/p/az-12.jpg" },
    ],
    category: "Lighting Solution",
    location: "Banani, Dhaka",
    startDate: "07th Oct, 2024",
    endDate: "18th Dec, 2024",
  },
  8: {
    name: "Lighting Solution",
    description:
      "We are passionate, knowing that people live, work, play and inhabit the spaces and places we imagine and envision for our clients.",
    mainImage: "/p/az-54.jpg",
    sideMedia: [
      { type: "image", src: "/p/az-55.jpg" },
      { type: "image", src: "/p/az-56.jpg" },
    ],
    category: "Lighting Solution",
    location: "Gulshan-2, Dhaka",
    startDate: "10th Nov, 2024",
    endDate: "25th Nov, 2024",
  },
  9: {
    name: "Lighting Solution",
    description:
      "We are passionate, knowing that people live, work, play and inhabit the spaces and places we imagine and envision for our clients.",
    mainImage: "/p/az-57.jpg",
    sideMedia: [
      { type: "image", src: "/p/az-58.jpg" },
      { type: "image", src: "/p/az-59.jpg" },
    ],
    category: "Lighting Solution",
    location: "Gulshan-2, Dhaka",
    startDate: "05th Jan, 2024",
    endDate: "15th Jan, 2024",
  },
  10: {
    name: "Office Furniture",
    description:
      "This project involved designing a modern and functional dining area for a large commercial space.",
    mainImage: "/p/az-4.jpg",
    sideMedia: [
      { type: "image", src: "/p/az-9.jpg" },
      { type: "image", src: "/p/az-7.jpg" },
    ],
    category: "Office Furniture",
    location: "Banani, Dhaka",
    startDate: "5th Jan, 2023",
    endDate: "15th March, 2023",
  },
  11: {
    name: "Office Furniture",
    description:
      "We are passionate, knowing that people live, work, play and inhabit the spaces and places we imagine and envision for our clients.",
    mainImage: "/p/az-19.jpg",
    sideMedia: [
      { type: "image", src: "/p/az-22.jpg" },
      { type: "image", src: "/p/az-24.jpg" },
    ],
    category: "Office Furniture",
    location: "Uttara, Dhaka",
    startDate: "20th Mar, 2024",
    endDate: "30th Oct, 2016",
  },
  12: {
    name: "Interior Work",
    description:
      "We are passionate, knowing that people live, work, play and inhabit the spaces and places we imagine and envision for our clients.",
    mainImage: "/p/az-1.jpg",
    sideMedia: [
      { type: "image", src: "/p/az-2.jpg" },
      { type: "image", src: "/p/az-3.jpg" },
    ],
    category: "Interior Work",
    location: "Banani, Dhaka",
    startDate: "05th Mar, 2024",
    endDate: "20th Nov, 2024",
  },
  13: {
    name: "Interior Work",
    description:
      "This project involved designing a modern and functional dining area for a large commercial space.",
    mainImage: "/p/az-11.jpg",
    sideMedia: [
      { type: "image", src: "/p/az-10.jpg" },
      { type: "image", src: "/p/az-12.jpg" },
    ],
    category: "Interior Work",
    location: "Gulshan, Dhaka",
    startDate: "5th Jan, 2023",
    endDate: "15th March, 2023",
  },
  14: {
    name: "Assembly Work",
    description:
      "This project involved designing a modern and functional dining area for a large commercial space.",
    mainImage: "/p/az-41.jpg",
    sideMedia: [
      { type: "image", src: "/p/az-33.jpg" },
      { type: "image", src: "/p/az-35.jpg" },
    ],
    category: "Assembly Work",
    location: "Gulshan, Dhaka",
    startDate: "5th Nov, 2024",
    endDate: "15th Nov, 2024",
  },
  15: {
    name: "Air diffuser",
    description:
      "An air diffuser evenly distributes air within a room, enhancing ventilation and maintaining a consistent temperature. Commonly used in HVAC systems, it improves air circulation, reduces noise, and boosts energy efficiency. Suitable for homes and commercial spaces, air diffusers help create a comfortable indoor environment while blending seamlessly with interior designs.",
    mainImage: "/p/a-diff-3.jpg",
    sideMedia: [
      {
        type: "video",
        src: "https://res.cloudinary.com/dshn2s0tc/video/upload/v1746734863/Air_diffuser-13_ufsfsd.mp4",
      },
      { type: "image", src: "/p/a-diff-2.jpg" },
    ],
    category: "Air diffuser",
    location: "Gulshan, Dhaka",
    startDate: "5th Dec, 2024",
    endDate: "5th Jan, 2025",
  },
  16: {
    name: "Towel heating rack",
    description:
      "A towel heating rack is a stylish and functional addition to any bathroom, designed to warm and dry towels efficiently. It adds comfort, prevents dampness, and helps reduce mildew. Ideal for modern homes, it also enhances bathroom aesthetics while providing a touch of luxury.",
    mainImage: "/p/t-r-1.jpg",
    sideMedia: [
      { type: "image", src: "/p/t-r-2.jpg" },
      { type: "video", src: "/p/t-rack.mp4" },
    ],
    category: "Towel heating rack",
    location: "Gulshan, Dhaka",
    startDate: "5th Feb, 2025",
    endDate: "15th Feb, 2025",
  },
  17: {
    name: "Hotel Item",
    description:
      "This project involved designing a modern and functional dining area for a large commercial space.",
    mainImage: "/p/az-11.jpg",
    sideMedia: [
      { type: "image", src: "/p/az-10.jpg" },
      { type: "image", src: "/p/az-12.jpg" },
    ],
    category: "Hotel Item",
    location: "Gulshan, Dhaka",
    startDate: "5th Jan, 2023",
    endDate: "15th March, 2023",
  },
};

const PortfolioHero = () => {
  const { id } = useParams(); // Retrieve the dynamic ID from the URL
  const product = productDetails[id]; // Get the product details based on the ID

  // Handle cases where the product is not found
  if (!product) {
    return (
      <h2 className="text-center text-xl font-bold font-Inter text-red-500 mt-[76px]">
        Product not found!
      </h2>
    );
  }

  return (
    <div className="text-black font-Inter sectionGap">
      {/* Image Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Main Image */}
        <div className="md:col-span-2 rounded-lg overflow-hidden">
          <img
            src={product.mainImage} // Main image dynamically loaded
            alt={product.name}
            className="w-full h-full object-cover aspect-video"
          />
        </div>

        {/* Side Images */}
        <div className="grid grid-rows-2 gap-6">
          {product.sideMedia.map((media, index) => (
            <div key={index} className="rounded-lg overflow-hidden">
              {media.type === "image" ? (
                <img
                  src={media.src}
                  alt={`${product.name} - Side ${index + 1}`}
                  className="w-full h-full object-cover aspect-video"
                />
              ) : (
                <video
                  src={media.src}
                  autoPlay
                  muted
                  className="w-full h-full object-cover aspect-video"
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Title and Text Section */}
      <div className="my-20 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Title */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            {product.name}
          </h2>
        </div>

        {/* Description */}
        <div>
          <p className="text-gray-600 text-sm leading-relaxed md:text-base">
            {product.description}
          </p>
        </div>
      </div>

      {/* Details Section */}
      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
        {/* Category Info */}
        <div className="bg-gray-200/35 p-4 rounded-lg text-center">
          <span className="text-orange-500 text-2xl flex justify-center">
            <CiShoppingTag />
          </span>
          <p className="font-bold text-gray-950 my-2">Category</p>
          <p className="text-gray-600 text-sm">{product.category}</p>
        </div>

        {/* Location Info */}
        <div className="bg-gray-200/35 p-4 rounded-lg text-center">
          <span className="text-orange-500 text-2xl flex justify-center">
            <GrLocation />
          </span>
          <p className="font-bold text-gray-950 my-2">Location</p>
          <p className="text-gray-600 text-sm">{product.location}</p>
        </div>

        {/* Start Date Info */}
        <div className="bg-gray-200/35 p-4 rounded-lg text-center">
          <span className="text-orange-500 text-2xl flex justify-center">
            <IoCalendarOutline />
          </span>
          <p className="font-bold text-gray-950 my-2">Start Date</p>
          <p className="text-gray-600 text-sm">{product.startDate}</p>
        </div>

        {/* End Date Info */}
        <div className="bg-gray-200/35 p-4 rounded-lg text-center">
          <span className="text-orange-500 text-2xl flex justify-center">
            <IoCalendarOutline />
          </span>
          <p className="font-bold text-gray-950 my-2">End Date</p>
          <p className="text-gray-600 text-sm">{product.endDate}</p>
        </div>
      </div>
    </div>
  );
};

export default PortfolioHero;
