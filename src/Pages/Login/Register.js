import React, { useState } from 'react';
import auth from '../../_firebase.init';
import '../Home/Home.css';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import Spinner from '../../SharedComponent/Spinner';
import SocialLognin from './SocialLogin/SocialLognin';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const [agree, setAgree] = useState(false);
  const navigate = useNavigate();
  let errorElem;
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const handleSubmitForm = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPass = e.target.confirmPassword.value;
    e.target.reset();
    if (password === confirmPass) {
      createUserWithEmailAndPassword(email, password);
      toast('Check email for verify');
    }
  }
  if (user) {
    navigate('/login');
  }
  if (error) {
    errorElem =
      <p className='text-red-600'>Error:{error.message}</p>

  }
  if (loading) {
    <Spinner />
  }
  return (
    <div>
      <div className='my-12'>
        <p className='text-center font-bold text-2xl'>Please Register here!!!</p>
      </div>
      <div className='detail-form flex items-center justify-center'>
        <form onSubmit={handleSubmitForm}>
          <input className='my-3 px-4 py-2 border-green-200 border-2'
            type="text" name='name' placeholder='Your Name' size='60' required
          />
          <br />
          <input className='my-3 px-4 py-2 border-green-200 border-2'
            type="email" name='email' placeholder='Your Email' size='60' required
          />
          <br />
          <input className='my-3 px-4 py-2 border-green-200 border-2'
            type="text" name='address' placeholder='Address' size='60' required
          />
          <br />
          <input className='my-3 px-4 py-2 border-green-200 border-2'
            type="password" name='password' placeholder='Password' size='60' required
          />
          <br />

          <input className='my-3 px-4 py-2 border-green-200 border-2'
            type="password" name='confirmPassword' placeholder='Confirm Password' size='60' required
          />
          <br />
          <input type="checkbox" name="terms" id="terms"
            className='ml-5 my-5 mr-2'
            onClick={() => { setAgree(!agree) }}
          />
          <label htmlFor="terms"
            className={`${agree ? "text-green-600" : "text-red-700"}`}>
            Accept Terms and Conditions</label>
          {
            error && errorElem
          }
          <ToastContainer />
          <button disabled={!agree}
            className='bg-green-200 text-xl font-bold px-4 rounded-sm my-5 cursor-pointer py-2 mx-auto block hover:bg-pink-300'>Registration</button>
          <SocialLognin />
          <p className='my-16 text-center'>
            <small className='text-sm'>
              Already have an account?
            </small>
            <Link to='/login' className='text-pink-600 pl-2 font-medium mt-3'>Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;