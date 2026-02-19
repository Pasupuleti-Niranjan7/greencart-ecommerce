import { RiPlantLine } from "react-icons/ri";
import { IoBagHandle, IoMenu, IoClose } from "react-icons/io5";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuthStore from "./store/authStore";
import { toast } from 'react-toastify';

function Navbar() {
  let [menu, setMenu] = useState(false);
  const { user, logout, loading } = useAuthStore();
  const navigate = useNavigate();

  function updateMenu() {
    setMenu(!menu);
  }

  const handleLogout = async () => {
    setMenu(false);
    await logout();
    toast.info("Logged out successfully");
    navigate("/login");
  };

  return (
    <>
      <header className="shadow-md">
        <section className="h-20 flex justify-between items-center max-w-[1280px] mx-auto px-4 ">
          <div className="flex items-center gap-1 md:gap-3">
            <RiPlantLine className="size-6 sm:size-7 md:size-9 lg:size-10" />
            <h2 className="text-md md:text-lg font-medium uppercase">
              GreenCart
            </h2>
          </div>

          <nav className="hidden md:flex items-center gap-5 font-normal text-base">
            <li className="list-none">
              <Link to="/">Home</Link>
            </li>
            <li className="list-none">
              <Link to={"shop"}>Shop</Link>
            </li>
            <li className="list-none">
              <Link to={"about"}>About</Link>
            </li>
            <li className="list-none">
              <Link to={"contact"}>Contact</Link>
            </li>
            <li className="relative list-none">
              <Link to={"cart"}>
                <IoBagHandle className="size-7" />
              </Link>
            </li>
             {loading ? (
                <li className="list-none ml-4">
                  <div className="w-16 h-8 bg-gray-200 animate-pulse rounded-md"></div>
                </li>
             ) : user ? (
                <li className="list-none flex gap-4 items-center ml-4">
                  <span className="text-sm font-medium">Hi, {user.displayName || 'User'}</span>
                  <Link to="/orders" className="text-sm font-medium hover:text-lime-600 transition">Orders</Link>
                  <button onClick={handleLogout} className="bg-red-400 text-white px-3 py-1 rounded-md text-base hover:bg-red-500 transition">Logout</button>
                </li>
             ) : (
                <li className="list-none ml-4">
                  <Link to="/login" className="bg-lime-300 px-4 py-1.5 rounded-md hover:bg-lime-400 transition">Login</Link>
                </li>
             )}
          </nav>
          <div onClick={updateMenu} className="block md:hidden cursor-pointer">
            {!menu ? <IoMenu size={25} /> : <IoClose size={25} />}
          </div>

          <div
            className={
              menu
                ? "bg-white fixed left-0 top-0 w-[65%] sm:w-[50%] border-r border-r-gray-200 h-full  md:hidden gap-4 font-medium text-lg duration-700 z-50"
                : "fixed top-0 left-[-100%] w-[40%] h-full ease-in duration-700 z-50"
            }
          >
            <div className="flex items-center gap-1 md:gap-3 m-4 ">
              <RiPlantLine className="size-7 md:size-9 lg:size-10" />
              <h2 className="text-lg md:text-xl lg:text-2xl font-medium uppercase">
                GreenCart
              </h2>
            </div>
            <nav className="p-4 flex flex-col gap-3">
              <li className=" p-4 list-none border-b border-b-gray-300">
                <Link to="/" onClick={() => setMenu(false)}>Home</Link>
              </li>
              <li className="p-4 list-none border-b border-b-gray-300">
                <Link to={"shop"} onClick={() => setMenu(false)}>Shop</Link>
              </li>
              <li className=" p-4 list-none border-b border-b-gray-200">
                <Link to={"about"} onClick={() => setMenu(false)}>About</Link>
              </li>
              <li className=" p-4 list-none border-b border-b-gray-200">
                {" "}
                <Link to={"contact"} onClick={() => setMenu(false)}>Contact</Link>
              </li>
              <li className="p-4 list-none border-b border-b-gray-200">
                <Link to={"cart"} onClick={() => setMenu(false)}>Cart</Link>
              </li>
              {user ? (
                <>
                  <li className="p-4 list-none border-b border-b-gray-200">
                      Hi, {user.displayName || 'User'}
                  </li>
                  <li className="p-4 list-none border-b border-b-gray-200">
                    <Link to="/orders" onClick={() => setMenu(false)}>My Orders</Link>
                  </li>
                  <li className="p-4 list-none">
                    <button onClick={handleLogout} className="text-red-500 font-bold">Logout</button>
                  </li>
                </>
              ) : (
                <li className="p-4 list-none">
                   <Link to="/login" className="text-lime-600 font-bold" onClick={() => setMenu(false)}>Login</Link>
                </li>
              )}
            </nav>
          </div>
        </section>
      </header>
    </>
  );
}

export default Navbar;
