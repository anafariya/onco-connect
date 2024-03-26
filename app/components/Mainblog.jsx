import React from 'react';
import { MdArrowForward } from 'react-icons/md';
function Mainblog() {
  return (
    <div className='flex flex-col lg:flex mb-20 lg:flex-row min-h-[90vh]'> {/* Adjusted for flex-row on lg screens */}
      <div style={{ backgroundColor: '#F6F1E7' }} className="textdiv mb-10 h-80 mt-[100px]  w-full lg:w-1/2 p-10 "> {/* Removed absolute positioning, adjusted width */}
        <h1 className="text-xl py-7 px-5 md:text-xl lg:text-2xl font-semibold">
          Discover how cancer impacts employees at work and what employers can do about it
        </h1>
        <p className='text-lg px-5'>
          Onco-Connect engages both employees to understand the impact of cancer on their work life balance; and employers on how they can help mitigate these issues
        </p>
        <button  style={{ backgroundColor: '#BFDDCB' }}  className=" mb-5 font-semibold w-60 ml-5 mt-7 text-black py-2 px-4 rounded-full hover:bg-blue-700 flex items-center justify-center space-x-2">
      <span>Read All Articles</span> <MdArrowForward/>
    </button>
      </div>
      <div className='imgdiv w-full lg:w-1/2 flex justify-center items-center h-80 lg:h-auto'> {/* Adjusted width and height for responsive design */}
        <img src="main-blog.png" alt="Main blog" className="w-full h-80 object-cover" /> {/* Ensured full coverage */}
      </div>
    </div>
  );
}

export default Mainblog;
