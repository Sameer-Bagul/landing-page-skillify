export const CaseStudies = () => {
  return (
    <section className="font-normal mt-20 px-[100px] max-md:max-w-full max-md:mr-1 max-md:mt-10 max-md:px-5">
      <div className="bg-[#191A23] flex gap-[40px_64px] flex-wrap px-[60px] py-[70px] rounded-[45px] max-md:max-w-full max-md:px-5">
        {[1, 2, 3].map((index) => (
          <div
            key={index}
            className="flex min-w-60 flex-col items-stretch w-[286px]"
          >
            <p className="text-white text-lg">
              For a local restaurant, we implemented a targeted PPC campaign
              that resulted in a 50% increase in website traffic and a 25%
              increase in sales.
            </p>
            <button className="gap-[15px] text-xl text-[#B9FF66] leading-[1.4] mt-5 text-left hover:text-[#a3ff33] transition-colors">
              Learn more
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};
