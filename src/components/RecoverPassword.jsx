import { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Link } from 'react-router-dom';

import Swal from 'sweetalert2';

import { MdAlternateEmail } from 'react-icons/md';

export const RecoverPassword = () => {
  const [email, setEmail] = useState();

  const { recoverPassword } = useContext(AuthContext);

  const handleForgotPassword = async () => {
    if (!email) {
      Swal.fire({
        title: 'Error!',
        text: 'Please enter your email',
        icon: 'error',
        confirmButtonText: 'Try again',
      });
    } else {
      await recoverPassword(email);
      Swal.fire({
        title: 'Check your email!',
        text: 'We have sent you an email with instructions to recover your password',
        icon: 'success',
      });
    }
  };

  return (
    <div className="flex w-full h-screen">
      <div className="w-full flex items-center justify-center px-10">
        <div className="bg-white lg:px-32 px-10 py-20 rounded-3xl shadow-sm">
          <h1 className="text-4xl lg:text-5xl font-semibold text-indigo-500">
            Recover your password
          </h1>
          <p className="font-medium text-lg text-gray-500 mt-4">
            Please type your email so we can send you the link to reset your
            password
          </p>
          <div className="mt-8">
            <div>
              <label
                htmlFor="email"
                className="text-lg font-medium text-gray-800"
              >
                Email
              </label>
              <div className="relative flex items-center justify-end">
                <MdAlternateEmail className="w-5 h-5 absolute mr-5 text-gray-400" />
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Type your email"
                  id="email"
                  className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent text-gray-800 focus:outline-indigo-300"
                />
              </div>
            </div>
            <div className="mt-8 flex flex-col gap-y-4">
              <button
                onClick={handleForgotPassword}
                className="bg-indigo-500 text-white text-xl font-bold rounded-xl py-3 hover:bg-indigo-600 hover:scale-[1.01] ease-in-out active:scale-[.98] active:duration-75 transition-all"
              >
                Send Link
              </button>
            </div>
            <div className="mt-8 flex justify-center items-center gap-2">
              <p className="font-medium text-base">
                Did you remember your password?
              </p>
              <Link
                to={'/login'}
                className="text-indigo-500 font-bold text-base hover:underline"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
