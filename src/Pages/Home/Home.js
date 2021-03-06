import React from 'react';
import { useNavigate } from 'react-router-dom';
import useProducts from '../../CustomHooks/useProducts';
import './Home.css';
import Perfume from './Perfume/Perfume';
import Support from './Support/Support';

const Home = () => {
  const [products] = useProducts();
  const navigate = useNavigate();
  const handleProductInventory = (id) => {
    navigate(`/inventory/${id}`);
  }
  return (
    <div>
      <section className='banner h-max font-bold uppercase text-center py-4'>
        <p className='py-8 mt-12 md:text-6xl sm:text-3xl'>BEST PERFUMES IN COUNTRY</p>
        <p className='sm:text-xs md:text-lg font-light mx-32 my-5'>
          Uniform, hypoallergenic and full-service. Our US-based manufacturing teams create safe and effective scent systems to serve 83 countries around the world. Our proprietary technology and high-quality scents provide beautiful experiences in commercial settings of all sizes
        </p>
        <button onClick={() => navigate('/about')}
          className='py-8 mb-6 md:text-4xl font-semibold sm:text-xl'>Learn more...</button>
      </section>
      <p className='my-12 ml-16 text-3xl text-start font-bold'>Featured Products</p>
      <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12'>
        {
          products.slice(0, 6).map(product => <Perfume
            key={product._id} product={product}
            handleProductInventory={handleProductInventory}
          ></Perfume>)
        }
      </section>
      <div className='my-28'>
        <button
          onClick={() => navigate('/manageInventory')}
          className='sm:w-auto md:w-1/4 sm:text-sm md:text-xl block mx-auto rounded-lg font-bold bg-green-300 py-3 px-3 text-black shadow-green-300 hover:text-white'>Manage Inventory</button>
      </div>
      <section>
        <Support />
      </section>
      <div className='sm:my-8 md:flex md:items-center md:justify-center mb-12 bg-green-100 py-12'>
        <p className='my-4 text-2xl font-bold mx-8'>Sign Up to Newsletter</p>
        <p className='sm:my-8 text-2xl font-bold mx-8 md:my-auto'><small className='text-sm font-thin'>get latest information on Events, Sales and Offers</small> <br />
          Receive $10 coupon for 10+ order
        </p>
        <div className='relative subscriber my-8 md:my-auto'>
          <input className='rounded-3xl ml-5 px-6 py-2 border-pink-300' type="text" placeholder='Email' size='40'
          />
          <button className='absolute right-0 font-bold bg-pink-300 h-full rounded-r-3xl px-5'>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Home;