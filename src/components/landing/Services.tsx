
interface ServiceCardProps {
  title: string[];
  illustration: string;
  variant: "light" | "dark" | "accent";
}

const ServiceCard = ({ title, illustration, variant }: ServiceCardProps) => {
  const styles = {
    light: {
      bg: "bg-[#F3F3F3]",
      text: "text-black",
      label: "bg-white"
    },
    dark: {
      bg: "bg-[#191A23]",
      text: "text-white",
      label: "bg-[#B9FF66]"
    },
    accent: {
      bg: "bg-[#B9FF66]",
      text: "text-black",
      label: "bg-white"
    }
  }[variant];

  return (
    <div className={`${styles.bg} border border-[#191A23] shadow-[0px_5px_0px_0px_#191A23] rounded-[45px] p-10 flex flex-col lg:flex-row items-center gap-10 w-full lg:w-[calc(50%-20px)] transition-transform hover:translate-y-[-5px]`}>
      <div className="flex-1">
        <div className="flex flex-col gap-2">
          {title.map((line, index) => (
            <span
              key={index}
              className={`${styles.label} inline-block px-2 py-1 rounded-[7px] text-black text-2xl lg:text-3xl font-medium w-fit`}
            >
              {line}
            </span>
          ))}
        </div>
        <button className={`${styles.text} text-xl mt-10 flex items-center gap-2 hover:opacity-80 transition-opacity`}>
          Learn more
        </button>
      </div>
      <div className="w-full lg:w-[210px]">
        <img
          src={illustration}
          alt={title.join(" ")}
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  );
};

export const Services = () => {
  const services = [
    {
      title: ["Search engine", "optimization"],
      illustration: "https://cdn.builder.io/api/v1/image/assets/TEMP/2bbcf48cd7577c0cc2d31d86ead783a74923700d1b69d9f43dd10bc00b9380a9",
      variant: "light" as const
    },
    {
      title: ["Pay-per-click", "advertising"],
      illustration: "https://cdn.builder.io/api/v1/image/assets/TEMP/b3395683621a61a2421a4e04767deebbde296ee765e7078645ffb123167cd3c0",
      variant: "accent" as const
    },
    {
      title: ["Social Media", "Marketing"],
      illustration: "https://cdn.builder.io/api/v1/image/assets/TEMP/01f332088a6c74120b833b0b54b2102a668b9c33e05b40446823bd2e72714f0e",
      variant: "dark" as const
    },
    {
      title: ["Email", "Marketing"],
      illustration: "https://cdn.builder.io/api/v1/image/assets/TEMP/01f332088a6c74120b833b0b54b2102a668b9c33e05b40446823bd2e72714f0e",
      variant: "light" as const
    },
    {
      title: ["Content", "Creation"],
      illustration: "https://cdn.builder.io/api/v1/image/assets/TEMP/01f332088a6c74120b833b0b54b2102a668b9c33e05b40446823bd2e72714f0e",
      variant: "accent" as const
    },
    {
      title: ["Analytics and", "Tracking"],
      illustration: "https://cdn.builder.io/api/v1/image/assets/TEMP/01f332088a6c74120b833b0b54b2102a668b9c33e05b40446823bd2e72714f0e",
      variant: "dark" as const
    }
  ];

  return (
    <section className="max-w-[1440px] mx-auto mt-20 px-5 lg:px-[100px]">
      <div className="flex flex-col lg:flex-row gap-10 mb-20">
        <h2 className="text-4xl font-medium">
          <span className="bg-[#B9FF66] px-2 py-1 rounded-[7px]">Services</span>
        </h2>
        <p className="text-lg max-w-[580px]">
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:
        </p>
      </div>
      <div className="flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
};
