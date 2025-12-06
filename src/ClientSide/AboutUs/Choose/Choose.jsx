const Choose = () => {
  return (
    <div className="sectionGap">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-[10px] xl:gap-[76px] items-center">
        <div>
          <h2 className="globalHead pb-[10px]">Why Choose Us</h2>
          <p className="heroPara text-[#131212]/[.6] pb-2">
            At <strong>Authentic Zaman</strong> , we love bringing your thoughts
            to life, because it&apos;s built for only one: you. With a company
            to deliver breathtaking, creative, unique interior designs that will
            blend functionality with style, brought about by expert and
            professional interior designers. A focus on quality and details
            allows for personal commitment in every phase. Be it residential or
            commercial, Authentic Zaman strives for innovation and authenticity
            in every project undertaken, ensuring each design reflects who you
            are. Come to us for space that inspires and transforms, tailor-made
            just for you.
          </p>
          <p className="heroPara text-[#131212]/[.6] pb-[30px]">
            Whether residential or commercial, we craft spaces that reflect your
            personality, lifestyle, and vision. Every project is thoughtfully
            planned to balance aesthetics, comfort, and practicality while
            incorporating innovative solutions that enhance the functionality of
            your space. From material selection to lighting, color palettes, and
            spatial flow, we ensure each detail contributes to a cohesive and
            harmonious environment. Authentic Zaman is committed to delivering
            designs that not only inspire and transform but also provide
            long-lasting value, creating environments where every corner tells
            your unique story and every element serves a purpose tailored to
            your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[18px]">
          <div className="order-1 md:order-1">
            <div className="h-[200px] rounded-[16px] border border-[#000000]/[.1] px-[63px] py-[34px] bg-[#00000005] flex flex-col justify-center items-center">
              <div className="p-[13px] bg-primaryColor  rounded-full flex justify-center items-center ">
                {" "}
                {/* Ensure this reacts to group hover */}
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-white" // Apply color on group hover
                >
                  <path
                    d="M12 7C12.5523 7 13 6.55228 13 6C13 5.44772 12.5523 5 12 5C11.4477 5 11 5.44772 11 6C11 6.55228 11.4477 7 12 7Z"
                    fill="currentColor"
                  />
                  <path
                    d="M6 17H18V19H6V17ZM10 11.83L12.792 14.624L16.724 10.689L18 12V8H14L15.31 9.275L12.791 11.794L10 9L6 13L7.414 14.414L10 11.83Z"
                    fill="currentColor"
                  />
                  <path
                    d="M19 3.00001H15.702C15.603 2.85276 15.4961 2.7109 15.382 2.57501L15.372 2.56301C14.637 1.70758 13.6034 1.16468 12.482 1.04501C12.1635 0.984916 11.8365 0.984916 11.518 1.04501C10.3966 1.16468 9.36298 1.70758 8.628 2.56301L8.618 2.57501C8.5039 2.71057 8.39708 2.8521 8.298 2.99901V3.00001H5C4.20459 3.0008 3.44199 3.31713 2.87956 3.87956C2.31712 4.442 2.00079 5.2046 2 6.00001V20C2.00079 20.7954 2.31712 21.558 2.87956 22.1205C3.44199 22.6829 4.20459 22.9992 5 23H19C19.7954 22.9992 20.558 22.6829 21.1204 22.1205C21.6829 21.558 21.9992 20.7954 22 20V6.00001C21.9992 5.2046 21.6829 4.442 21.1204 3.87956C20.558 3.31713 19.7954 3.0008 19 3.00001ZM20 20C20 20.2652 19.8946 20.5196 19.7071 20.7071C19.5196 20.8947 19.2652 21 19 21H5C4.73478 21 4.48043 20.8947 4.29289 20.7071C4.10536 20.5196 4 20.2652 4 20V6.00001C4 5.73479 4.10536 5.48044 4.29289 5.2929C4.48043 5.10536 4.73478 5.00001 5 5.00001H9.55C9.66476 4.43486 9.97136 3.92677 10.4179 3.56182C10.8644 3.19687 11.4233 2.9975 12 2.9975C12.5767 2.9975 13.1356 3.19687 13.5821 3.56182C14.0286 3.92677 14.3352 4.43486 14.45 5.00001H19C19.2652 5.00001 19.5196 5.10536 19.7071 5.2929C19.8946 5.48044 20 5.73479 20 6.00001V20Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <h1 className="chooseNumber pt-[16px]">150</h1>
              <p className="pt-[2px]  heroPara text-[#131212]/[.6]">
                Projects Worked
              </p>
            </div>
          </div>

          <div className="bg-primaryColor text-white rounded-[16px] order-2 md:order-2">
            <div className="h-[200px] rounded-[16px] border border-[#000000]/[.1] px-[63px] py-[34px] bg-[#00000005] flex flex-col justify-center items-center">
              <div className="p-[13px] bg-white rounded-full flex justify-center items-center ">
                {" "}
                {/* Ensure this reacts to group hover */}
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 9C16 14.33 8 14.33 8 9H10C10 11.67 14 11.67 14 9M20 18V21H4V18C4 15.33 9.33 14 12 14C14.67 14 20 15.33 20 18ZM18.1 18C18.1 17.36 14.97 15.9 12 15.9C9.03 15.9 5.9 17.36 5.9 18V19.1H18.1M12.5 2C12.78 2 13 2.22 13 2.5V5.5H14V3C14.7077 3.32752 15.3006 3.86019 15.7019 4.52889C16.1031 5.19758 16.294 5.97142 16.25 6.75C16.25 6.75 16.95 6.89 17 8H7C7 6.89 7.75 6.75 7.75 6.75C7.70595 5.97142 7.89693 5.19758 8.29814 4.52889C8.69936 3.86019 9.29229 3.32752 10 3V5.5H11V2.5C11 2.22 11.22 2 11.5 2"
                    fill="#FE8E38"
                  />
                </svg>
              </div>
              <h1 className="chooseNumber pt-[16px] text-[#FFFFFF]/[.8]">25</h1>
              <p className="pt-[2px]  heroPara text-[#FFFFFF]/[.8]">
                Expert Workers
              </p>
            </div>
          </div>

          <div className="bg-primaryColor text-white rounded-[16px] order-4 md:order-3">
            <div className="h-[200px] rounded-[16px] border border-[#000000]/[.1] px-[63px] py-[34px] bg-[#00000005] flex flex-col justify-center items-center">
              <div className="p-[13px] bg-white rounded-full flex justify-center items-center">
                {" "}
                {/* Ensure this reacts to group hover */}
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 4C13.0609 4 14.0783 4.42143 14.8284 5.17157C15.5786 5.92172 16 6.93913 16 8C16 9.06087 15.5786 10.0783 14.8284 10.8284C14.0783 11.5786 13.0609 12 12 12C10.9391 12 9.92172 11.5786 9.17157 10.8284C8.42143 10.0783 8 9.06087 8 8C8 6.93913 8.42143 5.92172 9.17157 5.17157C9.92172 4.42143 10.9391 4 12 4ZM12 6C11.4696 6 10.9609 6.21071 10.5858 6.58579C10.2107 6.96086 10 7.46957 10 8C10 8.53043 10.2107 9.03914 10.5858 9.41421C10.9609 9.78929 11.4696 10 12 10C12.5304 10 13.0391 9.78929 13.4142 9.41421C13.7893 9.03914 14 8.53043 14 8C14 7.46957 13.7893 6.96086 13.4142 6.58579C13.0391 6.21071 12.5304 6 12 6ZM12 13C14.67 13 20 14.33 20 17V20H4V17C4 14.33 9.33 13 12 13ZM12 14.9C9.03 14.9 5.9 16.36 5.9 17V18.1H18.1V17C18.1 16.36 14.97 14.9 12 14.9Z"
                    fill="#FE8E38"
                  />
                </svg>
              </div>
              <h1 className="chooseNumber pt-[16px] text-[#FFFFFF]/[.8]">25</h1>
              <p className="pt-[2px]  heroPara text-[#FFFFFF]/[.8]">
                Happy Clients
              </p>
            </div>
          </div>

          <div className="order-3 md:order-4">
            <div className="h-[200px] rounded-[16px] border border-[#000000]/[.1] px-[63px] py-[34px] bg-[#00000005] flex flex-col justify-center items-center">
              <div className="p-[13px] bg-primaryColor  rounded-full flex justify-center items-center ">
                {" "}
                {/* Ensure this reacts to group hover */}
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2.25 1.5H21.75L22.5 2.25V21.75L21.75 22.5H2.25L1.5 21.75V2.25L2.25 1.5ZM3 21H21V3H3V21ZM4.5 4.5H7.5V19.5H4.5V4.5ZM13.5 4.5H10.5V13.5H13.5V4.5ZM16.5 4.5H19.5V16.5H16.5V4.5Z"
                    fill="white"
                  />
                </svg>
              </div>
              <h1 className="chooseNumber pt-[16px] ">20</h1>
              <p className="pt-[2px]  heroPara text-[#131212]/[.6] ">
                Upcoming Projects
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
