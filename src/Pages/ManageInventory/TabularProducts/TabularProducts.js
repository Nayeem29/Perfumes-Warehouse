import React from 'react';
import { FaTrashAlt } from "react-icons/fa";

const TabularProducts = (props) => {
  const { product, handleRemoveBtn, handleUpdateBtn } = props;
  const { picture, name, price, quantity, _id } = product;
  return (
    <div className='flex items-center justify-start border-2 h-40 border-pink-300 m-5 px-8 py-2'>
      <div className=''>
        <img className='w-20 h-28' src={picture} alt="" />
      </div>
      <div className='text-base md:text-2xl font-semibold mx-5'>
        <p>{name}</p>
        <p>{price}</p>
      </div>
      <div className='md:mx-8 px-2 text-base md:text-2xl font-semibold'>
        <p>Stock: {quantity}</p>
      </div>
      <button onClick={() => handleUpdateBtn(_id)}
        className='py-1 px-2 mx-auto block bg-pink-300 text-black sm:text-xl md:text-2xl font-semibold hover:text-white'>UPDATE</button>

      <button onClick={() => handleRemoveBtn(_id)}
        className='ml-auto text-red-600'>
        <FaTrashAlt className='md:text-3xl text-2xl' />
      </button>
    </div>
  );
};

export default TabularProducts;