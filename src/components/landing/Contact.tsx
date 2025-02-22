
import { useForm } from "react-hook-form";

interface ContactFormData {
  type: string;
  name: string;
  email: string;
  message: string;
}

export const Contact = () => {
  const { register, handleSubmit } = useForm<ContactFormData>();

  const onSubmit = (data: ContactFormData) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <section className="flex w-full items-center gap-[-367px] font-normal mt-20 pl-[100px] max-md:max-w-full max-md:mt-10 max-md:pl-5">
      <div className="bg-[#F3F3F3] self-stretch flex min-w-60 gap-2.5 w-[1240px] my-auto pt-[60px] pb-20 px-[100px] rounded-[45px] max-md:max-w-full max-md:px-5">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex min-w-60 w-[556px] flex-col items-stretch"
        >
          <div className="flex gap-[35px] text-lg text-black">
            <label className="w-24 px-[42px] py-[3px]">Say Hi</label>
            <div className="flex items-start gap-[13px] w-[145px]">
              <input
                type="radio"
                className="bg-white border w-[30px] h-[30px] rounded-[29px] border-black"
                {...register("type")}
                value="quote"
              />
              <label>Get a Quote</label>
            </div>
          </div>

          <div className="w-full mt-10">
            <div className="w-full max-w-[556px] max-md:max-w-full">
              <label className="text-black text-base leading-7">Name</label>
              <input
                {...register("name")}
                className="bg-white border w-full mt-[5px] px-[30px] py-[18px] rounded-[14px] border-black"
                placeholder="Name"
              />
            </div>

            <div className="w-full max-w-[556px] mt-[25px] max-md:max-w-full">
              <label className="text-black text-base leading-7">Email*</label>
              <input
                {...register("email", { required: true })}
                className="bg-white border w-full mt-[5px] px-[30px] py-[18px] rounded-[14px] border-black"
                placeholder="Email"
              />
            </div>

            <div className="min-h-[223px] w-full max-w-[556px] mt-[25px] max-md:max-w-full">
              <label className="text-black text-base leading-7">Message*</label>
              <textarea
                {...register("message", { required: true })}
                className="bg-white border min-h-[190px] w-full mt-[5px] p-[30px] rounded-[14px] border-black resize-none"
                placeholder="Message"
              />
            </div>
          </div>

          <button
            type="submit"
            className="bg-[#191A23] w-full gap-2.5 text-xl text-white text-center leading-[1.4] mt-10 px-[35px] py-5 rounded-[14px] hover:bg-gray-800 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/afc361890cd0b36fe381088478360504fb4262c8c5004206ed08c2ed15c7ddc9"
        className="aspect-[0.72] object-contain w-[692px] self-stretch min-w-60 my-auto rounded-[0px_0px_0px_0px] max-md:max-w-full"
        alt="Contact illustration"
      />
    </section>
  );
};
