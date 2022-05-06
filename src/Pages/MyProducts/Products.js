import React from 'react';
import { FaTrashAlt } from "react-icons/fa";

const Products = ({ product, handleRemoveItem }) => {
  const { name, picture, quantity, email, price, _id } = product;
  return (
    <div>
      <div className='flex items-center justify-center border-0 h-40 my-5 px-8 py-2'>
        <div className=''>
          <img className='w-20 md:h-28 h-16' src={picture} alt="" />
        </div>
        <div className='text-sm md:text-2xl font-semibold mx-2 md:mx-12'>
          <p>{name}</p>
          <p>{price}</p>
        </div>
        <div className='md:mx-5 px-2 text-sm md:text-2xl font-semibold'>
          <p>{email}</p>
          <p>Stock:{quantity}</p>
        </div>
        <button onClick={() => handleRemoveItem(_id)}
          className='md:mx-8 mx-3 text-red-600'>
          <FaTrashAlt className='md:text-3xl text-base' />
        </button>
      </div>
    </div>
  );
};

export default Products;