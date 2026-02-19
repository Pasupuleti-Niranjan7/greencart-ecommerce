
function HomeOfferBanner() {
  return (
    <>
      <div className="bg-[url(/image2.png)] bg-center bg-cover h-70 md:h-80 mt-8 mb-15 px-4 text-white flex flex-col items-center justify-center gap-2">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center py-3 tracking-wide">
          Flash Sale: Up to 50% Off <br /> On Select Items!
        </h2>
        <p className="text-sm md:text-md text-center text-balance">
          Don’t miss out on our flash sale event! For a limited time, enjoy up
          to 50% <br /> off on a selection of our best-selling products.
        </p>
        <button className="border-1 px-5 py-2 my-4 rounded-full cursor-pointer hover:bg-white hover:text-[#000300] duration-500 ease-in-out tracking-wide">Shop Now
        </button>
      </div>
    </>
  );
}

export default HomeOfferBanner;
