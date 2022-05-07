import React from 'react';
import { FaTrashAlt } from "react-icons/fa";

const Products = ({ product, handleRemoveItem }) => {
  const { name, picture, quantity, email, price, _id } = product;
  return (
    <div>
      <div className='flex items-center justify-center border-0 sm:h-auto md:h-40 my-5 sm:px-2 md:px-8 py-2'>
        <img className='sm:w-20 md:h-28 sm:h-8' src={picture} alt="" />
        <div className='sm:text-sm md:text-2xl font-semibold mx-2 md:mx-12'>
          <p>{name}</p>
          <p>{price}</p>
        </div>
        <div className='md:mx-5 px-2 sm:text-sm md:text-2xl font-semibold'>
          <p>{email}</p>
          <p>Stock:{quantity}</p>
        </div>
        <button onClick={() => handleRemoveItem(_id)}
          className='md:mx-8 sm:mx-3 text-red-600'>
          <FaTrashAlt className='md:text-3xl sm:text-base' />
        </button>
      </div>
    </div>
  );
};

export default Products;