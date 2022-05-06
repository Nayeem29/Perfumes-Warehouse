import React, { useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Spinner from '../../SharedComponent/Spinner';
// import ToastSuccess from '../../SharedComponent/ToastSuccess';
import auth from '../../_firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import SocialLognin from './SocialLogin/SocialLognin';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  const emailRef = useRef('');
  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
  const navigate = useNavigate();
  let errorElem;
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInWithEmailAndPassword(email, password);
  }
  if (user) {
    navigate(from, { replace: true });
  }
  if (loading) {
    return <Spinner />;
  }
  if (error) {
    errorElem =
      <p className='text-red-400'>Error:{error.message}</p>

  }
  const handleResetPassword = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    console.log(email);
    if (email) {
      await sendPasswordResetEmail(email);
      toast('password reset email sent');
    } else {
      toast('email not found');
    }
    e.target.reset();
  }
  return (
    <div className='my-16'>
      <p className='text-center text-3xl font-bold'>Please Login to Perfumers Warehouse</p>
      <div className='detail-form flex items-center justify-center my-12'>
        <form onSubmit={handleSubmitForm}>
          <input className='my-3 px-4 py-2 border-green-200 border-2'
            type="email" name='email' placeholder='Your Email' size='40' ref={emailRef} required
          />
          <br />
          <input className='my-3 px-4 py-2 border-green-200 border-2'
            type="password" name='password' placeholder='Password' size='40' required
          />
          <br />
          <p className='text-center text-green-500'
          > <small className='text-red-900 mr-1'>Forget Password?</small>
            <button
              onClick={handleResetPassword}
            >Reset</button></p>
          <ToastContainer />
          {
            error && errorElem
          }

          <button
            className='bg-green-200 text-xl font-bold px-8 rounded-sm my-5 cursor-pointer py-2 mx-auto block hover:bg-pink-300'>Login</button>
          <p className='my-16 text-center'>
            <SocialLognin />
            <small className='text-sm'>
              Not Registered yet?
            </small>
            <Link to='/register' className='text-pink-400 pl-2 font-medium mt-3'>signup</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;