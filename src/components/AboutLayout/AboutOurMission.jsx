import { TiTick } from "react-icons/ti";

let AboutOurMission = () => {
  return (
    <>
      <section className="max-w-[1280px] mx-auto p-4 mt-15 sm:mt-20 mb-20 flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-8">
        <section className="flex flex-col items-start px-3  gap-4 sm:mt-10 md:gap-6 mx-auto md:mx-0 max-w-200">
          <h3 className="font-semibold text-2xl sm:text-2xl md:text-4xl lg:text-5xl">
            Our Mission
          </h3>
          <p className="text-sm md:text-base font-light sm:font-normal text-gray-500 pb-5 text-pretty">
            Our mission is to make the world a greener place, one plant at a
            time. We strive to provide our customers with the highest quality
            plants and plant care products, along with the knowledge and support
            to help them thrive.
          </p>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-4  md:mt-5 md:gap-x-15 md:gap-y-5">
            <div className="flex items-center gap-2">
              <span className="bg-lime-400 rounded-full h-6 w-6 flex items-center justify-center text-white">
                <TiTick size={22} />
              </span>
              Quality and Variety
            </div>

            <div className="flex items-center gap-2">
              <span className="bg-lime-400 rounded-full h-6 w-6 flex items-center justify-center text-white">
                <TiTick size={22} />
              </span>
              Expert Guidance
            </div>

            <div className="flex items-center gap-2">
              <span className="bg-lime-400 rounded-full h-6 w-6 flex items-center justify-center text-white">
                <TiTick size={22} />
              </span>
              Sustainable Practices
            </div>

            <div className="flex items-center gap-2">
              <span className="bg-lime-400 rounded-full h-6 w-6 flex items-center justify-center text-white">
                <TiTick size={22} />
              </span>
              Experienced Team
            </div>
          </section>
        </section>
        <img
          src="/popularPlant8.png"
          alt=""
          className="w-80 h-[380px] lg:max-h-[400px] lg:max-w-[500px]"
        />
      </section>
    </>
  );
};

export default AboutOurMission;
