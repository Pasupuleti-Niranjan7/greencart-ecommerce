import { FaCreditCard, FaTruck, FaCube, FaRegHeart } from "react-icons/fa";

function HomeServices() {
  return (
    <>
      <section className="max-w-[1280px] mx-auto px-4 my-15">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-4 border-b-1 border-b-gray-300 pb-8">

          <div className="flex flex-col items-center mt-5 mb-8 text-center">
            <div className="h-17 w-17 bg-lime-400/25 flex items-center justify-center rounded-full">
              <FaCreditCard size={40} />
            </div>
            <h3 className="text-gray-900 text-lg md:text-xl lg:text-2xl font-semibold my-1">
              Secure Payment
            </h3>
            <p className="text-gray-600 font-normal text-md md:text-lg">
              Safe with us
            </p>
          </div>

          <div className="flex flex-col items-center mt-5 mb-8 text-center">
            <div className="h-17 w-17 bg-lime-400/25 flex items-center justify-center rounded-full">
              <FaTruck size={40} />
            </div>
            <h3 className="text-gray-900 text-lg md:text-xl lg:text-2xl font-semibold my-1">
              Free Shipping
            </h3>
            <p className="text-gray-600 font-normal text-md md:text-lg">
              For $50 order
            </p>
          </div>

          <div className="flex flex-col items-center mt-5 mb-8 text-center">
            <div className="h-17 w-17 bg-lime-400/25 flex items-center justify-center rounded-full">
              <FaCube size={40} />
            </div>
            <h3 className="text-gray-900 text-lg md:text-xl lg:text-2xl font-semibold my-1">
              Delivered with Care
            </h3>
            <p className="text-gray-600 font-normal text-md md:text-lg">
              To your door
            </p>
          </div>

          <div className="flex flex-col items-center mt-5 mb-8 text-center">
            <div className="h-17 w-17 bg-lime-400/25 flex items-center justify-center rounded-full">
              <FaRegHeart size={40} />
            </div>
            <h3 className="text-gray-900 text-lg md:text-xl lg:text-2xl font-semibold my-1">
              Excellent Service
            </h3>
            <p className="text-gray-600 font-normal text-md md:text-lg">
              Handle with care
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomeServices;
