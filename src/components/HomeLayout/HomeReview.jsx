
function HomeReview() {
        return (
          <>
            <section className="max-w-[1280px] mx-auto p-4 mt-15 sm:mt-20 mb-20 flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-8">
              <img
                src="/section4Plant.png"
                alt=""
                className="h-80 sm:h-80 md:h-100 lg:h-120"
              />
              <div className="flex flex-col items-start px-3  gap-4 md:gap-6 mx-auto md:mx-0">
                <h3 className="font-semibold text-xl sm:text-2xl md:text-3xl lg:text-5xl">
                  Your Premier <br /> Destination for All <br /> Green.
                </h3>
                <p className="text-sm md:text-base font-light sm:font-normal text-gray-500 border-b-1 border-b-gray-300 pb-5">
                  At GreenCart, we believe in the transformative
                  power of plants. Whether you’re a seasoned gardener or
                  just starting your green journey, our curated selection
                  of plants will inspire and enrich your living space.
                </p>

                <div className="flex gap-4 items-center mx-auto md:mx-0">
                  <div className="flex flex-col gap-1">
                    <h3 className="text-xl font-medium md:text-2xl">98%</h3>
                    <p className="text-sm text-gray-400 font-light sm:font-normal">
                      Customer Satisfaction
                    </p>
                  </div>

                  <div className="flex flex-col gap-1">
                    <h3 className="text-xl font-medium md:text-2xl">103K</h3>
                    <p className="text-sm text-gray-400 font-light sm:font-normal">
                      Plants Sold
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </>
        );
}

export default HomeReview;