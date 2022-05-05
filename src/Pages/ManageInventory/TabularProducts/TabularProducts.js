import React from 'react';
import { FaTrashAlt } from "react-icons/fa";

const TabularProducts = (props) => {
  const { product, handleRemoveBtn, handleUpdateBtn } = props;
  const { picture, name, price, quantity } = product;
  return (
    <div className='flex items-center justify-between border-2 h-32 border-pink-300 m-5 px-8 py-2'>
      <div className=''>
        <img className='w-1/4 h-1/3' src={picture} alt="" />
      </div>
      <div className='text-2xl font-semibold mx-5'>
        <p>{name}</p>
        <p>{price}</p>
      </div>
      <div className='mx-5 px-2 text-2xl font-semibold'>
        <p>Stock:{quantity}</p>
      </div>
      <button onClick={() => handleUpdateBtn()}
        className='mx-4 bg-green-300 border-2 text-2xl font-semibold px-3 py-2'>
        Update
      </button>
      <button onClick={() => handleRemoveBtn()}
        className='mx-4 text-red-600'>
        <FaTrashAlt className='text-2xl' />
      </button>
    </div>
  );
};

export default TabularProducts;