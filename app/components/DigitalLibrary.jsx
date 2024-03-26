import {React, useState} from 'react';
import Posts from './Posts';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
const libraryCategories = [
  { name: 'Awareness' },
  { name: 'Screening' },
  { name: 'Treatment' },
  { name: 'Nutrition' },
  { name: 'Wellness' },
  { name: 'Employee Engagement' }
];

function DigitalLibrary() {
    const [selectedCategory, setSelectedCategory] = useState('ALL');
  return (
    <div className='text-black'>
      <h1 className='text-center mb-20 font-semibold text-4xl'>Onco-Connect Digital Health Library
</h1>
        <div className='flex justify-around flex-wrap mt-8'>
          {libraryCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(category.name)}
              className={`text-[15px] uppercase tracking-wide font-semibold border-b-2 border-red-300 px-2 `}
            >
              {category.name}
            </button>
          ))}
        </div>
        <form className="max-w-md mx-auto my-20 sm:mx-0 sm:ml-8">   
            <div className="relative">
                <input 
                    type="search"
                    id="default-search"
                    className="block w-full p-4 pl-10 text-sm text-gray-900 bg-gray-100 rounded-lg" 
                    placeholder="Search Categories" 
                    required 
                />
                <button type="submit" className="absolute inset-y-0 right-0 flex items-center pr-3">
                    <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21L16.65 16.65M8.5 11.5C8.5 7.91 11.41 5 15 5s6.5 2.91 6.5 6.5-2.91 6.5-6.5 6.5S8.5 15.09 8.5 11.5z" />
                    </svg>
                </button>
            </div>
        </form>
        <Posts selectedCategory={selectedCategory} />
        <div className="flex justify-end mr-5 space-x-4 my-4">
  <button
    className="p-4 bg-gray-100 shadow-md hover:bg-gray-200"
    aria-label="Previous"
  >
    <MdChevronLeft className="text-black" size="40px" />
  </button>
  <button
    className="p-4 bg-gray-100 shadow-md hover:bg-gray-200"
    aria-label="Next"
  >
    <MdChevronRight className="text-black" size="40px" />
  </button>
</div>

    </div>
  );
}

export default DigitalLibrary;
