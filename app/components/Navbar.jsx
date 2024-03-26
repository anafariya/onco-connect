import React, { useState } from 'react'
import Logo from './Logo';
import { MdMenu, MdClose } from 'react-icons/md';

const Navbar = () => {
    let Links =[
      {name:"Home",link:"/"},
      {name:"Solutions",link:"/"},
      {name:"Insurers",link:"/"},
      {name:"Employers",link:"/"},
      {name:"Digital Library",link:"/"},
      {name:"Contact Us",link:"/"},
    ];
    let [open,setOpen]=useState(false);
  return (
    <div className='shadow-md w-full sticky top-0 left-0'>
      <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
      <div className='font-semibold italic text-2xl cursor-pointer flex items-center
      text-gray-800'>
        <span className='text-3xl text-indigo-600 pt-2'>
        </span>
        <Logo/>
      </div>
      
      <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
      {open ? <MdClose color='black' size="30"/>:<MdMenu color='black' size="30"/>}
      </div>

      <ul className={`mr-40 md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
        {
          Links.map((link)=>(
            <li key={link.name} className='md:ml-8 text-lg md:my-0 my-7'>
              <a href={link.link} className='text-gray-800 hover:text-gray-400 duration-500'>{link.name}</a>
            </li>
          ))
        }
      
      </ul>
      </div>
    </div>
  )
}

export default Navbar