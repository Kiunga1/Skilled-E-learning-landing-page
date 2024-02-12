/* eslint-disable react/prop-types */
import React from 'react';

const Card = ({ item }) => {
  return (
    <section className='pt-5'>
      <div className="p-6 bg-white shadow-md rounded-lg relative">
        <img src={item.icon} alt={item.title} className="w-16 h-16 rounded-full mx-auto mb-4 absolute top-0 mt-[-40px]" />
        <h2 className="text-2xl font-extrabold mb-2 pt-10">{item.title}</h2>
        <p className="text-gray-700 mb-4">{item.description}</p>
        <button className=" text-pink-500 hover:text-pink-300 py-3 font-bold text-lg transition-colors duration-300">{item.buttonText}</button>
      </div>
    </section>
  );
};

export default Card;
