// import React from 'react'

// const BestServices = () => {
//   return (
//     <div className='bg-black h-screen rounded-tl-[8rem] rounded-br-[8rem] border-y-[10px] border-r-4 my-3'>
        
//         <h1 className='text-blue-600 text-3xl font-medium mx-auto flex flex-col items-center py-4'>BEST SERVICES</h1>
        
//         <div className='flex gap-6 mt-14 ml-44 '>
//         {/* div1 */}
//         <div className='w-80 h-72 hover:scale-110 transition duration-500 '>
//             <h1 className='font-serif font-bold text-2xl text-black py-5 mx-auto flex flex-col items-center bg-gray-200 rounded-t-md border-b-2'>BASIC</h1>
            
//              <div className='bg-white mx-auto items-center flex flex-col py-5  '>
//             <p>$<span className='text-4xl'>20</span> <sub className='font-bold'>/month</sub></p>
//             <ul className='flex flex-col gap-y-1  pt-4 ' >
//                 <li>Responsive Website</li>
//                 <li>Free Name</li>
//                 <li>Mobile Friendly</li>
//                 <li>Webmail Free</li>
//                 <li>Customer Support</li>
//             </ul>
            
//            </div>
//            <div className='bg-gray-200 py-5 mx-auto flex flex-col items-center rounded-b-md border-t-2'>
//            <button className='bg-green-600 text-white px-4 py-2 rounded'>Purchase</button>
//            </div>
//         </div>
//         {/* div2 */}
//          <div className='w-80 h-72 hover:scale-110 transition duration-500'>
//             <h1 className='font-serif font-bold text-2xl text-yellow-400 py-5 mx-auto flex flex-col items-center bg-gray-200 rounded-t-md border-b-2'>STANDARD</h1>
            
//              <div className='bg-white mx-auto items-center flex flex-col py-5  '>
//             <p>$<span className='text-4xl text-yellow-400'>40</span> <sub className='font-bold'>/month</sub></p>
//             <ul className='flex flex-col gap-y-1 pt-4 ' >
//                 <li>Responsive Website</li>
//                 <li>Free Name</li>
//                 <li>Mobile Friendly</li>
//                 <li>Webmail Free</li>
//                 <li>Customer Support</li>
//             </ul>
            
//            </div>
//            <div className='bg-gray-200 py-5 mx-auto flex flex-col items-center rounded-b-md border-t-2'>
//            <button className='bg-green-600 text-white px-4 py-2 rounded'>Purchase</button>
//            </div>
//         </div>
//            {/* div3 */}
//          <div className='w-80 h-72 hover:scale-110 transition duration-500  '>
//             <h1 className='font-serif font-bold text-2xl text-black py-5 mx-auto flex flex-col items-center bg-gray-200 rounded-t-md border-b-2'>UNLIMITED</h1>
            
//              <div className='bg-white mx-auto items-center flex flex-col py-5  '>
//             <p>$<span className='text-4xl '>60</span> <sub className='font-bold'>/month</sub></p>
//             <ul className='flex flex-col gap-y-1  pt-4 ' >
//                 <li>Responsive Website</li>
//                 <li>Free Name</li>
//                 <li>Mobile Friendly</li>
//                 <li>Webmail Free</li>
//                 <li>Customer Support</li>
//             </ul>
            
//            </div>
//            <div className='bg-gray-200 py-5 mx-auto flex flex-col items-center rounded-b-md border-t-2'>
//            <button className='bg-green-600 text-white px-4 py-2 rounded'>Purchase</button>
//            </div>
//         </div>
//         </div>
//    </div>
//   )
// }

// export default BestServices



import React from 'react';

const BestServices = () => {
  return (
    <div className='bg-black h-auto mt-20 rounded-tl-[8rem] rounded-br-[8rem] border-y-[10px] border-r-4 my-3 px-4 sm:px-8'>
      
      <h1 className='text-blue-600 text-3xl font-medium text-center py-4'>BEST SERVICES</h1>
      <hr className='w-52 mx-auto flex flex-col'/>
      
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center py-10'>

        {/* BASIC */}
        <div className='w-full max-w-xs hover:scale-110 transition duration-500'>
          <h1 className='font-serif font-bold text-2xl text-black py-5 bg-gray-200 rounded-t-md border-b-2 text-center'>BASIC</h1>
          <div className='bg-white flex flex-col items-center py-5'>
            <p>$<span className='text-4xl'>20</span> <sub className='font-bold'>/month</sub></p>
            <ul className='flex flex-col gap-y-1 pt-4'>
              <li>Responsive Website</li>
              <li>Free Name</li>
              <li>Mobile Friendly</li>
              <li>Webmail Free</li>
              <li>Customer Support</li>
            </ul>
          </div>
          <div className='bg-gray-200 py-5 flex justify-center rounded-b-md border-t-2'>
            <button className='bg-green-600 text-white px-4 py-2 rounded'>Purchase</button>
          </div>
        </div>

        {/* STANDARD */}
        <div className='w-full max-w-xs hover:scale-110 transition duration-500'>
          <h1 className='font-serif font-bold text-2xl text-yellow-400 py-5 bg-gray-200 rounded-t-md border-b-2 text-center'>STANDARD</h1>
          <div className='bg-white flex flex-col items-center py-5'>
            <p>$<span className='text-4xl text-yellow-400'>40</span> <sub className='font-bold'>/month</sub></p>
            <ul className='flex flex-col gap-y-1 pt-4'>
              <li>Responsive Website</li>
              <li>Free Name</li>
              <li>Mobile Friendly</li>
              <li>Webmail Free</li>
              <li>Customer Support</li>
            </ul>
          </div>
          <div className='bg-gray-200 py-5 flex justify-center rounded-b-md border-t-2'>
            <button className='bg-green-600 text-white px-4 py-2 rounded'>Purchase</button>
          </div>
        </div>

        {/* UNLIMITED */}
        <div className='w-full max-w-xs hover:scale-110 transition duration-500 md:pb-8 '>
          <h1 className='font-serif font-bold text-2xl text-black py-5 bg-gray-200 rounded-t-md border-b-2 text-center'>UNLIMITED</h1>
          <div className='bg-white flex flex-col items-center py-5'>
            <p>$<span className='text-4xl'>60</span> <sub className='font-bold'>/month</sub></p>
            <ul className='flex flex-col gap-y-1 pt-4'>
              <li>Responsive Website</li>
              <li>Free Name</li>
              <li>Mobile Friendly</li>
              <li>Webmail Free</li>
              <li>Customer Support</li>
            </ul>
          </div>
          <div className='bg-gray-200 py-5 flex justify-center rounded-b-md border-t-2'>
            <button className='bg-green-600 text-white px-4 py-2 rounded'>Purchase</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default BestServices;
