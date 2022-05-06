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

  const handleStockQuantity = (quantity) => {
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

      })
  }
  const handleQuantity = () => {
    // e.preventDefault();
    if (quantity > 0) {
      quantity--;
      handleStockQuantity(quantity);
      toast('Product is Delivering!!');
    } else {
      toast('Not Available right now!!');
    }
  }
  const handleStockForm = (e) => {
    e.preventDefault();
    const stock = e.target.stock.value;
    quantity = parseInt(stock) + quantity;
    handleStockQuantity(quantity);
    e.target.reset();
    toast('Restock has been processed!!');
  }

  return (
    <div className='my-20'>
      <div className='mb-16'>
        <hr className='h-2 w-full mb-8' />
        <div className='grid grid-cols-1 md:grid-cols-3 gap-16 mx-4 mb-5'>
          <div className='my-auto mx-10'>
            <img className='w-full h-1/2 rounded-lg' src={picture} alt="" />
          </div>
          <div className='md:cols-span-2 mt-3 mx-auto font-semibold text-xl'>
            <div className='md:flex items-center justify-around'>
              <div>
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
              <div className='mx-auto md:mx-20'>
                <form onSubmit={handleStockForm}>
                  <label htmlFor="restock">Restock Product</label>
                  <br />
                  <input type="number" name="stock" id="" required />
                  <br />
                  <button
                    className='text-center px-10 py-3 my-3 bg-pink-300 text-black text-2xl font-semibold'
                  >Restock</button>
                </form>
              </div>
            </div>
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