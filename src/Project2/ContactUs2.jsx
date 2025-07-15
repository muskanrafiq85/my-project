// import React from 'react'

// const ContactUs2 = () => {
//   return (
//     <div className='bg-black h-screen rounded-tl-[8rem] rounded-br-[8rem] border my-3'>
//         <div className='flex justify-center pt-6'>
//         <h1 className='font-medium text-3xl text-white'>CONTACT US</h1>
//         </div >
//         <div className='ml-96 pt-16  '>
//         <label htmlFor="" className='text-white font-serif italic'>User Name :</label><br />
//         <input type="text" id='User Name' className='font-serif border-2 border-black w-[39vw] rounded-md p-1 italic outline-none'  placeholder=  'User Name ...' /> <br />
//         <label htmlFor="" className='text-white font-serif italic'>E-Mail :</label><br />
//         <input type="email" id='E-mail' className='font-serif border-2 border-black w-[39vw] p-1 rounded-md italic outline-none'  placeholder=  'E-mail ...' /> <br />
//         <label htmlFor="" className='text-white font-serif italic '>Message :</label><br />
//         <textarea name="" id="" cols="70" rows="5" placeholder='Enter your Message...' className='rounded-md italic p-1 outline-none'></textarea>
//         <div className='flex gap-1 pt-4'>
//         <input type="RESET" value="RESET" className='text-white text-md bg-blue-600 font-serif rounded-md px-4 py-2 italic ' />
//         <input type="submit" value="SUBMIT"  className='text-white text-md bg-red-600 font-serif rounded-md px-4 py-2 italic' />
//         </div>
//         </div>
//     </div>
//   )
// }

// export default ContactUs2


import React from 'react';

const ContactUs2 = () => {
  return (
    <div className='bg-black h-auto mt-20 rounded-tl-[5rem] rounded-br-[5rem] border my-3 px-4 py-6'>
      
      {/* Heading */}
      <div className='flex justify-center pt-4'>
        <h1 className='font-medium text-3xl text-white'>CONTACT US</h1>
      </div>

      {/* Form */}
      <div className='flex justify-center pt-10'>
        <form className='w-full max-w-xl'>
          
          {/* Username */}
          <label className='text-white font-serif italic'>User Name :</label>
          <input
            type="text"
            id='UserName'
            placeholder='User Name ...'
            className='w-full border-2 border-black rounded-md p-2 italic outline-none font-serif mb-4'
          />

          {/* Email */}
          <label className='text-white font-serif italic'>E-Mail :</label>
          <input
            type="email"
            id='Email'
            placeholder='E-mail ...'
            className='w-full border-2 border-black rounded-md p-2 italic outline-none font-serif mb-4'
          />

          {/* Message */}
          <label className='text-white font-serif italic'>Message :</label>
          <textarea
            cols="30"
            rows="5"
            placeholder='Enter your Message...'
            className='w-full border-2 border-black rounded-md p-2 italic outline-none font-serif mb-4'
          ></textarea>

          {/* Buttons */}
          <div className='flex justify-between gap-4 pt-4'>
            <input
              type="reset"
              value="RESET"
              className='text-white text-md bg-blue-600 font-serif rounded-md px-4 py-2 italic cursor-pointer hover:bg-blue-700 transition'
            />
            <input
              type="submit"
              value="SUBMIT"
              className='text-white text-md bg-red-600 font-serif rounded-md px-4 py-2 italic cursor-pointer hover:bg-red-700 transition'
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs2;
