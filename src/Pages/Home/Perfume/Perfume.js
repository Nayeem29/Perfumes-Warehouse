import React from 'react';

const Perfume = ({ product, handleProductInventory }) => {
  const { about, name, price, supplier, quantity, _id } = product;

  return (
    <div className='border-2 rounded-xl mx-4 relative bg-green-100 mb-5'>
      <img className='w-full h-1/2 rounded-t-lg' src={product.picture} alt="" />
      <div className='text-center mt-3 font-semibold text-xl'>
        <p className='py-2'>{name}</p>
        <p className='py-2'>Price: {price}</p>
        <p className='py-2'>Available: {quantity}</p>
        <p className='py-2'>Supplier: {supplier}</p>
        <p className='py-2 text-sm font-light px-3'>{about.length > 200 ? about.slice(0, 200) + '...' : about}</p>
      </div>
      <button onClick={() => handleProductInventory(_id)}
        className='text-center w-full rounded-b-xl py-3 bg-pink-300 text-black text-2xl font-semibold absolute bottom-0'>DETAILS</button>
    </div>
  );
};

export default Perfume;