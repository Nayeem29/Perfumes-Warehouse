import React from 'react';
import useProducts from '../../CustomHooks/useProducts';
import './Home.css';
import Perfume from './Perfume/Perfume';

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
      <section className='grid grid-cols-1 md:grid-cols-3 gap-5'>
        {
          products.slice(0, 6).map(product => <Perfume
            key={product._id} product={product}
          ></Perfume>)
        }
      </section>
    </div>
  );
};

export default Home;