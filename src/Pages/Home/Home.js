import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div>
      <section className='banner h-min font-bold uppercase text-center py-4'>
        <p className='py-8 mt-12 text-6xl'>GET BEST VARIETY OF PERFUMES </p>
        <p className='text-sm font-medium mx-32 my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae consequatur voluptatibus earum dolore dolorum magnam porro dolor dicta vel, sunt minus totam eveniet veritatis deserunt expedita eligendi cumque asperiores pariatur? Accusamus quia quibusdam minus asperiores repudiandae cum maiores. Fugit, praesentium.</p>
        <button className='py-8 mb-6 text-4xl font-semibold'>Learn more...</button>
      </section>
      <p className='my-8 text-3xl text-center font-bold'>Unique Perfumes</p>
    </div>
  );
};

export default Home;