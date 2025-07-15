// import React from 'react'
// import {Link} from "react-router-dom"

// const Nbar = () => {
//   return (
//       <div className='flex justify-around items-center bg-gradient-to-r from-purple-700 to-pink-600 h-20'>
//         <h1 className='text-yellow-500 text-3xl font-medium mb-2 md:mb-0'><i>MUSKAN RAFIQ</i></h1>
//         <div className="flex gap-x-8 text-lg items-center text-white ">
//           <Link to={"/"}>Home</Link>
//           <Link to={"/about"}>About us</Link>
//           <Link to={"/services"}>Services</Link>
//           <Link to={"/team"}>Our Team</Link>
//           <Link to={"/footer"}>Footer</Link>
//           <Link to={"/contact"}><button className="border-2 px-5 py-1 bg-[#45BFE3] rounded-md">Contact Us</button></Link>
//         </div>
//     </div>
//   )
// }

// export default Nbar



import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

const Nbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='bg-gradient-to-r from-purple-700 to-pink-600 fixed w-[100vw] z-50 top-0 '>
      <div className='flex justify-between items-center h-20 px-6 md:px-12 '>
        <h1 className='text-yellow-500 text-2xl font-medium'>
          <i>MUSKAN RAFIQ</i>
        </h1>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-x-8 text-lg items-center text-white">
          <Link to={"/"}>Home</Link>
          <Link to={"/about"}>About us</Link>
          <Link to={"/services"}>Services</Link>
          <Link to={"/team"}>Our Team</Link>
          <Link to={"/footer"}>Footer</Link>
          <Link to={"/contact"}>
            <button className="border-2 px-5 py-1 bg-[#45BFE3] rounded-md">
              Contact Us
            </button>
          </Link>
        </div>

        {/* Hamburger Button */}
        <div className="md:hidden text-white text-3xl" onClick={toggleMenu}>
          {menuOpen ? <HiX /> : <HiMenu />}
        </div>
      </div>

      {/* Mobile Links */}
      {menuOpen && (
        <div className="flex flex-col gap-y-4 text-lg items-center text-white pb-4 md:hidden">
          <Link to={"/"} onClick={toggleMenu}>Home</Link>
          <Link to={"/about"} onClick={toggleMenu}>About us</Link>
          <Link to={"/services"} onClick={toggleMenu}>Services</Link>
          <Link to={"/team"} onClick={toggleMenu}>Our Team</Link>
          <Link to={"/footer"} onClick={toggleMenu}>Footer</Link>
          <Link to={"/contact"} onClick={toggleMenu}>
            <button className="border-2 px-5 py-1 bg-[#45BFE3] rounded-md">
              Contact Us
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Nbar;
