function HomeTrendingProducts() {
  return (
    <>
      <h2 className="text-3xl md:text-4xl font-semibold text-center">
        Trending Products
      </h2>
      <section className="max-w-[1280px] mx-auto grid md:grid-cols-3 gap-3 my-5 mb-15 px-5">
        <div className=" max-w-[400px] mx-auto my-5">
          <img
            src="/trendingPlant2.png"
            alt=""
            className="w-[300px] md:w-[350px] mx-auto lg:mx-0"
          />
          <p>&#9733;&#9733;&#9733;&#9733;&#9734;</p>
          <h3 className="font-medium">Zen Bamboo Grove</h3>
          <p className="text-gray-600">Indoor Plants</p>
          <p className="font-medium text-gray-600 text-md">
            <span className="text-lg">₹</span>850
          </p>
        </div>

        <div className="max-w-[400px] mx-auto my-5">
          <img
            src="/trendingPlant1.png"
            alt=""
            className="w-[300px] md:w-[350px] mx-auto lg:mx-0"
          />
          <p>&#9733;&#9733;&#9733;&#9733;&#9733;</p>
          <h3 className="font-medium">Tropical Breeze</h3>
          <p className="text-gray-600">Indoor Plants</p>
          <p className="font-medium text-gray-600 text-md">
            <span className="text-lg">₹</span>750
          </p>
        </div>

        <div className="max-w-[400px] mx-auto my-5">
          <img
            src="/trendingPlant3.png"
            alt=""
            className="w-[300px] md:w-[350px] mx-auto lg:mx-0"
          />
          <p>&#9733;&#9733;&#9733;&#9733;&#9734;</p>
          <h3 className="font-medium">Starlight Succulent</h3>
          <p className="text-gray-600">Indoor Plants</p>
          <p className="font-medium text-gray-600 text-md">
            <span className="text-lg">₹</span>920
          </p>
        </div>
      </section>
    </>
  );
}

export default HomeTrendingProducts;
