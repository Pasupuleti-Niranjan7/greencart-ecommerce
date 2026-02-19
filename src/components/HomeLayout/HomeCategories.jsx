
function HomeCategories() {
        return (
          <>
            <h2 className="text-center font-semibold text-3xl md:text-4xl">
              Our Categories
            </h2>
            <section className="mt-7 md:mt-10 mb-15 max-w-[1280px] mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="flex flex-col items-center">
                <img src="/categoryPlant1.png" alt="" className="max-h-60" />
                <h4 className="font-semibold text-xl md:text-2xl lg:text-3xl">
                  Houseplants
                </h4>
              </div>

              <div className="flex flex-col items-center">
                <img src="/categoryPlant2.png" alt="" className="max-h-60" />
                <h4 className="font-semibold text-xl md:text-2xl lg:text-3xl">
                  Outdoor Plants
                </h4>
              </div>

              <div className="flex flex-col items-center">
                <img src="/categoryPlant3.png" alt="" className="max-h-60" />
                <h4 className="font-semibold text-xl md:text-2xl lg:text-3xl">
                  Succulents
                </h4>
              </div>

              <div className="flex flex-col items-center">
                <img src="/categoryPlant4.png" alt="" className="max-h-60" />
                <h4 className="font-semibold text-xl md:text-2xl lg:text-3xl">
                  Desert Bloom
                </h4>
              </div>
            </section>
          </>
        );
}

export default HomeCategories;