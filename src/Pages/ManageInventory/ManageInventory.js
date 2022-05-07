import React from 'react';
import useProducts from '../../CustomHooks/useProducts';
import TabularProducts from './TabularProducts/TabularProducts';
import '../Home/Home.css';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
const ManageInventory = () => {
  const [products, setProducts] = useProducts();

  const navigate = useNavigate();

  const addNewItem = () => {
    navigate('/addproduct');
  }

  const handleUpdateBtn = (id) => {
    navigate(`/inventory/${id}`);
  }

  const handleRemoveBtn = (id) => {
    const proceed = window.confirm('Do you confirm to delete this?');
    if (proceed) {
      const url = `http://localhost:5000/products/${id}`;
      fetch(url, {
        method: 'DELETE'
      })
        .then(res => res.json())
        .then(data => {
          toast('You have deleted one product');
          if (data.deletedCount > 0) {
            const remaining = products.filter(p => p._id !== id);
            setProducts(remaining);
          }
        })
    }
  }


  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 my-12'>
        <div className='md:col-span-2 my-12'>
          <div className='grid grid-cols-1 my-8'>
            {
              products.map(product =>
                <TabularProducts
                  key={product._id} product={product}
                  handleUpdateBtn={handleUpdateBtn}
                  handleRemoveBtn={handleRemoveBtn}
                ></TabularProducts>
              )
            }
          </div>
        </div>
        <div className=' sticky top-5'>
          <button onClick={addNewItem}
            className='bg-green-300 text-xl font-bold px-4 rounded-sm my-5 cursor-pointer py-2 mx-auto block hover:text-white'>Add New Product</button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ManageInventory;