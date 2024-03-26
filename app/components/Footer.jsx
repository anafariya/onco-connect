import React from 'react';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import { MdArrowForward, MdEmail } from 'react-icons/md';

function Footer() {
  return (
    <footer className="bg-[#F6F1E7] text-gray-800">
      <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 justify-items-center lg:justify-items-start">
          {/* Logo and Stay Updated Section */}
          <div className="flex flex-col items-center lg:items-start space-y-4">
            <img src="/real-logo.png" alt="Onco Connect Logo" className="h-16" />
            <button className="text-black w-60 bg-[#E99675] hover:bg-[#de8563] rounded-full px-6 py-2 flex items-center space-x-2">
              <span>Stay Updated</span>
              <MdArrowForward className="text-black" size="20px" />
            </button>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            <ul className="space-y-1">
            <li>Solutions</li>
              <li>Insurers</li>
              <li>Terms and Conditions</li>
              <li>Privacy Policy</li>
            </ul>
            <ul className="space-y-1">
              
              <li>Employers</li>
              <li>Digital Library</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* Social and Contact Info */}
          <div className="flex flex-col items-center lg:items-end space-y-4">
            {/* Contact and Location */}
            <div className='flex flex-col'>
            <div className="flex space-x-2 my-2">
                <FaFacebook className="text-2xl" />
                <FaLinkedin className="text-2xl" />
              </div>
            <div>
              <h6 className="font-semibold text-lg">India</h6>
              <p>Awfis Juhu, Mumbai, India</p>
            </div>
            <div>
              <h6 className="font-semibold text-lg">Singapore</h6>
              <p>68 Circular Road, #02 01, Singapore 049422</p>
            </div>
            <div className="flex my-5 items-center">
              <MdEmail className="text-2xl mr-2" />
              <p>hello@onco-connect.com</p>
            </div>
            </div>
          </div>
        </div>

        {/* Book a Demo Button */}
        <div className="flex justify-center mt-6 lg:mt-10">
          <button className="bg-black text-white font-semibold px-6 py-2 rounded-lg">Book A Demo</button>
        </div>

        {/* Copyright */}
        <div className="text-center mt-6 lg:mt-10 text-sm">
          <p>Copyright © 2024 onco-connect.com. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
