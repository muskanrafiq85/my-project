// import React from 'react'
// import ElonMusk from "../assets/ElonMusk.jpg"
// import VCEO from "../assets/VCEO.jpg"
// import ManagingDirector from "../assets/ManagingDirector.jpg"
// import { FaCamera } from "react-icons/fa";
// import { BiSolidCopy } from "react-icons/bi";
// import { FaComments } from "react-icons/fa6";
// const OurTeam2 = () => {
//   return (
//     <div className='bg-black h-auto rounded-tr-[8rem] rounded-bl-[8rem] border-y-2 border-r-2 my-6 '>
//     <div className=' flex justify-center'>
//         <h1 className='text-3xl text-blue-500 font-medium pt-6  '>OUR TEAM</h1>
//     </div>
//     <div className='flex justify-evenly py-20 items-center'>
//     <div>
//         <img src={ElonMusk} alt="" className='w-32 h-32 object-cover object-center rounded-full border-4 border-double hover:scale-125 transition duration-700'/>
//         <h1 className='text-white text-2xl font-medium pt-8'>ELON MUSK</h1>
//         <h1 className='text-blue-400 text-xl font-medium py-1'>CEO & FOUNDER</h1>
//         <p className='text-yellow-500 text-xl font-medium  '>Web Developer & Programmer</p>
//         <div className='flex gap-x-5 pt-4'>
//         <FaCamera className='text-white w-7 h-7'/>
//         <BiSolidCopy  className='text-white w-7 h-7'/>
//         <FaComments className='text-white w-7 h-7' />
//         </div>
//     </div>
//     <div>
//        <img src={VCEO} alt="" className='w-32 h-32 object-cover object-center rounded-full border-4 border-double hover:scale-125 transition duration-700'/>
//         <h1 className='text-white text-2xl font-medium pt-8'>RAMZAY ALYA</h1>
//         <h1 className='text-blue-400 text-xl font-medium py-1'>VCEO & PLANNER</h1>
//         <p className='text-yellow-500 text-xl font-medium '>IT EXPERT</p>
//         <div className='flex gap-x-5 pt-4'>
//         <FaCamera className='text-white  w-7 h-7'/>
//         <BiSolidCopy  className='text-white w-7 h-7'/>
//         <FaComments className='text-white w-7 h-7' />
//         </div>
//     </div>
//     <div>
//        <img src={ManagingDirector} alt="" className='w-32 h-32 object-cover object-center rounded-full border-4 border-double hover:scale-125 transition duration-700'/>
//         <h1 className='text-white text-2xl font-medium pt-8'>JANIFER OKLA</h1>
//         <h1 className='text-blue-400 text-xl font-medium py-1'>MANAGING DIRECTOR</h1>
//         <p className='text-yellow-500 text-xl font-medium '>WEB DESIGNER</p>
//         <div className='flex gap-x-5 pt-4'>
//         <FaCamera className='text-white  w-7 h-7' />
//         <BiSolidCopy  className='text-white w-7 h-7'/>
//         <FaComments className='text-white w-7 h-7'/>
//         </div>
//     </div>
//     </div>
//     </div>
//   )
// }

// export default OurTeam2


import React from 'react';
import ElonMusk from "../assets/ElonMusk.jpg";
import VCEO from "../assets/VCEO.jpg";
import ManagingDirector from "../assets/ManagingDirector.jpg";
import { FaCamera } from "react-icons/fa";
import { BiSolidCopy } from "react-icons/bi";
import { FaComments } from "react-icons/fa6";

const OurTeam2 = () => {
  return (
    <div className='bg-black h-auto rounded-tr-[8rem] rounded-bl-[8rem] my-40 fixed w-[100vw]  '>
      <div className='flex justify-center'>
        <h1 className='text-3xl text-blue-500 font-medium pt-6'>OUR TEAM</h1>
      </div>

      {/* Responsive Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-6 py-16 place-items-center'>
        
        {/* Team Member 1 */}
        <div className='flex flex-col items-center'>
          <img src={ElonMusk} alt="" className='w-32 h-32 object-cover object-center rounded-full border-4 border-double hover:scale-125 transition duration-700'/>
          <h1 className='text-white text-2xl font-medium pt-8'>ELON MUSK</h1>
          <h1 className='text-blue-400 text-xl font-medium py-1'>CEO & FOUNDER</h1>
          <p className='text-yellow-500 text-xl font-medium'>Web Developer & Programmer</p>
          <div className='flex gap-x-5 pt-4'>
            <FaCamera className='text-white w-7 h-7'/>
            <BiSolidCopy className='text-white w-7 h-7'/>
            <FaComments className='text-white w-7 h-7'/>
          </div>
        </div>

        {/* Team Member 2 */}
        <div className='flex flex-col items-center'>
          <img src={VCEO} alt="" className='w-32 h-32 object-cover object-center rounded-full border-4 border-double hover:scale-125 transition duration-700'/>
          <h1 className='text-white text-2xl font-medium pt-8'>RAMZAY ALYA</h1>
          <h1 className='text-blue-400 text-xl font-medium py-1'>VCEO & PLANNER</h1>
          <p className='text-yellow-500 text-xl font-medium'>IT EXPERT</p>
          <div className='flex gap-x-5 pt-4'>
            <FaCamera className='text-white w-7 h-7'/>
            <BiSolidCopy className='text-white w-7 h-7'/>
            <FaComments className='text-white w-7 h-7'/>
          </div>
        </div>

        {/* Team Member 3 */}
        <div className='flex flex-col items-center'>
          <img src={ManagingDirector} alt="" className='w-32 h-32 object-cover object-center rounded-full border-4 border-double hover:scale-125 transition duration-700'/>
          <h1 className='text-white text-2xl font-medium pt-8'>JANIFER OKLA</h1>
          <h1 className='text-blue-400 text-xl font-medium py-1'>MANAGING DIRECTOR</h1>
          <p className='text-yellow-500 text-xl font-medium'>WEB DESIGNER</p>
          <div className='flex gap-x-5 pt-4'>
            <FaCamera className='text-white w-7 h-7'/>
            <BiSolidCopy className='text-white w-7 h-7'/>
            <FaComments className='text-white w-7 h-7'/>
          </div>
        </div>

      </div>
    </div>
  );
};

export default OurTeam2;
