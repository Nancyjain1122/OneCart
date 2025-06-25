import React from 'react';
import logo from '../assets/vcart-logo.png';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

function Footer() {
  return (
    <footer className='w-full bg-[#dbfcfcec] text-[#1e2223] px-6 md:px-12 pt-10 pb-6'>
      <div className='w-full flex flex-col md:flex-row justify-between gap-10'>

        
        <div className='md:w-[30%] w-full'>
          <div className='flex items-center gap-2 mb-4'>
            <img src={logo} alt="logo" className='w-[40px] h-[40px]' />
            <p className='text-xl font-bold'>OneCart</p>
          </div>
          <p className='text-sm md:block hidden leading-relaxed'>
            OneCart is your all-in-one online shopping destination, offering top-quality products, unbeatable deals, and fast delivery—all backed by trusted service.
          </p>
          <p className='text-sm md:hidden'>
            Fast. Easy. Reliable. OneCart Shopping.
          </p>
        </div>

      
        <div className='md:w-[20%] w-full'>
          <p className='text-lg font-semibold mb-2'>COMPANY</p>
          <ul className='space-y-2 text-sm'>
            <li className='hover:underline cursor-pointer'>Home</li>
            <li className='hover:underline cursor-pointer'>About</li>
            <li className='hover:underline cursor-pointer'>Delivery</li>
            <li className='hover:underline cursor-pointer'>Privacy Policy</li>
          </ul>
        </div>

        <div className='md:w-[20%] w-full'>
          <p className='text-lg font-semibold mb-2'>GET IN TOUCH</p>
          <ul className='space-y-2 text-sm'>
            <li>Phone: +91 9876543210</li>
            <li>Email: support@onecart.com</li>
            <li className='hover:underline cursor-pointer'>Help Center</li>
          </ul>
        </div>

        <div className='md:w-[20%] w-full'>
          <p className='text-lg font-semibold mb-2'>FOLLOW US</p>
          <div className='flex gap-4 text-xl'>
            <a href="#" className='hover:text-blue-600 transition'><FaFacebookF /></a>
            <a href="#" className='hover:text-pink-500 transition'><FaInstagram /></a>
            <a href="#" className='hover:text-sky-500 transition'><FaTwitter /></a>
            <a href="#" className='hover:text-red-600 transition'><FaYoutube /></a>
          </div>
        </div>
      </div>

    
      <div className='w-full text-center text-sm border-t border-gray-300 mt-8 pt-4'>
        © {new Date().getFullYear()} OneCart. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
