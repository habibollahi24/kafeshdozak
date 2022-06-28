import React from "react";
import { NavLink, Link } from "react-router-dom";
// import logo from "../assets/images/shoelogo.png";
// import logo from "../assets/images/ladylogo.png";
import logo from "../assets/images/Tattoo of Ladybug, Luck, Love tattoo.png";
import { HiHome, HiLibrary, HiShoppingCart, HiMenuAlt2 } from "react-icons/hi";
import { FaHouseUser } from "react-icons/fa";

import { useCart } from "../context/cart/CartContext";
import { totalCartCount } from "../utility/reducerFunc";
import { useAuth } from "../context/Auth/AuthContext";

const navs = [
  {
    name: "Home",
    icon: <HiHome />,
    to: "/",
  },
  {
    name: "Blogs",
    icon: <HiLibrary />,
    to: "/blogs",
  },
];

const Navigation = () => {
  const {
    state: { cart },
  } = useCart();

  const { auth } = useAuth();

  return (
    <section className="shadow-sm bg-white sticky top-0 z-10">
      <header className="flex justify-between  items-center container mx-auto max-w-screen-xl p-2  text-gray-600 text-lg">
        <div className="md:hidden text-6xl ">
          <HiMenuAlt2 />
        </div>
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            {navs.map((nav) => {
              const { icon, name, to } = nav;
              return (
                <li className="relative " key={name}>
                  <NavLink className={(navData) => (navData.isActive ? "nav-link  activeLink" : "nav-link")} to={to}>
                    <span className="mr-2">{name}</span>
                    <div className="text-base mt-1">{icon}</div>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="flex items-center  gap-x-6 md:gap-x-12">
          <div className="flex items-end  gap-x-8 md:gap-x-12 ">
            <div className="relative ">
              <Link className="inline-block text-2xl" to="/cart">
                <HiShoppingCart />
                <div className=" bg-primary text-white rounded-full w-5 h-5 flex justify-center items-center  font-semibold absolute text-sm  bottom-5 left-4">
                  {totalCartCount(cart)}
                </div>
              </Link>
            </div>
            <div className="">
              <Link
                className="bg-gray-400 p-2 text-base inline-block rounded-full text-pencil font-semibold"
                to={auth ? "/profile" : "/signup"}
              >
                {auth ? (
                  <div className="text-xl text-white ">
                    <FaHouseUser />
                  </div>
                ) : (
                  "Signup/Login"
                )}
              </Link>
            </div>
          </div>
          <div className=" flex flex-col justify-center ">
            <img src={logo} alt="logo" className="object-fill w-14 mx-auto opacity-80 " />
            <span className="text-gray-700 font-semibold text-sm -mt-1">کفشدوزک</span>
          </div>
        </div>
      </header>
    </section>
  );
};

export default Navigation;
