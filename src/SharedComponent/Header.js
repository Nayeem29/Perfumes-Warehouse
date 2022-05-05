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

const Header = () => {
  const routes = [
    { id: 1, name: 'Home', link: '/' },
    { id: 1, name: 'Blogs', link: '/blogs' },
    { id: 1, name: 'About', link: '/about' }
  ];
  const navLinkStyles = ({ isActive }) => {
    return {
      color: isActive ? 'pink' : 'black',
      fontSize: isActive ? '20px' : '20px',
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
    <div className={`mb-4 sticky top-0 z-10 bg-white ${open ? 'h-48' : 'h-14'}`}>
      <nav className='flex items-center justify-between'>
        <div>
          <p className='text-3xl font-semibold uppercase my-auto text-pink-400 ml-4'>Simplex Perfumer</p>
        </div>
        <div>
          <nav className='md:flex items-center md:justify-end py-4 md:px-10 px-7'>
            <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 left-0' : 'top-[-490px]'}`}>
              {
                routes.map(route =>
                  <li className='mr-8'>
                    <NavLink style={navLinkStyles} key={route.id} to={route.link}>{route.name}</NavLink>
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