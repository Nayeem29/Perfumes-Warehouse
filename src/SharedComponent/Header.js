import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink, useNavigate } from 'react-router-dom';
import auth from '../_firebase.init';
import Spinner from './Spinner';
import { FaSignOutAlt } from "react-icons/fa";
import { FaSignInAlt } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { v4 as uuidv4 } from 'uuid';

const Header = () => {
  const routes = [
    { id: 1, name: 'Home', link: '/' },
    { id: 2, name: 'Blogs', link: '/blogs' },
    { id: 3, name: 'Contact', link: '/about' }
  ];
  const userRoutes = [
    { id: 4, name: 'Manage', link: '/manageInventory' },
    { id: 5, name: 'My Products', link: '/myProducts' },
    { id: 6, name: 'Add Product', link: '/myProducts' },
  ];
  const navLinkStyles = ({ isActive }) => {
    return {
      fontSize: isActive ? '20px' : '20px',
      textDecoration: isActive ? 'underline' : 'none',
      textDecorationColor: isActive ? '#FF69B4' : 'none',
      textUnderlineOffset: isActive ? '4px' : 'none',
      fontWeight: isActive ? 'bold' : 'normal'
    }
  }
  const [user, loading] = useAuthState(auth);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const logout = () => {
    signOut(auth);
    navigate('/login');
  };
  if (loading) {
    return <Spinner />
  }
  return (
    <div className={` sticky top-0 z-10 bg-gray-100 ${open ? 'h-40' : 'h-14'} ${open && user ? 'h-60' : 'h-14'}`} >
      <nav className='flex items-center justify-between'>
        <div>
          <p className='sm:text-xl md:text-3xl font-semibold uppercase my-auto ml-4'>Perfumers Warehouse</p>
        </div>
        <div>
          <nav className='md:flex items-center md:justify-end py-4 md:px-10 px-7'>
            <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-10 left-0' : 'top-[-490px]'}`}>
              {
                routes.map(route =>
                  <li className='mr-8'>
                    <NavLink className='px-2' style={navLinkStyles} key={uuidv4()} to={route.link}>{route.name}</NavLink>
                  </li>
                )
              }
              {
                user &&
                userRoutes.map(route =>
                  <li className='mr-4'>
                    <NavLink className='px-2' style={navLinkStyles} key={uuidv4()} to={route.link}>{route.name}</NavLink>
                  </li>
                )
              }
              {
                user ?


                  <button className='px-5' onClick={logout}><FaSignOutAlt className='text-xl' /></button>
                  :
                  <NavLink style={navLinkStyles} className='px-5' to='/login'><FaSignInAlt className='text-xl text-black inline' /></NavLink>
              }
            </ul>
            <div onClick={() => setOpen(!open)} className='text-2xl absolute right-8 top-5 cursor-pointer md:hidden'>
              {
                open ?
                  <FaTimes />
                  :
                  <FaBars />
              }
            </div>
          </nav>
        </div>
      </nav>
    </div>
  );
};

export default Header;