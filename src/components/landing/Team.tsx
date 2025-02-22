interface TeamMemberProps {
  image: string;
  name: string;
  role: string;
  description: string;
}

const TeamMember = ({ image, name, role, description }: TeamMemberProps) => {
  return (
    <div className="bg-white shadow-[0px_5px_0px_rgba(25,26,35,1)] border min-w-60 min-h-[331px] overflow-hidden w-[387px] pt-10 pb-[63px] px-[35px] rounded-[45px] border-[rgba(25,26,35,1)] border-solid max-md:px-5">
      <div className="w-full max-w-[317px]">
        <div className="flex w-full gap-5">
          <img
            loading="lazy"
            src={image}
            className="aspect-[1.03] object-contain w-[106px] shrink-0"
            alt={name}
          />
          <div className="flex flex-col">
            <h3 className="text-xl font-medium">{name}</h3>
            <p className="text-lg font-normal">{role}</p>
          </div>
        </div>
        <div className="border min-h-px w-full mt-7 border-black border-solid" />
        <p className="text-lg font-normal mt-7">{description}</p>
      </div>
    </div>
  );
};

export const Team = () => {
  const teamMembers = [
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/2c8bbb8065b74f6a1603ba4a04d6b7d145e43ce6e200508c20117e03b9ea8137",
      name: "John Smith",
      role: "CEO and Founder",
      description:
        "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
    },
    // Add other team members...
  ];

  return (
    <section className="text-black mt-20 max-md:max-w-full max-md:mt-10">
      <div className="flex gap-10 text-black flex-wrap px-[100px] max-md:px-5">
        <h2 className="text-[40px] font-medium">
          <span className="bg-[#B9FF66] px-[7px] rounded-[7px]">Team</span>
        </h2>
        <p className="text-lg font-normal w-[473px] max-md:max-w-full">
          Meet the skilled and experienced team behind our successful digital
          marketing strategies
        </p>
      </div>
      <div className="flex gap-10 flex-wrap mt-10 px-[100px] max-md:px-5">
        {teamMembers.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>
      <button className="bg-[#191A23] gap-2.5 text-xl text-white font-normal text-center leading-[1.4] mx-auto mt-10 px-[35px] py-5 rounded-[14px] hover:bg-gray-800 transition-colors block">
        See all team
      </button>
    </section>
  );
};
