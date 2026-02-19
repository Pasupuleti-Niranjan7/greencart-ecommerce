import { RiPlantLine } from "react-icons/ri";
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className=" max-w-[1280px] mx-auto px-4 py-5">
        <section className="flex flex-col md:flex-row items-center justify-between gap-5 md:gap-0 pb-6 border-b-1 border-b-gray-300">
          <section className="flex items-center gap-1">
            <RiPlantLine className="size-6 sm:size-7 md:size-9 lg:size-10" />
            <h2 className="text-md md:text-lg font-medium uppercase">
              GreenCart
            </h2>
          </section>

          <section className="text-[1.1rem] flex gap-5 flex-row">
            <Link
              to="/"
              className="list-none text-gray-800 hover:text-lime-700 cursor-pointer"
            >
              Home
            </Link>
            <Link
              to="/shop"
              className="list-none text-gray-800 hover:text-lime-700 cursor-pointer duration-500"
            >
              Shop
            </Link>
            <Link
              to="/about"
              className="list-none text-gray-800 hover:text-lime-700 cursor-pointer duration-500"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="list-none text-gray-800 hover:text-lime-700 cursor-pointer duration-500"
            >
              Contact
            </Link>
          </section>

          <section className="flex gap-6">
            <a
              href="https://www.linkedin.com/in/niranjan-p-520663319/"
              target="_blank"
            >
              <FaLinkedin
                size={20}
                className="hover:text-lime-700 duration-500 text-gray-800 cursor-pointer"
              />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100086468143726"
              target="_blank"
            >
              <FaFacebook
                size={20}
                className="hover:text-lime-700 duration-500 text-gray-800 cursor-pointer"
              />
            </a>
            <a
              href="https://www.instagram.com/ronaldo7_universe/"
              target="_blank"
            >
              <FaInstagram
                size={20}
                className="hover:text-lime-700 duration-500 cursor-pointer"
              />
            </a>

            <a
              href="https://www.youtube.com/@cristiano_galaxy_7483"
              target="_blank"
            >
              <FaYoutube
                size={20}
                className="hover:text-lime-700 duration-500 cursor-pointer text-gray-800"
              />
            </a>

            <a href="https://x.com/Niranjan7cr" target="_blank">
              <FaXTwitter
                size={20}
                className="hover:text-lime-700 duration-500 cursor-pointer text-gray-800"
              />
            </a>
          </section>
        </section>

        <section className="py-5 mx-auto flex items-center justify-center md:pl-25">
          <h3 className="text-gray-700 text-center text-sm md:text-ba se">
            Copyright © 2026 GreenCart.
          </h3>
        </section>
      </footer>
    </>
  );
}

export default Footer;
