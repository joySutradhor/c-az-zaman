const Create = () => {
  return (
    <div className="sectionGap">
      {/* <h1 className="globalHead text-center mb-[76px]">About us</h1> */}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[76px] items-center">
        <div className="h-[55vh] ">
          <img
            src="/serviceCreate.jpg"
            alt=""
            className="h-full w-full object-cover rounded-[8px]"
          />
        </div>
        <div>
          <p className="heroPara text-primaryColor pb-[6px]">Design Studio</p>
          <h2 className="globalHead pb-[10px]">
            We Create Stunning Home Designs
          </h2>
          <div className="space-y-5">
            <p className="heroPara text-[#131212]/[.6] ">
              At <strong>Authentic Zaman</strong> , we're passionate about designing homes that
              leave a lasting impression and truly reflect the people who live
              in them. We understand that your home is more than just a space—it
              is a reflection of your personality, lifestyle, and aspirations.
              Every corner, every detail, and every choice we make is aimed at
              creating an environment that feels both beautiful and functional,
              tailored specifically to your needs.
            </p>
            <p className="heroPara text-[#131212]/[.6] ">
              Whether you’re renovating an existing space or designing your home
              from the ground up, our team approaches each project with care,
              creativity, and expertise. We combine innovative design solutions
              with practical functionality to ensure that every room not only
              looks stunning but also enhances the way you live. From selecting
              the perfect materials and finishes to planning layouts that
              maximize comfort and flow, we handle every aspect with meticulous
              attention to detail.
            </p>
            <p className="heroPara text-[#131212]/[.6] ">
              Our mission is to bring your vision to life in a way that is
              authentic, inspiring, and enduring. We work closely with you
              throughout the process, understanding your preferences,
              incorporating your ideas, and offering guidance when needed. The
              result is a home that tells your unique story, where every element
              is thoughtfully curated, every space feels inviting, and every
              design choice contributes to a harmonious and personalized
              environment that you’ll cherish for years to come.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
