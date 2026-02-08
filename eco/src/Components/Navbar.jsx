import React, { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { FaCartArrowDown } from "react-icons/fa";
import { setSearchTerm } from '../Redux/ProductSlice';

function Navbar() {
  const navigate=useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
 const products = useSelector(state => state.cart.products)
const [search,setsearch]=useState();
const dispatch=useDispatch();


const handlesearch=(e)=>{
 e.preventDefault();
 dispatch(setSearchTerm(search))
 navigate('/filterdata');
}
  return (
    <nav className="bg-gradient-to-r from-white via-slate-100 to-white shadow-md transition-colors duration-300 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold text-gray-800">
          <Link to="/">e-Shop</Link>
        </div>

        {/* Mobile menu toggle */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6">
          <div className="flex space-x-4">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition">Home</Link>
            <Link to="/shop" className="text-gray-700 hover:text-blue-600 transition">Shop</Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition">Contact</Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 transition">About</Link>
          </div>

          <form className="flex items-center space-x-2" onSubmit={handlesearch}>
            <input  onChange={(e)=>setsearch(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              type="text"
              placeholder="Search Product"
            />
            <button className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 transition">
              Search
            </button>
          </form>

          <Link to="/cart" className= " relative text-gray-700 hover:text-blue-600 transition">
            <FaCartArrowDown className='text-lg'/>
            {products.length >0 && (<span className='absolute top-0 text-xs w-3 lefft-3 bg-red-600 rounded-full flex justify-center text-white'>
              {products.length}
            </span>
            )}
          </Link>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-4">
          <div className="flex flex-col space-y-2">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition">Home</Link>
            <Link to="/shop" className="text-gray-700 hover:text-blue-600 transition">Shop</Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition">Contact</Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 transition">About</Link>
          </div>

          <form className="flex items-center space-x-2 pt-2" onSubmit={handlesearch}>
            <input onChange={(e)=>setsearch(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-1 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              type="text"
              placeholder="Search Product"
            />
            <button className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 transition">
              Search
            </button>
          </form>

          <Link to="/cart" className=" relative  text-gray-700 hover:text-blue-600 transition pt-2">
          {products.length >0 && (<span className='absolute top-0 text-xs w-3 lefft-3 bg-red-600 rounded-full flex justify-center text-white'>
              {products.length}
            </span>
            )}
          </Link>
         
        </div>
      )}
     


    </nav>
  );
}

export default Navbar;
