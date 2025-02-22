import { Navigation } from "@/components/landing/Navigation";
import { Hero } from "@/components/landing/Hero";
import { LogoCloud } from "@/components/landing/LogoCloud";
import { Services } from "@/components/landing/Services";
import { CaseStudies } from "@/components/landing/CaseStudies";
import { Process } from "@/components/landing/Process";
import { Team } from "@/components/landing/Team";
import { Contact } from "@/components/landing/Contact";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="bg-white flex flex-col items-stretch pt-[60px]">
      <div className="w-full max-md:max-w-full">
        <Navigation />
        <Hero />
        <LogoCloud />
      </div>
      <Services />
      <div className="flex gap-10 text-black flex-wrap mt-[140px] px-[100px] max-md:mt-10 max-md:px-5">
        <div className="text-[40px] font-medium whitespace-nowrap">
          <div className="bg-[#B9FF66] px-[7px] rounded-[7px]">
            Case Studies
          </div>
        </div>
        <div className="text-lg font-normal w-[580px] max-md:max-w-full">
          Explore Real-Life Examples of Our Proven Digital Marketing Success
          through Our Case Studies
        </div>
      </div>
      <CaseStudies />
      <Process />
      <Team />
      <div className="flex gap-10 text-black flex-wrap mt-[140px] px-[100px] max-md:mt-10 max-md:px-5">
        <div className="text-[40px] font-medium whitespace-nowrap">
          <div className="bg-[#B9FF66] px-[7px] rounded-[7px]">
            Testimonials
          </div>
        </div>
        <div className="text-lg font-normal w-[473px] max-md:max-w-full">
          Hear from Our Satisfied Clients: Read Our Testimonials to Learn More
          about Our Digital Marketing Services
        </div>
      </div>
      <div className="items-stretch bg-[#191A23] self-center flex w-full max-w-[1240px] flex-col overflow-hidden text-lg text-white font-normal justify-center mt-20 py-[76px] rounded-[45px] max-md:max-w-full max-md:mt-10">
        {/* Testimonials section implementation */}
        <div className="flex w-full flex-col items-center max-md:max-w-full">
          <div className="flex w-full gap-[40px_50px] justify-between px-[60px] max-md:px-5 flex-wrap">
            {[1, 2, 3].map((index) => (
              <div key={index} className="flex min-w-60 flex-col w-[606px]">
                <div className="flex max-w-full w-[606px] items-stretch gap-[40px_93px]">
                  <div className="w-[502px] mt-12 max-md:mt-10">
                    "We have been working with Positivus for the past year and
                    have seen a significant increase in website traffic and
                    leads as a result of their efforts. The team is
                    professional, responsive, and truly cares about the success
                    of our business. We highly recommend Positivus to any
                    company looking to grow their online presence."
                  </div>
                </div>
                <div className="mt-5">
                  <span className="font-medium text-[#B9FF66] text-xl">
                    John Smith
                  </span>
                  <br />
                  Marketing Director at XYZ Corp
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex gap-10 text-black flex-wrap mt-[140px] px-[100px] max-md:mt-10 max-md:px-5">
        <div className="text-[40px] font-medium">
          <div className="bg-[#B9FF66] px-[7px] rounded-[7px]">Contact Us</div>
        </div>
        <div className="text-lg font-normal w-[323px]">
          Connect with Us: Let's Discuss Your Digital Marketing Needs
        </div>
      </div>
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
