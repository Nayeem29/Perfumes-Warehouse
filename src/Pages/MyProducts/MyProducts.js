import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import useProducts from '../../CustomHooks/useProducts';
import auth from '../../_firebase.init';
import Products from './Products';
import { v4 as uuidv4 } from 'uuid';


const MyProducts = () => {
  const [product, setProduct] = useProducts();
  const [user] = useAuthState(auth);

  const userProduct = product.filter(p => p.email === user?.email);

  const handleRemoveItem = (id) => {
    const proceed = window.confirm('Do you confirm to delete this?');
    if (proceed) {
      const url = `https://sleepy-harbor-51437.herokuapp.com/products/${id}`;
      fetch(url, {
        method: 'DELETE'
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          toast('You have deleted one product');
          if (data.deletedCount > 0) {
            const remaining = userProduct.filter(p => p._id !== id);
            setProduct(remaining);
          }
        })
    }
  }

  return (
    <div className='md:ml-16'>
      <h1 className='text-start text-3xl font-bold my-16'>My Products:</h1>
      <div>
        {
          userProduct.map(product =>
            <Products key={uuidv4()}
              handleRemoveItem={handleRemoveItem}
              product={product}></Products>)
        }
      </div>
    </div>
  );
};

export default MyProducts;