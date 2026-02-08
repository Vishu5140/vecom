import React from 'react';
import { FaShippingFast } from 'react-icons/fa';
import { FaHeadset } from 'react-icons/fa'
import { FaMoneyBillWave } from 'react-icons/fa'
import { FaLock } from 'react-icons/fa'
import { FaTag } from 'react-icons/fa'
function Info() {
  const info = [
    {
      icon: <FaShippingFast className="text-3xl" />,
      title: 'Free Shipping',
      description: 'Get your orders delivered with no extra cost',
    },
    {
      icon: <FaHeadset className="text-3xl" />,
      title: 'Support 24/7',
      description: 'We Are HEre To Assist You AnyTime',
    },
    {
      icon: <FaMoneyBillWave className="text-3xl" />,
      title: '100% Money Back',
      description: 'Full Refund If You Are Not Satisfied',
    },
    {
        icon: <FaLock className="text-3xl" />,
        title: 'Payment Secure',
        description: 'Your Payment Infomartion Is Safe For Us',
      }, 
      {
        icon: <FaTag className="text-3xl" />,
        title: 'Discount',
        description: 'Enjoy The Best Prices On Your Products',
      }, 
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center py-6">
      {info.map((item, index) => (
        <div
          key={index}
          className="w-[200px] h-[200px] text-white rounded-xl  bg-black shadow-md flex flex-col items-center justify-center text-center p-4 hover:shadow-lg transition hover:scale-105"
        >
          {item.icon}
          <h1 className="font-semibold text-lg mt-2 text-red-500">{item.title}</h1>
          <p className="text-sm  mt-1 text-yellow-500">{item.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Info;
