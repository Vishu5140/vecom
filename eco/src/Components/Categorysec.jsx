import React from 'react';
import MenImage from '../assets/Images/man.jpg';
import WoMenImage from '../assets/Images/womancate.jpg';
import Kids from '../assets/Images/kids.jpg';

const categories = [
  {
    title: "Men",
    imageurl: MenImage
  },
  {
    title: "Women",
    imageurl: WoMenImage
  },
  {
    title: "Kids",
    imageurl: Kids
  }
];

function Categorysec() {
  return (
    <div className="py-10 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {categories.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 transform hover:scale-105 overflow-hidden"
          >
            <img
              src={item.imageurl}
              alt={`${item.title} category`}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
              <p className="text-blue-600 font-medium mt-1 cursor-pointer hover:underline">View All</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categorysec;
