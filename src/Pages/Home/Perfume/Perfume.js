import React from 'react';

const Perfume = ({ product }) => {
  console.log(product);
  return (
    <div className='border-2 rounded-xl mx-4 relative h-3/4 bg-green-100'>
      <img className='w-full h-1/2 rounded-t-lg' src={product.picture} alt="" />
      <div className='text-center mt-3 font-semibold text-2x'>
        <p className='py-2'>{product.name}</p>
        <p className='py-2'>Price: ${product.price}</p>
        <p className='py-2'>Avalable: {product.quantity}</p>
        <p className='py-2'>Supplier: {product.supplier}</p>
      </div>
      <button className='text-center w-full rounded-b-2xl py-3 bg-pink-300 text-black text-3xl font-semibold absolute bottom-0'>update for manage</button>
    </div>
  );
};

export default Perfume;