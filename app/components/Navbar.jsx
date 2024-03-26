import React, { useState } from 'react';
import Logo from './Logo'; // Ensure you have the Logo component correctly imported
import { MdMenu, MdClose } from 'react-icons/md';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const Links = [
    { name: "Home", link: "/" },
    { name: "Solutions", link: "/solutions" },
    { name: "Insurers", link: "/insurers" },
    { name: "Employers", link: "/employers" },
    { name: "Digital Library", link: "/digital-library" },
    { name: "Contact Us", link: "/contact-us" },
  ];

  return (
    <nav className='shadow-md w-full fixed top-0 left-0 z-50 bg-white'>
      <div className='flex items-center justify-between py-4 px-7 md:px-10'>
        <div className='flex items-center font-semibold text-2xl text-gray-800 cursor-pointer'>
          {/* Assume Logo is a component that returns an image or svg */}
          <Logo />
        </div>

        {/* Mobile menu toggle */}
        <div onClick={() => setOpen(!open)} className='text-3xl cursor-pointer md:hidden'>
          {open ? <MdClose size="30"/> : <MdMenu size="30"/>}
        </div>

        {/* Navigation links */}
        <ul className={`absolute md:static w-full md:flex md:items-center transition-all duration-500 ease-in ${open ? 'top-20' : 'top-[-490px]'} md:z-auto left-0 md:pl-0 pl-9 bg-white`}>
          {Links.map((link, index) => (
            <li key={index} className='md:ml-8 text-xl my-7 md:my-0'>
              <a href={link.link} className='text-gray-800 hover:text-gray-400 duration-500'>{link.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
