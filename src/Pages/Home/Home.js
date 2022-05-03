import React from 'react';
import useProducts from '../../CustomHooks/useProducts';
import './Home.css';
import Perfume from './Perfume/Perfume';
import Support from './Support/Support';

const Home = () => {
  const [products] = useProducts();
  return (
    <div>
      <section className='banner h-min font-bold uppercase text-center py-4'>
        <p className='py-8 mt-12 md:text-6xl sm:text-3xl'>BEST PERFUMES IN COUNTRY</p>
        <p className='text-sm font-medium mx-32 my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae consequatur voluptatibus earum dolore dolorum magnam porro dolor dicta vel, sunt minus totam eveniet veritatis deserunt expedita eligendi cumque asperiores pariatur? Accusamus quia quibusdam minus asperiores repudiandae cum maiores. Fugit, praesentium.</p>
        <button className='py-8 mb-6 md:text-4xl font-semibold sm:text-xl'>Learn more...</button>
      </section>
      <p className='my-8 text-3xl text-center font-bold'>Unique Perfumes</p>
      <section className='grid grid-cols-1 md:grid-cols-3 gap-5 mb-12'>
        {
          products.slice(0, 6).map(product => <Perfume
            key={product._id} product={product}
          ></Perfume>)
        }
      </section>
      <section>
        <Support />
      </section>
      <div className='sm:my-8 md:flex md:items-center md:justify-center mb-12 bg-green-200 py-12'>
        <p className='my-4 text-2xl font-bold mx-8'>Sign Up to Newsletter</p>
        <p className='sm:my-8 text-2xl font-bold mx-8 md:my-auto'><small className='text-sm font-thin'>get latest information on Events, Sales and Offers</small> <br />
          Receive $10 coupon for 10+ order
        </p>
        <div className='relative subscriber my-8 md:my-auto'>
          <input className='rounded-3xl ml-5 px-6 py-2 border-pink-300' type="text" placeholder='Email' size='40' />
          <button className='absolute right-0 font-bold bg-pink-300 h-full rounded-r-3xl px-5'>Subscribe</button>
        </div>

      </div>
    </div>
  );
};

export default Home;