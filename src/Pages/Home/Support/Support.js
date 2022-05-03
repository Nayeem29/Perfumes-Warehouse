import React from 'react';
import { FaShippingFast } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
import serviceIcon from '../../../Assests/serviceIcon.png'

const Support = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-8 my-16'>
      <div>
        <FaShippingFast className='text-6xl text-center font-bold mx-auto' />
        <p className='text-2xl font-bold text-center'>FAST DELIVERY SERVICE</p>
        <p className='text-gray-500 text-center text-base my-2'>Next day delivery if you order by 1PM today</p>
      </div>
      <div>
        <FaDollarSign className='text-6xl text-center font-bold mx-auto' />
        <p className='text-2xl font-bold text-center'>FREE DELIVERY</p>
        <p className='text-gray-500 text-center text-base my-2'>Free Delivery in Banani and gift wrapping available on request</p>
      </div>
      <div>
        <img className='w-16 mx-auto' src={serviceIcon} alt="" />
        <p className='text-2xl font-bold text-center'>ONLINE SUPPORT</p>
        <p className='text-gray-500 text-center text-base my-2'>For Sale & Advice Call Free 0800 917 2200.</p>
      </div>

    </div>
  );
};

export default Support;