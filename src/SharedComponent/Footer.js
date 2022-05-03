import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaSnapchat } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-20 mt-28'>
        <div className="categories">
          <p className='text-xl font-bold'>Categories</p>
          <ul className='text-gray-600 my-6'>
            <li>Fragrance</li>
            <li>Bath and Beauty</li>
            <li>Men's</li>
            <li>Makeup</li>
          </ul>
        </div>
        <div className="about">
          <p className='text-xl font-bold'>About</p>
          <ul className='text-gray-600 my-6'>
            <li>Contact us</li>
            <li>Private Policy</li>
            <li>Cookie Policy</li>
            <li>Terms and Conditions</li>
          </ul>
        </div>
        <div className="customer">
          <p className='text-xl font-bold'>Customer Care</p>
          <ul className='text-gray-600 my-6'>
            <li>My Account</li>
            <li>Wishlist</li>
            <li>Customer Services</li>
            <li>FAQs</li>
          </ul>
        </div>
        <div className="social-icon">
          <ul>
            <li className='text-base font-semibold text-gray-500'>CALL US NOW: <br />
              <small className='text-base font-normal'>0800 917 2200</small>
            </li>
            <li className='text-xl font-bold my-8'>
              <small className='text-xl text-gray-400'>
                E-MAIL ADDRESS:
              </small> <br />
              info@perfumerswarhouse.com
            </li>
            <li>FOLLOW US <br />
              <div className='flex items-center justify-start'>
                <FaInstagram className='mx-2 text-4xl hover:text-red-600 cursor-pointer mt-3 md:border-2 md:rounded-full' />
                <FaFacebook className='mx-2 text-4xl hover:text-blue-600 cursor-pointer mt-3 md:border-2 md:rounded-full' />
                <FaYoutube className='mx-2 text-4xl hover:text-red-900 cursor-pointer mt-3 md:border-2 md:rounded-full' />
                <FaSnapchat className='mx-2 text-4xl hover:text-amber-400 cursor-pointer mt-3 md:border-2 rounded-full' />
                <FaPinterest className='mx-2 text-4xl hover:text-red-500 cursor-pointer mt-3 md:border-2 md:rounded-full' />
              </div>
            </li>
          </ul>
        </div>
      </div>
      <hr className='w-full h-2 mt-3' />
      <div className="flex justify-center mt-4">
        <div className="text-start text-base text-gray-600 ">
          <div>&copy; All Copyright reserved to Perfumers Warehouse LTD  {new Date().getFullYear()}</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;