import React from 'react';
import useProducts from '../../CustomHooks/useProducts';
import TabularProducts from './TabularProducts/TabularProducts';
import '../Home/Home.css'
// import Perfume from '../Home/Perfume/Perfume';

const ManageInventory = () => {
  const [products] = useProducts();
  const handleRemoveBtn = (id) => {

  }
  return (
    <div>
      <div className='grid grid-cols-3 gap-4 my-12'>
        <div className='col-span-2 my-12'>
          <div className='grid grid-cols-1 md:grid-cols-2 my-8'>
            {
              products.map(product =>
                <TabularProducts
                  key={product._id} product={product} handleRemoveBtn={handleRemoveBtn}
                >{
                  }</TabularProducts>
              )
            }
          </div>
        </div>
        <div className='detail-form flex items-start justify-end mt-12 ml-12'>
          <div>
            <p className='text-3xl font-semibold text-center'>Add a New Perfume here</p>
            <form className='my-16'>
              <input className='my-3 px-4 py-2 border-green-200 border-2' type="text" name="name" id="" placeholder='Product Name' size='40' />
              <br />
              <input className='my-3 px-4 py-2 border-green-200 border-2' type="text" name="photo" id="" placeholder='Photo URL' size='40' />
              <br />
              <input className='my-3 px-4 py-2 border-green-200 border-2' type="number" name="price" id="" placeholder='Product Price' size='40' />
              <br />
              <input className='my-3 px-4 py-2 border-green-200 border-2' type="number" name="quantity" id="" placeholder='Product Quantity' size='40' />
              <br />
              <input className='my-3 px-4 py-2 border-green-200 border-2' type="text" name="supplier" id="" placeholder='Supplier Name' size='40' />
              <textarea className='my-3 px-4 py-2 border-green-200 border-2' type="text" name="descripton" id="" placeholder='Description' size='80' />
              <br />
              <input className='bg-green-200 text-xl font-bold px-4 rounded-sm my-5 cursor-pointer py-2 mx-auto block hover:bg-pink-300' type="button" value="Add Product" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageInventory;