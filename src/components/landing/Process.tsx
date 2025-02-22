interface ProcessStepProps {
  number: string;
  title: string;
  description?: string;
  isOpen?: boolean;
}

const ProcessStep = ({
  number,
  title,
  description,
  isOpen = false,
}: ProcessStepProps) => {
  const bgColor = isOpen ? "bg-[#B9FF66]" : "bg-[#F3F3F3]";

  return (
    <div
      className={`border shadow-[0px_5px_0px_0px_#191A23] ${bgColor} w-full max-w-[1234px] overflow-hidden pl-[60px] pr-[57px] py-[41px] rounded-[45px] border-solid border-[#191A23] max-md:max-w-full max-md:px-5`}
    >
      <div className="flex w-full max-w-[1117px] items-center gap-[40px_100px] overflow-hidden justify-between flex-wrap max-md:max-w-full">
        <div className="self-stretch flex min-w-60 items-center gap-[25px] text-black font-medium whitespace-nowrap flex-wrap my-auto max-md:max-w-full">
          <div className="text-6xl self-stretch my-auto max-md:text-[40px]">
            {number}
          </div>
          <div className="text-3xl self-stretch w-[612px] my-auto max-md:max-w-full">
            {title}
          </div>
        </div>
        <div className="self-stretch w-[58px] my-auto">
          <div className="stroke-[1px] border bg-[#F3F3F3] flex flex-col items-center justify-center w-[58px] h-[58px] stroke-[#191A23] px-1.5 rounded-[50%] border-[rgba(25,26,35,1)] border-solid">
            <div className="bg-black flex w-[18px] shrink-0 h-[5px]" />
          </div>
        </div>
      </div>
      {isOpen && description && (
        <>
          <div className="border min-h-0 w-full mt-[30px] border-black border-solid" />
          <p className="text-black text-lg font-normal mt-[30px] max-md:max-w-full">
            {description}
          </p>
        </>
      )}
    </div>
  );
};

export const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Consultation",
      description:
        "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
      isOpen: true,
    },
    {
      number: "02",
      title: "Research and Strategy Development",
    },
    {
      number: "03",
      title: "Implementation",
    },
    {
      number: "04",
      title: "Monitoring and Optimization",
    },
    {
      number: "05",
      title: "Reporting and Communication",
    },
    {
      number: "06",
      title: "Continual Improvement",
    },
  ];

  return (
    <section className="mt-20 px-[100px] max-md:max-w-full max-md:mt-10 max-md:px-5">
      <div className="flex gap-10 text-black flex-wrap mb-10">
        <h2 className="min-w-60 text-[40px] font-medium">
          <span className="bg-[#B9FF66] px-[7px] rounded-[7px]">
            Our Working Process
          </span>
        </h2>
        <p className="text-lg font-normal w-[292px]">
          Step-by-Step Guide to Achieving Your Business Goals
        </p>
      </div>
      <div className="flex flex-col gap-[30px]">
        {steps.map((step, index) => (
          <ProcessStep key={index} {...step} />
        ))}
      </div>
    </section>
  );
};
