// import React from 'react'
// import { HiDesktopComputer } from "react-icons/hi";
// import { FaTrophy } from "react-icons/fa6";
// import { FaPen } from "react-icons/fa";

// const Aboutus2 = () => {
//   return (
    
//     <div className='bg-black h-auto my-6 border-r-2' >
//     <h1 className='text-blue-500 text-4xl font-medium mx-auto flex flex-col items-center pt-16'>ABOUT US</h1>
//       {/* main */}
//     <div className='flex justify-around py-32'>
//       {/* div1 */}
//     <div className='flex flex-col items-center '>
//      <HiDesktopComputer className='text-white w-16 h-16 ' />
//      <h1 className='text-white font-medium text-2xl '>Easy to Use</h1>
//      <p className='text-white w-[21vw] pt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit repudiandae, modi culpa harum nostrum delectus.</p>
//      </div>
//      {/* div2 */}
//      <div className='flex flex-col items-center '>
//      <FaTrophy className='text-white w-14 h-14'/>
//      <h1 className='text-white font-medium text-2xl '>Awesome Design</h1>
//      <p className='text-white w-[21vw] pt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit repudiandae, modi culpa harum nostrum delectus.</p>
//      </div>
//      {/* div3 */}
//      <div className='flex flex-col items-center '>
//      <FaPen className='text-white w-14 h-14 flex flex-col mx-auto items-center' />
//      <h1 className='text-white font-medium text-2xl flex flex-col mx-auto items-center'>Easy To Customized</h1>
//      <p className='text-white w-[21vw] pt-2  '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit repudiandae, modi culpa harum nostrum delectus.</p>
//      </div>
//     </div>
    
//     </div>
//   )
// }

// export default Aboutus2

import React from 'react'
import { HiDesktopComputer } from "react-icons/hi";
import { FaTrophy } from "react-icons/fa6";
import { FaPen } from "react-icons/fa";

const Aboutus2 = () => {
  return (
    <div className='bg-black h-[85vh] mt-10 px-4 md:px-8 lg:px-16 py-10 border-t-[5rem]'>
      
      {/* Heading */}
      <h1 className='text-blue-500 text-3xl md:text-4xl font-medium text-center pt-10'>ABOUT US</h1>
      <hr className='w-48 mx-auto flex flex-col mt-3'/>

      {/* Grid Layout */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 py-16 '>

        {/* Box 1 */}
        <div className='flex flex-col items-center text-center max-w-xs mx-auto'>
          <HiDesktopComputer className='text-white w-16 h-16' />
          <h1 className='text-white font-medium text-xl md:text-2xl mt-4'>Easy to Use</h1>
          <p className='text-white pt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit repudiandae, modi culpa harum nostrum delectus.</p>
        </div>

        {/* Box 2 */}
        <div className='flex flex-col items-center text-center max-w-xs mx-auto'>
          <FaTrophy className='text-white w-14 h-14' />
          <h1 className='text-white font-medium text-xl md:text-2xl mt-4'>Awesome Design</h1>
          <p className='text-white pt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit repudiandae, modi culpa harum nostrum delectus.</p>
        </div>

        {/* Box 3 */}
        <div className='flex flex-col items-center text-center max-w-xs mx-auto'>
          <FaPen className='text-white w-14 h-14' />
          <h1 className='text-white font-medium text-xl md:text-2xl mt-4'>Easy To Customize</h1>
          <p className='text-white pt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit repudiandae, modi culpa harum nostrum delectus.</p>
        </div>

      </div>
    </div>
  )
}

export default Aboutus2
