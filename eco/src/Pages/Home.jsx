import React, { useEffect } from 'react';
import Info from '../Components/Info';
import { Categories } from '../assets/Mockdata';
import Ecom from '../assets/Images/ecom.jpg';
import Categorysec from '../Components/Categorysec';
import { setProducts } from '../Redux/ProductSlice';
import { useDispatch,useSelector } from 'react-redux';
import {Data} from'../assets/Mockdata';
import ProductCard from '../Components/ProductCard';
import Shop from './Shop';
function Home() {
  const dispatch=useDispatch();
  const products=useSelector(state=>state.product);
  useEffect(()=>{
    dispatch(setProducts(Data))
  },[])
  return (
    <main className="px-4 py-6 md:px-10 lg:px-20 ">
      {/* Categories Section */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4 text-center md:text-left">SHOP BY CATEGORIES</h2>
        <ul className="flex flex-wrap gap-4 justify-center md:justify-start">
          {Categories.map((item, index) => (
            <li
              key={index}
              className="bg-gray-100 px-4 py-2 rounded-md shadow hover:bg-gray-200 transition"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Hero Section with Text Over Image */}
      <section className="relative w-full h-[500px] mb-10">
        {/* Background Image */}
        <img
          src={Ecom}
          alt="E-Commerce Banner"
          className="w-full h-full object-cover rounded-xl shadow-lg"
        />

        {/* Overlay Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black/50 rounded-xl">
          <p className="text-sm md:text-base">How Is The Josh</p>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Welcome To E-Shop</h1>
          <p className="text-lg md:text-xl mb-2">MIKKIONS+ PRODUCTS</p>
          <button className="mt-4 bg-blue-600 px-6 py-2 rounded hover:bg-blue-700 transition">
            Shop Now
          </button>
        </div>
     
      </section>
      <Info/>
      <Categorysec/>
      <div className='container mx-auto py-12'>
        <h2 className='text-2xl font-bold mb-6 text-center'>Top Products</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6'>
          {
            products.products.slice(0,5).map((product)=>{
              return(
                <div  >
                  <ProductCard key={product.id} product={product} />
                </div>
              )

            })
          }
        </div>
      </div>
      <Shop/>
    </main>
  );
}

export default Home;
