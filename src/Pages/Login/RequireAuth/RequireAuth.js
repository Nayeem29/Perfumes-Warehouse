import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import Spinner from '../../../SharedComponent/Spinner';
import auth from '../../../_firebase.init';

const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  let location = useLocation();
  const [sendEmailVerification, sending, error] = useSendEmailVerification(
    auth
  );
  if (loading) {
    return <Spinner />
  }
  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (sending) {
    return <Spinner />;
  }
  if (!user) {

    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  if (!user.emailVerified) {
    return <div className='flex items-center justify-center my-5'>
      <div className='my-20'>
        <h1 className='sm:text-xl my-10 md:text-4xl text-red-600 font-semibold'>Email is not verified yet!!</h1>
        <h1 className='sm:text-xl md:text-4xl font-semibold'>Please Verify your Email!!</h1>
        <button className='sm:w-auto my-12 md:w-auto sm:text-sm md:text-xl block mx-auto rounded-lg font-bold bg-green-300 py-3 px-3 text-black shadow-green-300 hover:text-white'
          onClick={async () => {
            await sendEmailVerification();
            toast('email is sent for verification!!');
          }}
        >
          Click for Verify
        </button>
      </div>
      <ToastContainer />
    </div>
  }

  return children;
};

export default RequireAuth;