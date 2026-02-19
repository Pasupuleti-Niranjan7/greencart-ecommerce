
function EndBanner() {
  return (
    <>
      <div className="bg-[url(/image3.png)] bg-center bg-cover h-70 md:h-80 mt-8 mb-15 px-4 text-white flex flex-col items-center justify-center gap-2">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center py-3 tracking-wide">
          Ready to Find your Perfect Plant?
        </h2>
        <p className="text-sm sm:text-md md:text-lg text-center text-balance">
          Browse our online store or visit us in person to <br />
          experience the beauty of nature.
        </p>
        <button className="bg-lime-500/90 px-4 py-2 rounded-full cursor-pointer hover:bg-lime-800 duration-500 text-lg mt-5">
          Shop Now
        </button>
      </div>
    </>
  );
}

export default EndBanner;