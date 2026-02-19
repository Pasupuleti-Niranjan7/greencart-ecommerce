
let AboutUsSection = () => {
        return (
          <>
            <section className="max-w-[1280px] mx-auto p-4 mt-15 sm:mt-20 mb-20 flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-8">
              <img
                src="/section4Plant.png"
                alt=""
                className="h-80 sm:h-80 md:h-100 lg:h-120"
              />
              <div className="flex flex-col items-start px-3  gap-4 sm:mt-10 md:gap-6 mx-auto md:mx-0">
                <h3 className="font-semibold text-xl sm:text-2xl md:text-3xl lg:text-5xl">
                  We strive to provide our customers with the highest quality
                </h3>
                <p className="text-sm md:text-base font-light sm:font-normal text-gray-500 border-b-1 border-b-gray-300 pb-5">
                  GreenCart was founded in 1960 by a group of plant
                  enthusiasts who recognized the positive impact that plants can
                  have on our lives. Whether it’s purifying the air, reducing
                  stress, or simply adding a touch of beauty to your
                  environment, plants are more than just decoration—they’re a
                  lifestyle.
                </p>

                <div className="flex gap-1 flex-col sm:flex-row items-start md:mx-0">
                  <img
                    src="/image.png"
                    alt=""
                    className="h-15 w-15 rounded-full"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">Niranjan</h3>
                    <p className="text-sm text-gray-600">
                      CEO & Co-founder @ Company
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </>
        );
}

export default AboutUsSection