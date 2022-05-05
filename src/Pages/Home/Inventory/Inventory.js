import { jsonEval } from '@firebase/util';
import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const Inventory = () => {
  const { id } = useParams();
  let [product, setProduct] = useState({})
  // console.log(id);
  useEffect(() => {
    const url = `http://localhost:5000/products/${id}`;
    fetch(url)
      .then(res => res.json())
      .then(data => setProduct(data))
  }, [id, product]);
  let { name, picture, price, quantity, supplier, about } = product;
  const handleQuantity = () => {
    // e.preventDefault();
    if (quantity > 0) {
      quantity--;
      product = { quantity };
      const url = `http://localhost:5000/products/${id}`;
      fetch(url, {
        method: 'PUT',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(product)
      })
        .then(res => res.json())
        .then(data => {
          console.log('success', data);
          toast('Processed for delvering');
        })
    } else {
      toast('Not Available right now!');
    }
  }
  return (
    <div className='my-20'>
      <div className='mb-16'>
        <hr className='h-2 w-full mb-8' />
        <div className='grid grid-cols-2 md:grid-cols-3 gap-16 mx-4 mb-5'>
          <div className='my-auto mx-10'>
            <img className='w-full h-1/2 rounded-lg' src={picture} alt="" />
          </div>
          <div className='cols-span-2 mt-3 mx-auto font-semibold text-xl'>
            <p className='py-2 my-3 text-4xl'>{name}</p>
            <hr />
            <p className='py-2 my-3'>Price: {price}</p>
            <hr />
            <p className='py-2 my-3'>Supplier: {supplier}</p>
            <hr />
            <p className='py-2 my-3'>Available: {quantity}</p>
            <button onClick={() => handleQuantity()}
              className='text-center px-10 py-3 my-3 bg-pink-300 text-black text-2xl font-semibold'>
              DELIVERED
            </button>
          </div>
        </div>
        <ToastContainer />
        <div className='ml-12'>
          <p className='text-2xl mt-10 text-pink-700 px-3 py-2'>DESCRIPTION</p>
          <hr className='h-4 w-full mr-12' />
          <p className='py-2 text-lg font-normal px-3 mr-40'>{about}</p>
        </div>
      </div>
    </div>
  );
};

export default Inventory;