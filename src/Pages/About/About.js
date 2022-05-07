import React from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { toast, ToastContainer } from 'react-toastify';

const About = () => {
  const handleFormDetails = (e) => {
    e.preventDefault();
    toast('Thank you for reaching us!!')
  }
  return (
    <div className='my-12'>
      <div className='flex items-start justify-around my-20'>
        <div>
          <p className='mx-12 my-12 font-bold text-xl'>Write Us</p>
          <div>
            <form onSubmit={handleFormDetails}>
              <div className='flex items-start justify-between'>
                <div className='mx-12 text-lg font-medium text-gray-400'>
                  <label htmlFor="name">Name</label> <br />
                  <input type="text" name="name" id="" size='40' required />
                  <br />
                  <label htmlFor="email">Email</label> <br />
                  <input type="email" name="email" id="" size='40' required />
                  <br />
                  <label htmlFor="phone">Mobile Number</label> <br />
                  <input type="number" name="phone" id="" size='40' required />
                </div>
                <div className='mx-12 text-lg font-medium text-gray-400'>
                  <label htmlFor="description">What's on your mind</label> <br />
                  <textarea name="" id="" cols="30" rows='10' required></textarea>
                </div>
              </div>
              <button className='mx-12 bg-pink-300 text-xl font-bold px-4 rounded-sm my-5 cursor-pointer py-2 block hover:text-white'>Submit</button>
            </form>
          </div>
        </div>
        <div className='mx-12 my-12 '>
          <p className='font-bold text-xl'>Contact Details</p>
          <div className='my-12'>
            <div className='my-5 flex items-center'>
              <FaPhoneAlt className='mx-3 cursor-pointer text-4xl p-2 rounded-lg bg-pink-500 hover:text-white' />
              <p className='font-medium text-gray-400 text-lg'>0800 917 2200</p>
            </div>
            <div className='my-5 flex items-center'>
              <FaEnvelope className='mx-3 cursor-pointer text-4xl p-2 rounded-lg bg-pink-500 hover:text-white' />
              <p className='font-medium text-gray-400 text-lg'>info@perfumerswarhouse.com</p>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default About;