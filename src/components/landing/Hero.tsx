
export const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row max-w-[1440px] mx-auto gap-[40px] mt-[120px] px-5 lg:px-[100px]">
      <div className="flex flex-col flex-1 max-w-[531px]">
        <h1 className="text-4xl lg:text-6xl font-medium text-black leading-tight">
          Navigating the digital landscape for success
        </h1>
        <p className="text-xl text-black mt-[35px] leading-7">
          Our digital marketing agency helps businesses grow and succeed online
          through a range of services including SEO, PPC, social media
          marketing, and content creation.
        </p>
        <button className="bg-[#191A23] text-white text-xl mt-[35px] px-[35px] py-5 rounded-[14px] hover:bg-gray-800 transition-colors w-fit">
          Book a consultation
        </button>
      </div>
      <div className="flex-1 flex items-center justify-center lg:justify-end">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8b676fb288e1199067b2fefecd14b887ec1902303c1b6ab14ebdcdf9aefcb01c"
          className="w-full max-w-[600px] object-contain"
          alt="Digital marketing illustration"
        />
      </div>
    </section>
  );
};
