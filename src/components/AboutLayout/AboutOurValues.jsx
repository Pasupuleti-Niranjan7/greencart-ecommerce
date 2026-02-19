import { FaCube } from "react-icons/fa6";

let AboutOurValues = () => {
  return (
    <>
      <section className="px-4 py-8 bg-lime-300/30 my-8">
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold pt-3 pb-10">
          Our Core Values that Drive <br /> Everything We Do
        </h2>
        <section className="max-w-[1280px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="flex flex-col justify-center items-center gap-2 max-w-[300px] mx-auto">
            <div className="bg-[#000300] text-white h-12 w-12 rounded-full flex items-center justify-center">
              <FaCube size={20} />
            </div>
            <div>
              <h3 className="text-[1.4rem] sm:text-xl lg:text-[1.6rem] font-semibold text-center">
                Passionate About Work
              </h3>
              <p className="text-[0.9rem] sm:text-base text-gray-600 text-center text-balance">
                Passion for work is a enthusiasm and excitement for what you do in it.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center gap-2 max-w-[300px] mx-auto">
            <div className="bg-[#000300] text-white h-12 w-12 rounded-full flex items-center justify-center">
              <FaCube size={20} />
            </div>
            <div>
              <h3 className="text-[1.4rem] sm:text-xl lg:text-[1.56rem] font-semibold text-center">
                Creative team members
              </h3>
              <p className="text-[0.9rem] sm:text-base text-gray-600 text-center text-balance">
                A creative team is to design and execute campaigns & encourage
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center gap-2 max-w-[300px] mx-auto">
            <div className="bg-[#000300] text-white h-12 w-12 rounded-full flex items-center justify-center">
              <FaCube size={20} />
            </div>
            <div>
              <h3 className="text-[1.4rem] sm:text-xl lg:text-[1.6rem] font-semibold text-center">
                Innovation solutions
              </h3>
              <p className="text-[0.9rem] sm:text-base text-gray-600 text-center text-balance">
                Using either completely concepts finding new ways of
                usingexisting
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center gap-2 max-w-[300px] mx-auto">
            <div className="bg-[#000300] text-white h-12 w-12 rounded-full flex items-center justify-center">
              <FaCube size={20} />
            </div>
            <div>
              <h3 className="text-[1.4rem] sm:text-xl lg:text-[1.6rem] font-semibold text-center">
                Qualitiful products
              </h3>
              <p className="text-[0.9rem] sm:text-base text-gray-600 text-center text-balance">
                Product quality refers to how well a product satisfies our
                customer
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center gap-2 max-w-[300px] mx-auto">
            <div className="bg-[#000300] text-white h-12 w-12 rounded-full flex items-center justify-center">
              <FaCube size={20} />
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-[1.4rem] sm:text-xl lg:text-[1.6rem] font-semibold text-center">
                Customer satisfaction
              </h3>
              <p className="text-[0.9rem] sm:text-base text-gray-600 text-center text-balance">
                Happy customers are delighted because of our provided customer service
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center gap-2 max-w-[300px] mx-auto">
            <div className="bg-[#000300] text-white h-12 w-12 rounded-full flex items-center justify-center">
              <FaCube size={20} />
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-[1.4rem] sm:text-xl lg:text-[1.6rem] font-semibold text-center">
                Simplicity interface
              </h3>
              <p className="text-[0.9rem] sm:text-base text-gray-600 text-center text-balance">
                Simplicity is used loosely to refer to the need to minimize a
                process
              </p>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default AboutOurValues;
