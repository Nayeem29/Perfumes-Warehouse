import React, { useRef } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../_firebase.init';

const AddProduct = () => {
  const [user] = useAuthState(auth);
  const nameRef = useRef('');
  const emailRef = useRef('');
  const photoRef = useRef('');
  const priceRef = useRef(0);
  const quantityRef = useRef(0);
  const supplierRef = useRef('');
  const handleAddNewItem = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const photo = photoRef.current.value;
    const price = priceRef.current.value;
    const quantity = quantityRef.current.value;
    const supplier = supplierRef.current.value;
    const perfume = {
      'name': name,
      'email': email,
      'picture': photo,
      'price': price,
      'quantity': quantity,
      'supplier': supplier,
    }
    console.log(perfume);
    e.target.reset();
    fetch('http://localhost:5000/products/', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(perfume)
    })
      .then(res => res.json())
      .then(data => {
        console.log('success', data);

        toast('New Product is added!!');
      })
  }

  return (
    <div>
      <div className='flex items-center justify-center my-20'>
        <div className=''>
          <p className='text-3xl font-semibold text-center my-8'>Add a New Perfume here</p>
          <form onSubmit={handleAddNewItem}>
            <input className='my-3 px-4 py-2 border-green-200 border-2' type="text" name="name" id="" placeholder='Product Name' size='40' ref={nameRef} required />
            <br />
            <input className='my-3 px-4 py-2 text-gray-400 border-green-200 border-2' type="email" name="email" id="" placeholder='Email' value={user.email} size='40' ref={emailRef} readOnly required />
            <br />
            <input className='my-3 px-4 py-2 border-green-200 border-2' type="text" name="photo" id="" placeholder='Photo URL' size='40' ref={photoRef} required />
            <br />
            <input className='my-3 px-4 py-2 border-green-200 border-2' type="number" name="$price" id="" placeholder='Product Price' size='40' ref={priceRef} required />
            <br />
            <input className='my-3 px-4 py-2 border-green-200 border-2' type="number" name="quantity" id="" placeholder='Product Quantity' size='40' ref={quantityRef} required />
            <br />
            <input className='my-3 px-4 py-2 border-green-200 border-2' type="text" name="supplier" id="" placeholder='Supplier Name' size='40' ref={supplierRef} required />
            {/* <textarea className='my-3 px-4 py-2 border-green-200 border-2' type="text" name="descripton" id="" placeholder='Description' size='80' required /> */}
            <br />
            <button className='bg-green-300 text-xl font-bold px-4 rounded-sm my-5 cursor-pointer py-2 mx-auto block hover:text-white'>
              Submit</button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AddProduct;