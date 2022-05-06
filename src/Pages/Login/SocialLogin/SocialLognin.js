import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import googleIcon from '../../../Assests/google.png';
import Spinner from '../../../SharedComponent/Spinner';
import auth from '../../../_firebase.init';
const SocialLognin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  let errorELem;
  if (user) {
    navigate(from, { replace: true });
  }
  if (loading) {
    <Spinner />
  }
  if (error) {
    errorELem = <div>
      <p>Error:{error.message}</p>
    </div>
  }
  return (
    <div>
      <div className='flex items-center justify-center my-6'>
        <div className='h-1 w-1/2 bg-pink-400'></div>
        <p className='px-2'>or</p>
        <div className='h-1 w-1/2 bg-pink-400'></div>
      </div>
      {
        error && errorELem
      }
      <button
        onClick={() => {
          signInWithGoogle()
        }}
        className='mx-auto my-3 block border-2 pl-4 py-1 rounded-full bg-green-300 text-xl hover:bg-pink-300 text-black h-12 w-3/4'
      >
        <img className='w-8 h-8 inline-block' src={googleIcon} alt="" />
        <span className='pl-2'>Google Sign in</span>
      </button>
    </div>
  );
};

export default SocialLognin;