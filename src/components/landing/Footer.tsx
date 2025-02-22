export const Footer = () => {
  return (
    <footer className="w-full mt-[140px] px-[100px] max-md:max-w-full max-md:mt-10 max-md:px-5">
      <div className="bg-[#191A23] max-w-full w-[1241px] pt-[55px] pb-[50px] px-[60px] rounded-[45px_45px_0px_0px] max-md:px-5">
        <div className="w-full max-w-[1121px] max-md:max-w-full">
          <div className="flex w-full items-center gap-[40px_155px] flex-wrap max-md:max-w-full">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/31355bb020808d5ed9cfa2c48fbbebf45e29d8e359fa2ebd68f6a9d833418826"
              className="aspect-[6.21] object-contain w-[180px] self-stretch shrink-0 my-auto"
              alt="Logo"
            />
            <nav className="self-stretch flex min-w-60 gap-10 text-lg text-white font-normal flex-wrap my-auto max-md:max-w-full">
              <a href="/about" className="hover:text-gray-300">
                About us
              </a>
              <a href="/services" className="hover:text-gray-300">
                Services
              </a>
              <a href="/cases" className="hover:text-gray-300">
                Use Cases
              </a>
              <a href="/pricing" className="hover:text-gray-300">
                Pricing
              </a>
              <a href="/blog" className="hover:text-gray-300">
                Blog
              </a>
            </nav>
            <div className="self-stretch flex gap-5 my-auto">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9f647e6456a2f5aa2b87ac7dbf14361af8a8daed2caa6ed204f8c51f565d1792"
                className="aspect-[1] object-contain w-[30px]"
                alt="Social media"
              />
            </div>
          </div>

          <div className="flex gap-[40px_154px] flex-wrap mt-[66px] max-md:max-w-full max-md:mt-10">
            <div className="flex min-w-60 flex-col items-stretch">
              <h3 className="text-xl text-black font-medium">
                <span className="bg-[#B9FF66] px-[7px] rounded-[7px]">
                  Contact us:
                </span>
              </h3>
              <div className="text-lg text-white font-normal mt-[27px]">
                <p>Email: info@positivus.com</p>
                <p className="mt-5">Phone: 555-567-8901</p>
                <p className="mt-5">
                  Address: 1234 Main St
                  <br />
                  Moonstone City, Stardust State 12345
                </p>
              </div>
            </div>

            <div className="bg-[rgba(41,42,50,1)] flex min-w-60 gap-5 overflow-hidden font-normal flex-wrap px-10 py-[58px] rounded-[14px] max-md:max-w-full max-md:px-5">
              <input
                type="email"
                placeholder="Email"
                className="border min-w-60 text-lg text-white w-[285px] px-[35px] py-[22px] rounded-[14px] border-white bg-transparent"
              />
              <button className="bg-[#B9FF66] min-w-60 gap-2.5 text-xl text-black text-center leading-[1.4] px-[35px] py-5 rounded-[14px] hover:bg-[#a3ff33] transition-colors">
                Subscribe to news
              </button>
            </div>
          </div>
        </div>

        <div className="flex w-full max-w-[1120px] flex-col items-stretch text-lg text-white font-normal leading-loose mt-[50px] max-md:max-w-full max-md:mt-10">
          <div className="border min-h-px w-full border-white border-solid" />
          <div className="flex gap-10 flex-wrap mt-[50px] max-md:max-w-full max-md:mt-10">
            <p>© 2023 Positivus. All Rights Reserved.</p>
            <a href="/privacy" className="hover:text-gray-300">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
