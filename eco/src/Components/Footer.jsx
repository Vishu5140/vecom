import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook,  FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";


function Footer() {
  return (
    <footer className='bg-gray-800 text-white py-8 px-4 md:px-16 lg:px-24'>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>

        {/* Brand Info */}
        <div>
          <h3 className='text-xl font-semibold'>e-Shop</h3>
          <p className='mt-4'>Your one-stop shop for all your needs. Shop with us and experience the best online shopping experience.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className='text-lg font-semibold'>Quick Links</h4>
          <ul className='mt-4 space-y-2'>
            <li><Link to='/' className='hover:underline'>Home</Link></li>
            <li><Link to='/shop' className='hover:underline'>Shop</Link></li>
            <li><Link to='/contact' className='hover:underline'>Contact</Link></li>
            <li><Link to='/about' className='hover:underline'>About</Link></li>
          </ul>
        </div>

        {/* Social and Subscribe */}
        <div>
          <h4 className='text-lg font-semibold'>Follow Us</h4>
          <div className='flex space-x-4 mt-4'>
            <a href='https://facebook.com' target="_blank" rel="noopener noreferrer" className='hover:text-gray-400'><FaFacebook /></a>
            <a href='https://twitter.com' target="_blank" rel="noopener noreferrer" className='hover:text-gray-400'><FaXTwitter /></a>
            <a href='https://linkedin.com' target="_blank" rel="noopener noreferrer" className='hover:text-gray-400'><FaLinkedin /></a>
            <a href='https://instagram.com' target="_blank" rel="noopener noreferrer" className='hover:text-gray-400'><FaInstagramSquare /></a>
          </div>
          <form className='flex items-center mt-8'>
            <input type='email' placeholder='Your Email' className='p-2 rounded-l-lg bg-gray-800 border border-gray-600' />
            <button className='bg-red-600 text-white px-4 py-2 rounded-r-lg'>Subscribe</button>
          </form>
        </div>

      </div>
      <hr className='mt-2'/>
      <div className='flex items-center justify-between' >
        <div>
     <p>@ 2025 e-Shop. All rights Reserved.</p>
        </div>
        <div className='flex items-center justify-between gap-3' >
         <div><a href="" className='hover:underline'>Privacy Policy</a></div>
         <div><a href="" className='hover:underline'>Terms Of Service</a></div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
