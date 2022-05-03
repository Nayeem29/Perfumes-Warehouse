import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const routes = [
    { id: 1, name: 'Home', link: '/' },
    { id: 1, name: 'Blogs', link: '/blogs' },
    { id: 1, name: 'About', link: '/about' }
  ];
  const navLinkStyles = ({ isActive }) => {
    return {
      color: isActive ? 'orange' : 'black',
      fontSize: isActive ? '20px' : '20px',
      fontWeight: isActive ? 'bold' : 'normal'
    }
  }
  return (
    <div className='my-4'>
      <nav className='flex items-center justify-between'>
        <div>
          <p className='text-3xl font-semibold uppercase text-amber-400 ml-4'>Simplex Perfumer</p>
        </div>
        <div>
          <nav>
            <ul className='md:flex md:items-center md:pb-0 pb-12'>
              {
                routes.map(route =>
                  <li className='mr-8'>
                    <NavLink style={navLinkStyles} key={route.id} to={route.link}>{route.name}</NavLink>
                  </li>
                )
              }
            </ul>
          </nav>
        </div>
      </nav>
    </div>
  );
};

export default Header;