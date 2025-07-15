// import React from 'react'
// import shopping from "../assets/shopping.jpg"
// import shoppingimg from "../assets/shoppingimg.jpg"
// import mall from "../assets/mall.jpg"
// import ElonMusk from "../assets/ElonMusk.jpg"
// import VCEO from "../assets/VCEO.jpg"
// import ManagingDirector from "../assets/ManagingDirector.jpg"
// const Footer2 = () => {
//   return (
//     < div className='bg-black h-auto rounded-tr-[8rem] rounded-bl-[8rem] border-t-2 border-b-2 my-3 ' >
//         <div className='flex justify-around py-20'>
//          <div>
//         <h1 className='text-4xl text-blue-600 font-medium italic '>MUSKAN RAFIQ</h1>
//         <p className='text-white w-[30vw] pt-4 text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi repellat excepturi, tempora facilis aspernatur quasi voluptate sequi! Dignissimos, ullam itaque odio voluptates maiores placeat eaque, minima possimus quasi iste et. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit. Voluptatibus!</p>
//         </div>
//         <div>
//         <h1 className='text-4xl text-blue-600 font-medium italic pb-12 '>CONTENT</h1>
//         <ul className='text-white mx-auto flex flex-col items-center gap-y-2'>
//             <li>Home</li>
//             <li>About Us</li>
//             <li>Services</li>
//             <li>Our Team</li>
//             <li>Contact Us</li>
//         </ul>
//             </div>
//         <div>
//         <div className='flex gap-3  '>
//         <img src={shopping} alt="" className='w-24 h-24 border' />
//         <img src={shoppingimg} alt="" className='w-24 h-24 border' />
//         <img src={mall} alt="" className='w-24 h-24 border'/>
//         </div>
//         <div className='flex gap-3 pt-2 '>
//         <img src={ElonMusk} alt=""className='w-24 h-24 border' />
//         <img src={VCEO} alt="" className='w-24 h-24 border'/>
//         <img src={ManagingDirector} alt="" className='w-24 h-24 border' />
//         </div>
//         </div>
//          </div>
//         <p className='text-white text-sm font-serif mx-auto flex flex-col items-center pb-5'><i>Copyright © 2023 All Rights Reserved.Design By <span className='border-b-2 border-blue-400 text-blue-400 '> Muskan</span></i></p>
//     </div>
//   )
// }

// export default Footer2


import React from 'react';
import shopping from "../assets/shopping.jpg";
import shoppingimg from "../assets/shoppingimg.jpg";
import mall from "../assets/mall.jpg";
import ElonMusk from "../assets/ElonMusk.jpg";
import VCEO from "../assets/VCEO.jpg";
import ManagingDirector from "../assets/ManagingDirector.jpg";

const Footer2 = () => {
  return (
    <div className='bg-black h-auto rounded-tr-[8rem] rounded-bl-[8rem]  my-36 fixed w-[100vw] '>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-6  py-14  '>

        {/* Logo & About */}
        <div>
          <h1 className='text-3xl md:text-4xl text-blue-600 font-medium italic'>MUSKAN RAFIQ</h1>
          <p className='text-white pt-4 text-sm leading-relaxed text-justify'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi repellat excepturi, tempora facilis aspernatur quasi voluptate sequi! Dignissimos, ullam itaque odio voluptates maiores placeat eaque, minima possimus quasi iste et. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit. Voluptatibus!
          </p>
        </div>

        {/* Content Links */}
        <div className='flex flex-col items-center pt-4 '>
          <h1 className='text-3xl md:text-4xl text-blue-600 font-medium italic pb-6'>CONTENT</h1>
          <ul className='text-white flex flex-col gap-y-2 text-base '>
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Our Team</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Images */}
        <div className='flex flex-col gap-y-4 mt-5'>
          <div className='flex justify-center md:justify-start gap-3'>
            <img src={shopping} alt="" className='w-20 h-20 sm:w-24 sm:h-24 border' />
            <img src={shoppingimg} alt="" className='w-20 h-20 sm:w-24 sm:h-24 border' />
            <img src={mall} alt="" className='w-20 h-20 sm:w-24 sm:h-24 border' />
          </div>
          <div className='flex justify-center md:justify-start gap-3'>
            <img src={ElonMusk} alt="" className='w-20 h-20 sm:w-24 sm:h-24 border' />
            <img src={VCEO} alt="" className='w-20 h-20 sm:w-24 sm:h-24 border' />
            <img src={ManagingDirector} alt="" className='w-20 h-20 sm:w-24 sm:h-24 border' />
          </div>
        </div>
      </div>

      {/* Copyright */}
      <p className='text-white text-sm font-serif text-center pb-8'>
        <i>
          Copyright © 2023 All Rights Reserved. Design By{" "}
          <span className='border-b-2 border-blue-400 text-blue-400'>Muskan</span>
        </i>
      </p>
    </div>
  );
};

export default Footer2;
