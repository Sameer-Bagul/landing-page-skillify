
export const LogoCloud = () => {
  const logos = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/bbaca6b0c3b98778c1811616f01b6532d19b914fdd3f282e840c511c1a887dee",
      alt: "Amazon logo"
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/e80c044ef7cff2721ae08b01bd80a3e1993b6e3f8acd8473ae61ba153fe26c05",
      alt: "Hubspot logo"
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/60def54ed843245761ce78a2f137c7bca55e78df395036858bdc7eb0be5c4eac",
      alt: "Notion logo"
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/615fac8b7f97b8430ed2b0b9d9cec759109262d93d2bf7d43d3ea5e537369a4d",
      alt: "Netflix logo"
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/2b9e105b769b0cfad99fc49b5c2ac5c5c5f3ae0ebc0cc22c677fe396e0e8216d",
      alt: "Zoom logo"
    }
  ];

  return (
    <div className="max-w-[1440px] mx-auto mt-20 px-5 lg:px-[100px]">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 items-center justify-items-center">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo.src}
            alt={logo.alt}
            className="w-[124px] object-contain grayscale hover:grayscale-0 transition-all duration-300"
          />
        ))}
      </div>
    </div>
  );
};
