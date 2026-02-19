import { Link } from "react-router-dom";
import { Element } from "react-scroll";

function HomeBanner() {
        return (
          <>
            <section
              className="bg-[url(/image1.png)] bg-cover bg-center h-[600px] md:h-[670px] flex flex-col items-center justify-center text-white gap-4 px-3 scroll-smooth"
              name="home-banner"
            >
              <p className="uppercase text-sm md:text-lg lg:text-2xl tracking-widest font-normal text-center">
                Welcome to GreenCart
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold md:font-medium text-center tracking-wide">
                Discover the Beauty of <br /> Nature at Your Fingertips
              </h1>
              <button className="bg-lime-500/90 px-4 py-2 rounded-full cursor-pointer hover:bg-lime-800 duration-500 text-lg mt-5">
                <Link to={"shop"}>Shop Now</Link>
              </button>
            </section>
          </>
        );
}

export default HomeBanner;