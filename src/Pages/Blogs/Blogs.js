import React from 'react';

const Blogs = () => {
  return (
    <div>
      <div className='my-10 grid grid-cols-2 gap-10 mx-7'>
        <div className='my-5 mx-auto px-5 py-10 text-justify'>
          <p className='font-bold text-xl'>Difference between javascript and nodejs:</p>
          <p className='text-lg font-normal mt-3'>
            Javascript is a scripting language which is used for making dynamic HTML webpages. Every browser has javascript engine (chrome: v8, firefox: spider monkey, safari: JS core) which helps us to run the code. We can only run it on browser and thus it is called client side or frontend development. <br />
            On the other hand, Node JS is a runtime environment which helps javascript to run outside the browser. That's why we use it for server-side. it has v8 engine which is capable in parsing and running javascript behind the door. Commonly used node js modules are express, next and lodash.
          </p>
        </div>
        <div className='my-5 mx-auto px-5 py-10 text-justify'>
          <p className='font-bold text-xl'>When should we use nodejs and mongodb:</p>
          <p className='text-lg font-normal mt-3'>
            Every programming language needs a runtime environment/library which leads to compile and intrepret the code. So, we need to create a server for making various operations we will use node js for javascript language because nodeJS has a runtime environment for JS, thus it can interpret the code easily. <br />
            And mongodb helps us to store different data which would be shown in the client side. Additionally, it leads us to making query and showing data in the web page based on users' choice. In simpler way, when we will need to store and maintain data, we have to use database like mongodb.
          </p>
        </div>
        <div className='my-5 mx-auto px-5 py-10 text-justify'>
          <p className='font-bold text-xl'>Difference between SQL and noSQL databases:</p>
          <p className='text-lg font-normal mt-3'>SQL is a structured query languages and it requires predefined schemas which shapes the data we enter. SQL usually is used when we have complex queries. Since it is table based and each table has a relation with another so, it is also called RDMS or relational database managment system.
            <br />
            NoSQL database is not structured and it can store dynamic schemas. The data is stored based on key-value pairs, document based, graph database or wide-column stores. However, usually we avoids noSQL for  complex queries.
          </p>
        </div>
        <div className='my-5 mx-auto px-5 py-10 text-justify'>
          <p className='font-bold text-xl'>The purpose of jwt and how does it work:</p>
          <p className='text-lg font-normal mt-3'>JWT or Json Web Token is an open standard securely transmitting information between two parties. It has three parts: Header, Payload and Signature. Header contains token, payload has claims and signature ensures the token hasn't been altered. We use jwt for ensuring the authenticity of the data.
            <br />
            When a user logs in the application with email and password the server confirms the identity and sends a token containing reference. The client then includes this token on every request to the server. Since jwt is lightweight and stateless, it doesn't require client or server to maintain sessions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;